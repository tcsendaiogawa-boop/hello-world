"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "サービス" },
  { href: "#industries", label: "業種別" },
  { href: "#flow", label: "導入の流れ" },
  { href: "#works", label: "実績" },
  { href: "#about", label: "私たちについて" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "px-14 py-[18px] bg-[rgba(11,15,25,0.85)] backdrop-blur-2xl border-b border-white/[0.07]"
          : "px-14 py-7"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
    >
      <Link href="/" className="flex flex-col gap-0.5 no-underline">
        <span className="font-en text-[16px] font-bold tracking-[.06em] text-white">
          TRUE COLORS
        </span>
        <span className="font-ja text-[9px] tracking-[.22em] text-white/30">
          株式会社トゥルーカラーズ
        </span>
      </Link>

      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-ja text-[13px] font-normal tracking-[.06em] text-txt-2 no-underline hover:text-white transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan group-hover:w-full transition-[width] duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }} />
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="font-ja text-[13px] font-medium tracking-[.08em] text-white bg-gradient-to-br from-purple to-[#4f1db5] px-6 py-[11px] rounded-[3px] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,58,237,0.3)]"
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      >
        無料AI相談
      </a>
    </nav>
  );
}
