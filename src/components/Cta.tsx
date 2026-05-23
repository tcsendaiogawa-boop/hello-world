import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Cta() {
  return (
    <section className="bg-[#0F1422] border-t border-white/[.07] py-[120px] px-14 relative overflow-hidden" id="contact">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(124,58,237,.1) 0%,transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left: copy */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="w-[5px] h-[5px] rounded-full bg-cyan" />
              <span className="font-en text-[10px] font-semibold tracking-[.3em] uppercase text-cyan">Free Consultation</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-ja font-light text-white mb-5" style={{ fontSize: "clamp(28px,4vw,50px)", lineHeight: 1.55 }}>
              まずは無料で、<br />
              <strong className="font-medium">あなたの会社にAIが必要か<br />診断します。</strong>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-ja text-[15px] font-light leading-[1.9] text-txt-2 mb-10">
              「うちに使えるの？」という疑問でも大歓迎。<br />
              相談0円・勧誘なし・30分から対応しています。
            </p>
          </Reveal>

          {/* Trust points */}
          <Reveal delay={300}>
            <ul className="space-y-3.5">
              {[
                "完全無料・勧誘一切なし",
                "全国どこでもオンライン対応",
                "2営業日以内にご返信",
                "秘密保持・情報管理を徹底",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-ja text-[13px] font-light text-txt-1">
                  <span className="w-5 h-5 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#00D1FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Right: form */}
        <Reveal delay={150}>
          <div className="bg-bg-card border border-white/[.07] rounded-xl p-10">
            <h3 className="font-ja text-[16px] font-medium tracking-[.04em] mb-6">無料AI相談フォーム</h3>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
