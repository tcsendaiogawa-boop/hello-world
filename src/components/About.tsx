import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="bg-[#0F1422] border-t border-white/[.07] py-[120px] px-14 relative overflow-hidden" id="about">
      {/* Background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-en font-bold text-transparent pointer-events-none whitespace-nowrap tracking-[-0.03em] select-none"
        style={{
          fontSize: "clamp(80px,16vw,200px)",
          WebkitTextStroke: "1px rgba(255,255,255,0.035)",
        }}
      >
        TRUE COLORS
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <Reveal>
          <div className="inline-flex items-center justify-center gap-2.5 mb-5">
            <span className="w-[5px] h-[5px] rounded-full bg-cyan" />
            <span className="font-en text-[10px] font-semibold tracking-[.3em] uppercase text-cyan">About</span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="font-ja font-light leading-[1.7] tracking-[.06em] mb-10"
            style={{ fontSize: "clamp(22px,3vw,36px)" }}
          >
            AIは、<br />
            <strong className="font-medium text-white">一部の大企業だけのものではありません。</strong>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="w-15 h-px mx-auto bg-gradient-to-r from-transparent via-cyan to-purple mb-10" style={{ width: "60px" }} />
        </Reveal>
        <Reveal delay={300}>
          <p className="font-ja text-[15px] font-light leading-[2.1] text-txt-2">
            True Colorsは、
            <span className="text-white" style={{ background: "linear-gradient(135deg,#00D1FF,#7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              企業に合わせたAI活用
            </span>
            を一緒に考えます。<br /><br />
            「難しそう」「うちには関係ない」という先入観を取り除き、<br />
            あなたの会社が本来持っている強さや色を、<br />
            AIの力で最大限に引き出すこと——<br />
            それが私たちのミッションです。<br /><br />
            全国どこでも対応。中小企業から大企業まで、<br />
            規模を問わず丁寧に伴走します。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
