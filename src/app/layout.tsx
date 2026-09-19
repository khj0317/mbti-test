import type { Metadata } from "next";
import { Gowun_Dodum, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const heading = Gowun_Dodum({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const body = Noto_Sans_KR({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "MBTI 성격 유형 검사",
  description: "40개의 질문으로 알아보는 나의 성격 유형",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
