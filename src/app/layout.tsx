import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "株式会社True Colors | AI導入支援",
  description:
    "Claude・ChatGPTなどの生成AIを活用し、企業ごとの課題に合わせたAI導入支援を行っています。全国対応・無料相談。",
  openGraph: {
    title: "株式会社True Colors | AI導入支援",
    description: "企業の未来を、AIでアップデートする。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
