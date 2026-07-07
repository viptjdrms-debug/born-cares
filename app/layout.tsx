import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Born Cares | 프리미엄 가전 홈케어 전문",
  description:
    "에어컨, 세탁기, 건조기, 제습기, 청소기, 공기청정기 분해세척 및 유지관리 전문 서비스. 서울 · 경기 북부 출장 가능.",
  keywords: [
    "에어컨 청소",
    "세탁기 청소",
    "건조기 청소",
    "제습기 청소",
    "청소기 청소",
    "공기청정기 청소",
    "분해세척",
    "서울 가전청소",
    "경기북부 가전청소",
    "Born Cares",
  ],
  openGraph: {
    title: "Born Cares | 프리미엄 가전 홈케어 전문",
    description:
      "에어컨 · 세탁기 · 건조기 · 제습기 · 청소기 · 공기청정기 분해세척 전문.",
    type: "website",
    locale: "ko_KR",
    siteName: "Born Cares",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full bg-slate-50 text-slate-900">
        <Header />
        {children}
      </body>
    </html>
  );
}