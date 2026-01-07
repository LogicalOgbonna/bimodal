import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FuturisticBackground from "@/components/FuturisticBackground";

export const metadata: Metadata = {
  title: "BiModal Group | Future-Forward IT Consulting",
  description: "BiModal Group is a trusted IT consulting firm delivering solutions across DevOps, DevSecOps, Software Development, AI, Quality Assurance, Platform Engineering, and Security.",
  keywords: ["DevOps", "DevSecOps", "AI", "ML", "Platform Engineering", "IT Consulting", "Kubernetes", "Terraform"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-[var(--color-darker)] text-[var(--color-text)] antialiased">
        <FuturisticBackground />
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
