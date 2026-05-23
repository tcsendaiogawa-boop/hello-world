"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-bg-0 z-[9995] flex flex-col items-center justify-center gap-6 transition-[opacity,visibility] duration-700 ${
        hidden ? "opacity-0 invisible pointer-events-none" : "opacity-100 visible"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
    >
      <p
        className="font-en text-[22px] font-semibold tracking-[.12em] text-white"
        style={{ animation: "loaderFadeUp .8s .2s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        TRUE COLORS
      </p>
      <div
        className="w-[180px] h-px bg-white/10 overflow-hidden"
        style={{ animation: "loaderFadeUp .5s .5s both" }}
      >
        <div
          className="loader-bar-fill h-full bg-gradient-to-r from-cyan to-purple"
        />
      </div>
      <style>{`
        @keyframes loaderFadeUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>
    </div>
  );
}
