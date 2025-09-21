import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio | Benedictus Jason",
  description: "Personal portfolio of Benedictus Jason - Designer & Developer",
  icons: {
    icon: "/info.svg",
    shortcut: "/info.svg",
    apple: "/info.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/info.svg" sizes="any" />
      </head>
      <body className={`${displayFont.variable} ${monoFont.variable} antialiased bg-gray-100 dark:bg-neutral-900`}> 
        {children}
      </body>
    </html>
  );
}
