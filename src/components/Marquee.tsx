const items = [
  "AI導入支援", "Claude Implementation", "ChatGPT活用", "業務自動化",
  "DX Support", "AI Marketing", "営業AI化", "採用AI化",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="border-t border-b border-white/[.07] py-[18px] overflow-hidden bg-gradient-to-r from-cyan/[.03] to-purple/[.03]">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 font-en text-[11px] font-medium tracking-[.2em] uppercase text-white/30 px-8">
            {item}
            <span className="text-cyan/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
