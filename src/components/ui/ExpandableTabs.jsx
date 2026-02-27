import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "../../lib/utils";

const buttonVariants = {
  initial: { gap: 0, paddingLeft: ".5rem", paddingRight: ".5rem" },
  animate: (isSelected) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1.25rem" : ".75rem",
    paddingRight: isSelected ? "1.25rem" : ".75rem",
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: "spring", bounce: 0, duration: 0.6 };

export function ExpandableTabs({ tabs, className, activeColor = "text-white", onChange }) {
  const [selected, setSelected] = React.useState(null);
  const outsideClickRef = React.useRef(null);

  useOnClickOutside(outsideClickRef, () => {
    setSelected(null);
    onChange?.(null);
  });

  const handleSelect = (index, tab) => {
    setSelected(index);
    onChange?.(index);
    if (tab.id) {
      const element = document.getElementById(tab.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const Separator = () => (
    // UYARI BURADAYDI: h-[24px] yerine h-6 kullandık.
    <div className="mx-2 h-6 w-[1.2px] bg-neutral-700" aria-hidden="true" />
  );

  return (
    <div
      ref={outsideClickRef}
      className={cn(
        // 'border border-white/10' ekledik. Bu saydam ve çok zarif bir çizgi verecek.
        "flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-neutral-950/90 backdrop-blur-md p-2 shadow-lg",
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }
        const Icon = tab.icon;
        return (
          <motion.button
            key={tab.title}
            variants={buttonVariants}
            initial={false}
            animate="animate"
            custom={selected === index}
            onClick={() => handleSelect(index, tab)}
            transition={transition}
            className={cn(
              // Yazı boyutunu (text-base) ve iç boşlukları (py-2.5) artırdık
              "relative flex items-center rounded-full px-5 py-2.5 text-base font-medium transition-colors duration-300",
              selected === index
                ? cn("bg-neutral-800", activeColor)
                : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-50"
            )}
          >
            {/* İkon boyutunu 20'den 24'e çıkardık */}
            <Icon size={24} />
            <AnimatePresence initial={false}>
              {selected === index && (
                <motion.span
                  variants={spanVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}