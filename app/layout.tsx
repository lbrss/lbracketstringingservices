"use client";
import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Scroll from "@/components/Scroll";
import { Suspense } from "react";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: { default: "LBRSS", template: "%s | LBRSS" },
  description: "Luke Barnes Racket Stringing Services",
  keywords: ["Squash", "Paddle", "Racket", "Stringing", "Badminton"],
  manifest: "https://lbrss.com/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: {
    url: "https://lbrss.com",
    type: "website",
    title: "LBRSS",
    description: "Luke Barnes Racket Stringing Services",
    images: [
      {
        url: "https://lbrss.com/android-chrome-512x512.png",
        type: "image/png",
        width: 512,
        height: 512,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#21333a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.className} antialiased bg-[#21333a] text-white`}
      >
        <Scroll />
        <Suspense fallback={<div>Loading....</div>}>
          <div className="container mx-auto p-4 min-h-dvh grid grid-cols-1 justify-items-center place-items-center">
            <div className="flex flex-col items-center justify-center">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </Suspense>
      </body>
    </html>
  );
}
