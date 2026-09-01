import Reveal from "./Reveal";

const channels = ["Web チャット", "メール", "LINE", "電話 / 音声", "Instagram DM", "問い合わせフォーム"];

const features = [
  {
    n: "01",
    name: "全チャネル一元化",
    desc: "Web・メール・LINE・電話・SNSに散らばる問い合わせを1つの画面に統合。対応漏れ・二重対応をゼロに。",
  },
  {
    n: "02",
    name: "AI自動応答 & 下書き",
    desc: "ClaudeベースのAIが問い合わせ内容を理解し、即時回答または担当者向けの回答案を自動生成します。",
  },
  {
    n: "03",
    name: "インテリジェント振り分け",
    desc: "内容・緊急度・過去履歴からAIが最適な担当者へ自動ルーティング。SLA遵守率を大きく改善します。",
  },
  {
    n: "04",
    name: "ナレッジ連携",
    desc: "社内マニュアル・FAQ・過去の対応履歴をAIが学習。属人化を解消し、回答品質を均一化します。",
  },
  {
    n: "05",
    name: "リアルタイム分析",
    desc: "対応時間・解決率・満足度をダッシュボードで可視化。ボトルネックを特定し継続的に改善します。",
  },
  {
    n: "06",
    name: "既存システム連携",
    desc: "CRM・基幹システム・各種SaaSとAPIで接続。既存の業務フローを止めずにスモールスタート可能。",
  },
];

const stats = [
  { num: "78%", label: "問い合わせ自動解決率" },
  { num: "1/3", label: "一次対応時間の短縮" },
  { num: "24h", label: "365日 無人対応" },
];

export default function Omniroute() {
  return (
    <section className="bg-bg-0 border-t border-white/[.07] py-[120px] px-14 relative overflow-hidden" id="omniroute">
      <div className="absolute inset-0 pointer-events-none animate-meshShift" />

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-16">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2.5 mb-5">
                <span className="w-[5px] h-[5px] rounded-full bg-cyan" />
                <span className="font-en text-[10px] font-semibold tracking-[.3em] uppercase text-cyan">Product</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-ja font-light text-white mb-4" style={{ fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1.5 }}>
                <span className="font-en font-bold bg-grad-accent bg-clip-text text-transparent">Omniroute</span>
                <br />
                <strong className="font-medium">すべての問い合わせを、AIが導く。</strong>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="font-ja text-[15px] font-light leading-[1.9] text-txt-2">
              オムニルートは、あらゆるチャネルの顧客対応を一元化するAIカスタマーサポート基盤です。問い合わせの受付から回答・振り分け・分析までを自動化し、少人数でも高品質な対応を実現します。
            </p>
          </Reveal>
        </div>

        {/* Channels */}
        <Reveal delay={150}>
          <div className="flex flex-wrap gap-2.5 mb-14">
            {channels.map((c) => (
              <span
                key={c}
                className="font-ja text-[12px] font-normal tracking-[.04em] text-txt-1 bg-bg-card border border-white/[.07] px-4 py-2 rounded-full"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {features.map((f, i) => (
            <Reveal key={f.n} delay={i * 60}>
              <div
                className="bg-bg-card border border-white/[.07] rounded-lg p-7 h-full group hover:border-cyan/20 hover:bg-bg-card2 hover:-translate-y-1 transition-all duration-300 cursor-none relative overflow-hidden"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                <div className="absolute top-[-60px] right-[-60px] w-[120px] h-[120px] rounded-full bg-cyan/[.07] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative z-10">
                  <div className="font-en text-[10px] font-medium tracking-[.25em] text-white/30 mb-5">{f.n}</div>
                  <h3 className="font-ja text-[14px] font-medium leading-[1.5] mb-3">{f.name}</h3>
                  <p className="font-ja text-[12px] font-light leading-[1.8] text-txt-2">{f.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="bg-bg-card border border-white/[.07] rounded-xl p-9 text-center">
                <div
                  className="font-en font-bold leading-none mb-2.5 bg-grad-accent bg-clip-text text-transparent"
                  style={{ fontSize: "clamp(34px,4.5vw,52px)" }}
                >
                  {s.num}
                </div>
                <div className="font-ja text-[13px] font-light text-txt-2">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
