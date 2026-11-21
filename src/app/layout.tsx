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
  metadataBase: new URL("https://rgesports.vercel.app"),
  title: "Republic of Golds (RG Esports) | Competitive Rocket League",
  description:
    "Official website of Republic of Golds (RG Esports). A server dedicated to the community, and to winning. 7 MMR competitive squads (D1 to SSL 2000+), The RG Academy, free coaching, and transatlantic NA & EU rosters.",
  keywords: [
    "Republic of Golds",
    "RG Esports",
    "Rocket League Esports",
    "RG Province",
    "RG Nightshift",
    "RG Ascension",
    "RG Dynasty",
    "RG Vanguard",
    "RG Sovereign",
    "Vey",
    "Rocket League Academy",
    "RLCS Open",
    "Free Coaching",
    "Competitive Scrims",
  ],
  authors: [{ name: "[NA] Vey †" }],
  openGraph: {
    title: "Republic of Golds (RG Esports) | Dedicated to Winning",
    description:
      "RG (Republic of golds) Esports is dedicated to the community, and to winning. Competing in leagues, RLCS opens, and fostering the next generation of Rocket League talent.",
    url: "https://rgesports.carrd.co/",
    siteName: "Republic of Golds (RG Esports)",
    images: [
      {
        url: "/images/branding/rg-logo.jpg",
        width: 800,
        height: 800,
        alt: "Republic of Golds Official Crest",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Republic of Golds (RG Esports)",
    description: "Dedicated to the community, and to winning. Competitive Rocket League NA & EU.",
    images: ["/images/branding/rg-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-amber-500 selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
