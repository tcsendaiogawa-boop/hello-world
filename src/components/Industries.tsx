import Reveal from "./Reveal";

const industries = [
  { emoji: "🏗️", name: "建設業", ex: ["現場報告書自動化", "工程管理AI", "安全書類生成"] },
  { emoji: "🏢", name: "不動産", ex: ["物件説明文AI生成", "顧客対応自動化", "契約書チェック"] },
  { emoji: "👥", name: "人材会社", ex: ["求人票自動作成", "書類選考AI", "マッチング自動化"] },
  { emoji: "🏭", name: "製造業", ex: ["品質管理AI", "発注自動化", "マニュアルAI化"] },
  { emoji: "🍽️", name: "飲食業", ex: ["メニュー最適化", "SNS投稿自動化", "スタッフ研修AI"] },
  { emoji: "⚖️", name: "士業", ex: ["書類作成AI", "判例調査自動化", "顧客対応チャット"] },
];

export default function Industries() {
  return (
    <section className="bg-bg-0 py-[120px] px-14" id="industries">
      <Reveal>
        <div className="inline-flex items-center gap-2.5 mb-5">
          <span className="w-[5px] h-[5px] rounded-full bg-cyan" />
          <span className="font-en text-[10px] font-semibold tracking-[.3em] uppercase text-cyan">Industries</span>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-ja font-light text-white mb-3" style={{ fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1.5 }}>
          業種別の<strong className="font-medium">AI活用事例</strong>
        </h2>
      </Reveal>
      <Reveal delay={200}>
        <p className="font-ja text-[15px] font-light leading-[1.9] text-txt-2 mb-16 max-w-[520px]">
          どんな業種・規模でも対応します。貴社の状況に合わせてご提案します。
        </p>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-white/[.07]" style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}>
        {industries.map((ind, i) => (
          <Reveal key={ind.name} delay={i * 60}>
            <div className="bg-bg-0 p-9 text-center group hover:bg-bg-card transition-colors duration-300 cursor-none">
              <span className="text-[28px] mb-3.5 block">{ind.emoji}</span>
              <div className="font-ja text-[13px] font-medium mb-2">{ind.name}</div>
              <div className="font-ja text-[11px] font-light leading-[1.7] text-txt-2">
                {ind.ex.map((e) => <span key={e} className="block">{e}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
