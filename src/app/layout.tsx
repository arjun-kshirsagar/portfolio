import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arjun Kshirsagar | Backend Engineer",
  description: "Arjun Kshirsagar - Backend Engineer Portfolio. Systems > Syntax.",
};

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} font-mono antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
