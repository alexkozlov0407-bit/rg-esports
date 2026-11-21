import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arrogant Esports (ARGT) | High Impact Competitive Gaming",
  description:
    "Official website of Arrogant Esports. Founded by ARGT Cake2x (Est. Nov 15, 2026). Live social media counters, competitive roster, YouTube video summaries, and Discord scrim recruitment.",
  keywords: [
    "Arrogant Esports",
    "ARGT",
    "ARGT Cake2x",
    "High Impact Esports",
    "Fortnite Competitive",
    "PR 680",
    "Esports Roster",
    "Gaming Team",
  ],
  authors: [{ name: "ARGT Cake2x" }],
  openGraph: {
    title: "Arrogant Esports (ARGT) | High Impact Esports",
    description:
      "An esports team designed to make a change in the competitive scene. Founded by ARGT Cake2x.",
    url: "https://sites.google.com/view/arrogant-esports/home",
    siteName: "Arrogant Esports",
    images: [
      {
        url: "https://yt3.googleusercontent.com/9yqp-lOH4ws2jsSwdB-1vauTiDwHTS542H9NvNWob-ujR58Te4_zFaJ3maQfxu0vcAG0y4z3aA=s900-c-k-c0x00ffffff-no-rj",
        width: 900,
        height: 900,
        alt: "Arrogant Esports Official Crest",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arrogant Esports (ARGT)",
    description: "High Impact Competitive Gaming • Est. Nov 15, 2026",
    images: [
      "https://yt3.googleusercontent.com/9yqp-lOH4ws2jsSwdB-1vauTiDwHTS542H9NvNWob-ujR58Te4_zFaJ3maQfxu0vcAG0y4z3aA=s900-c-k-c0x00ffffff-no-rj",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#060709] text-gray-100 selection:bg-[#ff1a53] selection:text-white">
        {children}
      </body>
    </html>
  );
}
