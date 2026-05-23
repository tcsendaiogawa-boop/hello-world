import Reveal from "./Reveal";

const services = [
  { n: "01", name: "Claude導入支援", desc: "Anthropic社のClaude APIを活用した業務ツール・チャットボット・社内AIシステムの構築支援。" },
  { n: "02", name: "ChatGPT導入支援", desc: "OpenAI ChatGPT / GPT-4の業務活用設計・環境構築・社内展開をフルサポート。" },
  { n: "03", name: "AI業務改善", desc: "業務フローを分析し、AIで自動化・効率化できるポイントを特定。ROIが出る改善策を実装します。" },
  { n: "04", name: "AI社内研修", desc: "経営者から現場スタッフまで、役割に応じたAIリテラシー研修。「使える人材」を社内育成。" },
  { n: "05", name: "AIツール選定", desc: "100以上のAIツールから御社の課題・予算・セキュリティ要件に合った最適解を選定・提案。" },
  { n: "06", name: "AI運用支援", desc: "導入後の定期レビュー・改善・追加機能開発。「入れて終わり」にしない継続サポート。" },
  { n: "07", name: "AI営業構築", desc: "リード獲得・ナーチャリング・提案書作成・CRM連携まで、営業プロセス全体をAI化。" },
  { n: "08", name: "AI活用設計", desc: "中長期のAI活用ロードマップを策定。経営戦略と連動したAI推進計画をデザインします。" },
];

export default function Services() {
  return (
    <section className="bg-[#0F1422] border-t border-white/[.07] py-[120px] px-14" id="services">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-16">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="w-[5px] h-[5px] rounded-full bg-cyan" />
              <span className="font-en text-[10px] font-semibold tracking-[.3em] uppercase text-cyan">Services</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-ja font-light text-white" style={{ fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1.5 }}>
              AI導入の全工程を、<br /><strong className="font-medium">ワンストップで。</strong>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <p className="font-ja text-[15px] font-light leading-[1.9] text-txt-2">
            戦略立案から実装・定着・改善まで。「部分的に頼みたい」にも柔軟に対応します。
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <Reveal key={s.n} delay={i * 50}>
            <div className="bg-bg-card border border-white/[.07] rounded-lg p-7 group hover:border-cyan/20 hover:bg-bg-card2 hover:-translate-y-1 transition-all duration-300 cursor-none relative overflow-hidden" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
              <div className="absolute top-[-60px] right-[-60px] w-[120px] h-[120px] rounded-full bg-cyan/[.07] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="font-en text-[10px] font-medium tracking-[.25em] text-white/30 mb-5">{s.n}</div>
              <h3 className="font-ja text-[14px] font-medium leading-[1.5] mb-3">{s.name}</h3>
              <p className="font-ja text-[12px] font-light leading-[1.8] text-txt-2">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
