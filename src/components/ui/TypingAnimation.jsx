import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export function TypingAnimation({
  children,
  className,
  duration = 30, // Harf yazılma hızı (ms)
  delay = 0,     // Başlama gecikmesi
  ...props
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [children, duration, started]);

  return (
    <div className={cn("inline-block", className)} {...props}>
      {displayedText}
      {/* Terminal efekti için yanıp sönen yeşil imleç */}
      <span className="animate-pulse ml-1 inline-block w-[8px] h-[1em] bg-emerald-500 align-middle" />
    </div>
  );
}