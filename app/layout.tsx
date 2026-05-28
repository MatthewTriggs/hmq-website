import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, DM_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "HMQ Group (PTY) Ltd — Systems · Design · Analytics",
  description:
    "South African mining and industrial engineering company based in Gauteng. Systems Engineering, Engineering Design, Data & Analytics, and Project Management.",
  keywords: [
    "mining engineering",
    "industrial engineering",
    "South Africa",
    "Gauteng",
    "systems engineering",
    "data analytics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
