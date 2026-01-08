import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BiModal Group | Cloud Native & DevOps Consulting",
  description: "BiModal Group delivers cutting-edge consulting across DevOps, Platform Engineering, AI/ML, and Security — built for scalability, compliance, and enterprise needs.",
  keywords: ["DevOps", "Platform Engineering", "Cloud Native", "Kubernetes", "AI/ML", "DevSecOps", "IT Consulting"],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased bg-(--color-darker) text-white min-h-screen">
        <Navigation />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
