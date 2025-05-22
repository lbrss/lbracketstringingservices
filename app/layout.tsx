import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
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
  robots: "noai, noimageai",
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
    <html lang="de" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-[#21333a] text-white`}
      >
        <main
          id="main"
          className="container mx-auto min-h-dvh flex flex-col justify-center items-center px-2"
        >
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
