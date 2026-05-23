import Reveal from "./Reveal";

const problems = [
  { n: "01", strong: "人手不足", rest: "で業務が回らない" },
  { n: "02", strong: "属人化", rest: "していて引継ぎできない" },
  { n: "03", strong: "採用難", rest: "で優秀な人材が集まらない" },
  { n: "04", strong: "非効率な業務", rest: "が山積みになっている" },
  { n: "05", strong: "DX未対応", rest: "で競合に遅れを感じている" },
  { n: "06", strong: "何から始めれば", rest: "わからない" },
];

export default function Problem() {
  return (
    <section className="bg-[#0F1422] py-[120px] px-14" id="problems">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="w-[5px] h-[5px] rounded-full bg-cyan" />
              <span className="font-en text-[10px] font-semibold tracking-[.3em] uppercase text-cyan">Problem</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-ja font-medium text-white mb-10" style={{ fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1.5 }}>
              こんな課題、<br />ありませんか？
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 border border-white/[.07]" style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}>
            {problems.map((p, i) => (
              <Reveal key={p.n} delay={i * 60}>
                <div className="bg-[#0F1422] p-8 group relative overflow-hidden hover:bg-[#181f30] transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-0.5 h-0 bg-cyan group-hover:h-full transition-[height] duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }} />
                  <div className="font-en text-[10px] font-medium tracking-[.2em] text-white/30 mb-3">{p.n}</div>
                  <p className="font-ja text-[14px] font-light leading-[1.8] text-txt-1">
                    <strong className="font-medium text-white">{p.strong}</strong>{p.rest}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="pt-8 lg:pt-20">
          <blockquote className="font-ja leading-[1.7] tracking-[.06em] text-txt-1 border-l-2 border-cyan pl-7 mb-8" style={{ fontSize: "clamp(18px,2.2vw,26px)" }}>
            「AIって<strong className="font-medium text-white">大企業のもの</strong>だと思っていた。<br />
            うちみたいな会社に<strong className="font-medium text-white">使えるの？</strong>」
          </blockquote>
          <p className="font-ja text-[13px] font-light leading-[1.9] text-txt-2">
            こうした不安を持つ中小企業の経営者・担当者の方々に、<br />
            True Colorsは寄り添ってきました。<br /><br />
            AIは今や、規模を問わず導入できる時代です。<br />
            必要なのは「何から始めるか」を一緒に考えてくれる、<br />
            信頼できるパートナーです。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
