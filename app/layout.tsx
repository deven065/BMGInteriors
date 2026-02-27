import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BMG Interiors | Architects, Interior Designers & Contractors in Mumbai",
  description:
    "BMG Interiors is a comprehensive service provider for Residential, Commercial, Hospitality & Building projects. 35+ years of creative interior excellence in Mumbai.",
  keywords: [
    "BMG Interiors",
    "Interior Designer Mumbai",
    "Architects Mumbai",
    "Residential Interiors",
    "Commercial Interiors",
    "Turnkey Interior Solutions",
    "Contractors Mumbai",
  ],
  openGraph: {
    title: "BMG Interiors – Architects, Interior Designers & Contractors",
    description:
      "35+ years of excellence in interior design and architecture. Residential, commercial, hospitality and turnkey projects across India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}
