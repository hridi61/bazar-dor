import { Suspense } from "react";
import { Hind_Siliguri } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";
import "./globals.css";

const hind = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind",
});

export const metadata = {
  title: "বাজার দর — নিত্যপ্রয়োজনীয় পণ্যের দাম এক নজরে",
  description:
    "চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার আজকের বাজারদর, দাম বাড়া-কমার তথ্যসহ।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={hind.variable}>
      <body className="flex min-h-screen flex-col bg-page font-sans text-ink antialiased">
        <Navbar />
        <Suspense fallback={<div className="h-12 border-b border-line bg-card" />}>
          <Ticker />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
