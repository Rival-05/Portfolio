import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

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
    <html lang="en">
       <body className = {GeistSans.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
