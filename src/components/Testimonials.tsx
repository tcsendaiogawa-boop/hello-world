import Reveal from "./Reveal";

const testimonials = [
  {
    text: "「最初はAIって難しそうで不安でした。でも、True Colorsさんはゼロから丁寧に教えてくださり、今では営業チーム全員がChatGPTを日常的に使いこなしています。提案書の作成時間が半分になりました。」",
    avatar: "田",
    name: "田中 雅樹 様",
    role: "営業部長 / 製造業（従業員200名）",
  },
  {
    text: "「採用の書類選考に毎月40時間かけていたのが、AIを使うようになって5時間になりました。コスト面でも大きな削減になり、経営判断が変わりました。こんなに変わるとは思っていなかった。」",
    avatar: "鈴",
    name: "鈴木 あおい 様",
    role: "代表取締役 / 人材会社（従業員50名）",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-bg-0 border-t border-white/[.07] py-[120px] px-14">
      <Reveal>
        <div className="inline-flex items-center gap-2.5 mb-5">
          <span className="w-[5px] h-[5px] rounded-full bg-cyan" />
          <span className="font-en text-[10px] font-semibold tracking-[.3em] uppercase text-cyan">Voice</span>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-ja font-light text-white mb-16" style={{ fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1.5 }}>
          導入企業の<strong className="font-medium">声</strong>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 120}>
            <div className="bg-bg-card border border-white/[.07] rounded-xl p-10 hover:border-cyan/15 transition-colors duration-300">
              <div className="font-en text-[52px] font-bold text-cyan/25 leading-none mb-1">&ldquo;</div>
              <p className="font-ja text-[15px] font-light leading-[1.9] text-txt-1 mb-7">{t.text}</p>
              <div className="flex items-center gap-3.5">
                <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-cyan to-purple flex items-center justify-center font-ja text-[15px] font-medium text-bg-0 flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-ja text-[13px] font-medium mb-0.5">{t.name}</div>
                  <div className="font-ja text-[11px] text-txt-2">{t.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
