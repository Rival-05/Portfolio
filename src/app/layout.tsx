import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { ThemeInitScript } from "@/my_components/ThemeInitScript";


export const metadata: Metadata = {
  title: "rival.me",
  description: "Portfolio needed by almost everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <head><ThemeInitScript/></head>
       <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
