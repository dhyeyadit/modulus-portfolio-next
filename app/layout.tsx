import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* Fonts */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});


export const metadata: Metadata = {
  title: "Modulus Infosystems — Precision Delivered",
  description: "Modulus Infosystems — Precision-engineered software and cloud solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased font-sans`}
      >
        <Header />
        {/* If header is fixed, keep top padding so content isn't hidden behind it */}
        <main className="pt-16 min-h-[calc(100vh-4rem)] mx-3">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
