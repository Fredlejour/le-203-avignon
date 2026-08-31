"use client";

import { useState, useEffect } from "react";
import { FileText } from "lucide-react";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-warm-300 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3">
        <a
          href="#contact-form"
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-gold-500 text-white font-semibold text-sm tracking-wide uppercase rounded-sm shadow-lg"
        >
          <FileText size={16} />
          Recevoir le dossier complet
        </a>
      </div>
    </div>
  );
}
