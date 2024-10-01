import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./theme/providers";
import ThemeSwitch from "./common/components/ThemeSwitch";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Replica Tetris",
  description: "Replica of Tetris to practice next js and programming logic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-300 dark:bg-purple-800 w-full h-screen`}
      >
        <ThemeSwitch />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
