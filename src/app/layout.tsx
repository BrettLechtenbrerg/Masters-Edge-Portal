import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://masters-edge-portal.vercel.app"),
  title: "Master's Edge Power Portal | Total Success AI",
  description:
    "Access your Master's Edge Business Program tools. Interactive software for brand building, financial planning, hiring, SOPs, and more.",
  keywords: ["business tools", "Total Success AI", "Master's Edge", "brand book", "P&L", "financial planning"],
  openGraph: {
    title: "Master's Edge Power Portal | Total Success AI",
    description:
      "Your all-in-one toolkit for building, growing, and scaling your business. People-Centered AI Solutions for the Real World.",
    images: [{ url: "/tsai-logo.png", width: 2160, height: 2064, alt: "Total Success AI Logo" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
