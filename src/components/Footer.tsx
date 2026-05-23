const serviceLinks = [
  "Claude導入支援", "ChatGPT導入支援", "AI業務改善",
  "AI社内研修", "AI営業構築", "AI活用設計",
];
const companyLinks = ["会社概要", "代表メッセージ", "導入事例", "ブログ", "採用情報"];
const contactLinks = ["無料AI相談", "AI導入診断", "資料ダウンロード", "お問い合わせ"];

export default function Footer() {
  return (
    <footer className="bg-bg-0 border-t border-white/[.07] pt-16 pb-10 px-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-16 mb-14">
        {/* Brand */}
        <div>
          <span className="font-en text-[17px] font-bold tracking-[.06em] block mb-1">TRUE COLORS</span>
          <span className="font-ja text-[9px] tracking-[.22em] text-white/30 block mb-4">株式会社トゥルーカラーズ</span>
          <p className="font-ja text-[13px] font-light leading-[1.9] text-txt-2 max-w-[220px] mb-6">
            AIで、すべての企業に<br />本来の輝きを。
          </p>
          <div className="flex gap-2.5">
            {[
              { label: "𝕏", href: "#" },
              { label: "IG", href: "#" },
              { label: "in", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="w-[34px] h-[34px] rounded-md border border-white/[.07] flex items-center justify-center font-en text-[11px] font-semibold text-txt-2 no-underline hover:border-cyan hover:text-cyan hover:bg-cyan/10 transition-all duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="font-en text-[9px] font-semibold tracking-[.3em] uppercase text-white/30 mb-[18px]">Services</div>
          <ul className="space-y-3 list-none">
            {serviceLinks.map((l) => (
              <li key={l}>
                <a href="#" className="font-ja text-[13px] font-light text-txt-2 no-underline hover:text-white transition-colors duration-200">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="font-en text-[9px] font-semibold tracking-[.3em] uppercase text-white/30 mb-[18px]">Company</div>
          <ul className="space-y-3 list-none">
            {companyLinks.map((l) => (
              <li key={l}>
                <a href="#" className="font-ja text-[13px] font-light text-txt-2 no-underline hover:text-white transition-colors duration-200">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="font-en text-[9px] font-semibold tracking-[.3em] uppercase text-white/30 mb-[18px]">Contact</div>
          <ul className="space-y-3 list-none">
            {contactLinks.map((l) => (
              <li key={l}>
                <a href="#contact" className="font-ja text-[13px] font-light text-txt-2 no-underline hover:text-white transition-colors duration-200">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[.07] pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-en text-[11px] text-white/30">© 2025 True Colors Inc. All rights reserved.</p>
        <ul className="flex gap-6 list-none">
          {["プライバシーポリシー", "利用規約", "特定商取引法"].map((l) => (
            <li key={l}>
              <a href="#" className="font-ja text-[11px] text-white/30 no-underline hover:text-txt-2 transition-colors duration-200">{l}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
