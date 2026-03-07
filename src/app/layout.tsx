import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { ViewTransitions } from "next-view-transitions";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export const metadata: Metadata = {
  title: "rajat.tripathi",
  description:
    "Personal portfolio for showing my projects works and sharing experiences.",
};

const hanken_grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={hanken_grotesk.className}>
        <body className={`antialiased`}>
          <Navbar />
          <main className="flex-1">
            <TooltipProvider>{children}</TooltipProvider>
          </main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
