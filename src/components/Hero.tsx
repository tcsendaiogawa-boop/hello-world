"use client";
import { useEffect, useRef } from "react";

const badges = ["全国対応", "AI導入支援", "Claude対応", "ChatGPT対応", "中小企業対応"];

export default function Hero() {
  const meshRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!meshRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      meshRef.current.style.transform = `translate(${x}px,${y}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-36 pb-24 px-14 overflow-hidden" id="top">
      {/* Mesh */}
      <div
        ref={meshRef}
        className="absolute inset-0 animate-meshShift transition-transform duration-75"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%,rgba(0,209,255,.07) 0%,transparent 60%),radial-gradient(ellipse 50% 60% at 20% 70%,rgba(124,58,237,.08) 0%,transparent 60%)",
        }}
      />
      {/* Grid */}
      <div className="absolute inset-0 hero-grid" />

      <div className="relative z-10 max-w-[760px]">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-3 mb-10"
          style={{ animation: "fadeUp .8s .2s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <span className="font-en text-[10px] font-semibold tracking-[.28em] uppercase text-cyan border border-cyan/30 bg-cyan/[0.06] px-3.5 py-1.5 rounded-full">
            THE AI SHIFT
          </span>
          <div className="w-10 h-px bg-gradient-to-r from-cyan to-transparent" />
        </div>

        {/* Main tag */}
        <h1
          className="font-en font-bold leading-[.95] tracking-[-0.03em] mb-5 bg-grad-text bg-clip-text text-transparent"
          style={{
            fontSize: "clamp(60px,9vw,110px)",
            animation: "fadeUp .9s .35s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          THE AI SHIFT
        </h1>

        {/* JA subtitle */}
        <p
          className="font-ja font-light leading-[1.55] tracking-[.04em] text-txt-1 mb-8"
          style={{
            fontSize: "clamp(26px,3.5vw,42px)",
            animation: "fadeUp .9s .5s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          企業の未来を、<br />
          <strong className="font-medium text-white">AIでアップデートする。</strong>
        </p>

        {/* Description */}
        <p
          className="font-ja font-light text-[15px] leading-[2] text-txt-2 max-w-[520px] mb-14"
          style={{ animation: "fadeUp .9s .65s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          株式会社True Colorsは、Claude・ChatGPTなどの生成AIを活用し、<br />
          企業ごとの課題に合わせたAI導入支援を行っています。
        </p>

        {/* Actions */}
        <div
          className="flex items-center gap-5 flex-wrap"
          style={{ animation: "fadeUp .9s .8s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <a href="#contact" className="btn-main">
            <span>無料AI相談をする</span>
            <ArrowIcon />
          </a>
          <a href="#contact" className="btn-sub">AI導入診断を受ける</a>
        </div>

        {/* Badges */}
        <div
          className="flex items-center flex-wrap mt-14 pt-10 border-t border-white/[.07]"
          style={{ animation: "fadeUp .8s 1s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          {badges.map((b, i) => (
            <span key={b} className="font-ja text-[12px] font-light tracking-[.06em] text-txt-2 flex items-center gap-2 pr-7 relative">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
              {b}
              {i < badges.length - 1 && (
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-white/20" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-14 flex flex-col items-center gap-3"
        style={{ animation: "fadeUp .8s 1.2s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-cyan animate-scrollPulse" />
        <span
          className="font-en text-[9px] tracking-[.25em] uppercase text-white/30"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .btn-main {
          display:inline-flex;align-items:center;gap:10px;
          font-family:'Noto Sans JP',sans-serif;font-size:14px;font-weight:500;letter-spacing:.08em;
          color:#fff;
          background:linear-gradient(135deg,#7C3AED,#4f1db5);
          border:none;padding:16px 32px;border-radius:3px;
          text-decoration:none;cursor:none;
          transition:all .35s cubic-bezier(0.16,1,0.3,1);
          position:relative;overflow:hidden;
        }
        .btn-main::before {
          content:'';position:absolute;inset:0;
          background:linear-gradient(135deg,#00D1FF,#7C3AED);
          opacity:0;transition:opacity .4s;
        }
        .btn-main:hover::before { opacity:1; }
        .btn-main:hover { transform:translateY(-2px); box-shadow:0 12px 32px rgba(124,58,237,.3); }
        .btn-main span,.btn-main svg { position:relative;z-index:1; }
        .btn-sub {
          display:inline-flex;align-items:center;gap:10px;
          font-family:'Noto Sans JP',sans-serif;font-size:14px;font-weight:400;letter-spacing:.06em;
          color:#D1D5DB;
          border:1px solid rgba(255,255,255,.12);padding:15px 28px;border-radius:3px;
          text-decoration:none;cursor:none;
          transition:all .3s cubic-bezier(0.16,1,0.3,1);
        }
        .btn-sub:hover { color:#fff;border-color:rgba(255,255,255,.25);background:rgba(255,255,255,.04);transform:translateY(-2px); }
      `}</style>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
