import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin-ext"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Pieczone z Sercem | Domowe wypieki w Krakowie",
  description:
    "Lokalna piekarnia z Krakowa z domowymi wypiekami, naturalnymi składnikami i codzienną tablicą tego, co dziś pieczemy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${fraunces.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
