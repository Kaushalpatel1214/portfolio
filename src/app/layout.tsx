import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { LazyMotion, domAnimation } from "framer-motion";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kaushal Patel | Next.js Developer & Performance Specialist",
  description: "Freelance Frontend Developer with 3 years of experience. I specialize in Next.js development, Figma to React conversion, and website speed optimization. Helping businesses build fast, SEO-friendly digital products.",
  keywords: ["Next.js Developer", "Freelance Web Developer", "Figma to React", "Website Performance Optimization", "React Developer Portfolio", "High-Performance Websites"],
  authors: [{ name: "Kaushal Patel" }],
  openGraph: {
    title: "Kaushal Patel | Next.js Developer & Performance Specialist",
    description: "I build fast, SEO-friendly, and pixel-perfect websites that help businesses grow.",
    url: "https://kaushalpatel.design",
    siteName: "Kaushal Patel Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaushal Patel | Next.js Developer & Performance Specialist",
    description: "Specializing in Next.js development and performance optimization for modern businesses.",
  },
  icons: {
    icon: "/favicon.svg",
  }
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans bg-[#050505] text-white antialiased`}>
        <LazyMotion features={domAnimation}>
          <CustomCursor />
          {children}
        </LazyMotion>
      </body>
    </html>
  );
}
