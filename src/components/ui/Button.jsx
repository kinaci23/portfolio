import React from "react";
import { cn } from "../../lib/utils";

export function Button({ href, children, className, ...props }) {
  return (
    <a
      href={href}
      className={cn(
        // Navbar gibi tam oval (rounded-full), iç boşlukları dengeli, 
        // üzerine gelince yumuşak renk geçişi yapan (transition-all) standart tasarım.
        "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-bold transition-all duration-300 active:scale-95",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}