"use client";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("rv-on");
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`rv-base ${className}`} style={{ opacity: 0, transform: "translateY(28px)" }}>
      {children}
      <style>{`
        .rv-base { transition: opacity .85s cubic-bezier(0.16,1,0.3,1), transform .85s cubic-bezier(0.16,1,0.3,1); }
        .rv-on   { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </div>
  );
}
