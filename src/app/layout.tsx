import type { Metadata } from "next";
import { Gowun_Dodum, Noto_Sans_KR } from "next/font/google";
import { getSiteUrl } from "@/lib/site";
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

const siteUrl = getSiteUrl();
const title = "MBTI 성격 유형 검사";
const description = "40개의 질문으로 알아보는 나의 성격 유형";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    siteName: title,
    locale: "ko_KR",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
