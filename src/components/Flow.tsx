"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const steps = [
  { n: "01", title: "無料相談", desc: "課題・目標・体制を丁寧にヒアリング" },
  { n: "02", title: "業務分析", desc: "現状の業務フローを可視化・整理" },
  { n: "03", title: "AI導入提案", desc: "最適なツール・方法・スケジュールを提案" },
  { n: "04", title: "テスト運用", desc: "小規模PoC→効果検証→改善" },
  { n: "05", title: "社内導入", desc: "全社展開・研修・システム連携" },
  { n: "06", title: "定着支援", desc: "定期レビューで継続的に改善" },
];

export default function Flow() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          steps.forEach((_, i) => {
            setTimeout(() => setActive((prev) => Math.max(prev, i)), i * 280 + 400);
          });
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-[#0F1422] border-t border-white/[.07] py-[120px] px-14" id="flow">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-20">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="w-[5px] h-[5px] rounded-full bg-cyan" />
              <span className="font-en text-[10px] font-semibold tracking-[.3em] uppercase text-cyan">Process</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-ja font-light text-white" style={{ fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1.5 }}>
              導入の流れ
            </h2>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <p className="font-ja text-[15px] font-light leading-[1.9] text-txt-2">
            相談から最短2週間でPoC開始。丁寧なヒアリングから始めます。
          </p>
        </Reveal>
      </div>

      <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 relative">
        {/* Connector line (desktop) */}
        <div className="absolute top-8 left-[8.33%] right-[8.33%] h-px bg-white/[.07] hidden lg:block">
          <div
            className="h-full bg-gradient-to-r from-cyan to-purple transition-[width] duration-[2000ms]"
            style={{
              width: active >= steps.length - 1 ? "100%" : "0%",
              transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
            }}
          />
        </div>

        {steps.map((s, i) => (
          <div key={s.n} className="flex flex-col items-center text-center relative z-10">
            <div
              className={`w-16 h-16 rounded-full border flex items-center justify-center font-en text-[14px] font-semibold mb-5 transition-all duration-500 ${
                active >= i
                  ? "border-cyan text-cyan bg-cyan/10 shadow-[0_0_20px_rgba(0,209,255,0.25)]"
                  : "border-white/[.07] text-white/30 bg-[#0F1422]"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              {s.n}
            </div>
            <div className="font-ja text-[13px] font-medium mb-1.5">{s.title}</div>
            <div className="font-ja text-[11px] font-light leading-[1.7] text-txt-2">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
