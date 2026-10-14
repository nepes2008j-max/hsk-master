import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LangWrapper } from "@/components/LangWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "HSK Master — Pass Your HSK Exam",
  description: "The focused way to learn Chinese and pass the HSK exam. 300 vocabulary words, 58 grammar points, stroke order practice, flashcards, and mock tests — all in one app.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "HSK Master — Pass Your HSK Exam",
    description: "The focused way to learn Chinese and pass the HSK exam.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#FAF9F7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-[100dvh] font-[family-name:var(--font-inter)]"><LangWrapper>{children}</LangWrapper></body>
    </html>
  );
}
