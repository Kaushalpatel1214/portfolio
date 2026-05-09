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
  title: "Kaushal Patel | Frontend Developer & UI Engineer",
  description: "Portfolio of Kaushal Patel, a Frontend Developer with 3+ years of experience specializing in high-performance React/Next.js web applications and immersive digital experiences.",
  keywords: ["Kaushal Patel", "Frontend Developer", "UI Engineer", "React Developer", "Next.js Portfolio", "Web Design India"],
  authors: [{ name: "Kaushal Patel" }],
  openGraph: {
    title: "Kaushal Patel | Frontend Developer & UI Engineer",
    description: "I craft high-performance, visually stunning digital experiences that merge art with technology.",
    url: "https://kaushalpatel.design",
    siteName: "Kaushal Patel Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaushal Patel | Frontend Developer & UI Engineer",
    description: "Frontend developer with 3+ years of experience building high-performance web experiences.",
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
