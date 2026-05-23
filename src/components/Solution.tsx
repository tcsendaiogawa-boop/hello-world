import Reveal from "./Reveal";

const solutions = [
  {
    icon: <PeopleIcon />,
    name: "AI営業支援",
    desc: "提案書・メール・トークスクリプトを自動生成。営業工数を大幅削減。",
  },
  {
    icon: <ChatIcon />,
    name: "AIチャット対応",
    desc: "24時間自動応答チャットボットで問い合わせ対応を自動化。",
  },
  {
    icon: <DocIcon />,
    name: "AI議事録",
    desc: "会議の録音からリアルタイムで議事録を生成。要点・ToDoを自動抽出。",
  },
  {
    icon: <BookIcon />,
    name: "AIマニュアル",
    desc: "業務手順を自動でドキュメント化。属人化を解消し、引継ぎを楽に。",
  },
  {
    icon: <BriefIcon />,
    name: "AI採用支援",
    desc: "求人票作成・書類選考・面接準備までAIが自動サポート。",
  },
  {
    icon: <ChartIcon />,
    name: "AI分析",
    desc: "売上・顧客・業務データをAIが分析し、次のアクションを自動提案。",
  },
];

export default function Solution() {
  return (
    <section className="bg-bg-0 py-[120px] px-14" id="solution">
      <Reveal>
        <div className="inline-flex items-center gap-2.5 mb-5">
          <span className="w-[5px] h-[5px] rounded-full bg-cyan" />
          <span className="font-en text-[10px] font-semibold tracking-[.3em] uppercase text-cyan">Solution</span>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-ja font-medium text-white mb-3" style={{ fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1.5 }}>
          <strong>AIで解決できること</strong>
        </h2>
      </Reveal>
      <Reveal delay={200}>
        <p className="font-ja text-[15px] font-light leading-[1.9] text-txt-2 mb-16 max-w-[520px]">
          あなたの業務課題に合わせたAI活用方法をご提案します。
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-white/[.07]" style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}>
        {solutions.map((s, i) => (
          <Reveal key={s.name} delay={i * 60}>
            <div className="bg-bg-0 p-9 group relative overflow-hidden hover:bg-bg-card transition-colors duration-300 cursor-none">
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan to-purple scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }} />
              <div className="w-10 h-10 rounded-lg border border-white/[.07] flex items-center justify-center mb-5 group-hover:border-cyan group-hover:bg-cyan/10 transition-all duration-300">
                <span className="text-txt-2 group-hover:text-cyan transition-colors duration-300">{s.icon}</span>
              </div>
              <h3 className="font-ja text-[15px] font-medium tracking-[.03em] mb-2.5">{s.name}</h3>
              <p className="font-ja text-[13px] font-light leading-[1.8] text-txt-2">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PeopleIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
}
function ChatIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
}
function DocIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>;
}
function BookIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
}
function BriefIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
}
function ChartIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>;
}
