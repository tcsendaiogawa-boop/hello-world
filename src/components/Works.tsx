import Reveal from "./Reveal";

const works = [
  { num: "80%", label: "業務時間削減", desc: "月次報告書の作成時間を8時間→1.5時間に短縮。AIによる自動生成と構造化で実現。", industry: "製造業" },
  { num: "60%", label: "営業工数削減", desc: "提案書・メール・議事録の作成をAI化。営業担当者が顧客対応に集中できる環境を構築。", industry: "不動産" },
  { num: "3倍", label: "採用応募数増加", desc: "AI生成の求人票とターゲティング広告の最適化により、応募数を3ヶ月で3倍に。", industry: "人材会社" },
  { num: "24h", label: "問い合わせ自動対応", desc: "AIチャットボット導入により、問い合わせの78%を自動解決。人件費を大幅削減。", industry: "建設業" },
  { num: "150+", label: "導入支援企業数", desc: "業種・規模を問わず150社以上のAI導入を支援。継続率98%で長期パートナーシップを構築。", industry: "全業種" },
  { num: "2週", label: "最短導入スピード", desc: "ヒアリングから最短2週間でPoC開始。スモールスタートで効果を確認してから本格展開。", industry: "全業種" },
];

export default function Works() {
  return (
    <section className="bg-bg-0 py-[120px] px-14" id="works">
      <Reveal>
        <div className="inline-flex items-center gap-2.5 mb-5">
          <span className="w-[5px] h-[5px] rounded-full bg-cyan" />
          <span className="font-en text-[10px] font-semibold tracking-[.3em] uppercase text-cyan">Results</span>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-ja font-light text-white mb-16" style={{ fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1.5 }}>
          数字で見る、<br /><strong className="font-medium">True Colorsの実績</strong>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {works.map((w, i) => (
          <Reveal key={w.label} delay={i * 80}>
            <div className="bg-bg-card border border-white/[.07] rounded-xl p-9 group hover:border-cyan/15 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,.4)] transition-all duration-300 cursor-none relative overflow-hidden" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/[.07] to-purple/[.07] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="relative z-10">
                <div
                  className="font-en font-bold leading-none mb-2 bg-grad-accent bg-clip-text text-transparent"
                  style={{ fontSize: "clamp(38px,5vw,58px)" }}
                >
                  {w.num}
                </div>
                <div className="font-ja text-[16px] font-medium mb-2.5">{w.label}</div>
                <p className="font-ja text-[13px] font-light leading-[1.8] text-txt-2 mb-4">{w.desc}</p>
                <span className="font-en text-[10px] font-medium tracking-[.18em] uppercase text-cyan bg-cyan/10 px-2.5 py-1 rounded-full">{w.industry}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
