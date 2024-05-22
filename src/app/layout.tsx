import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FundGenie Online Funding Calculator",
  description: "Find out how much funding your business qualifies for",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <html lang="en">
      
      <body className="bg-[#1e394c]">{children}</body>
    </html>
    <Analytics />
    <SpeedInsights />
    </>
  );
}
