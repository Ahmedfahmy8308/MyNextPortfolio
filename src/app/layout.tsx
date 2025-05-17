import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { AppPageTransition } from "@/components/AppPageTransition";
import { ScrollToTopOnNavigation } from "@/components/scroll-to-top-on-navigation";
import { Toaster } from "sonner";
import { Suspense } from "react";
import LoadingSpinner from "@/components/client-loading-spinner-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Fahmy - Software Engineer",
  description: "Software Engineer specializing in back-end development, .NET Core, Node.js, Nest.js, Flask, and Computer Vision.",
  keywords: "Ahmed Fahmy, Software Engineer, Back-End Developer, AI, Computer Vision, .NET Core, React, Node.js, Nest.js, Flask ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="ahmed-portfolio-theme"
        >
          {/* Component to enable smooth scrolling */}
          <Navbar />
          <ScrollToTopOnNavigation />
          <Suspense fallback={<LoadingSpinner />}>
            <AppPageTransition>
              {children}
            </AppPageTransition>
          </Suspense>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
