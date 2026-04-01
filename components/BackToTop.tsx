"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-[998] hidden lg:flex w-11 h-11 items-center justify-center rounded-full bg-secondary border border-border shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-secondary-lighter transition-colors duration-200"
      aria-label="Înapoi sus"
    >
      <ArrowUp className="w-5 h-5 text-secondary-foreground" strokeWidth={1.5} />
    </button>
  );
}
