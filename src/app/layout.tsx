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
  title: "Ahmed Fahmy - Software Engineer & Back-End Developer",
  description: "Ahmed Fahmy is a Software Engineer specializing in back-end development, .NET Core, Node.js, Nest.js, Flask, and Computer Vision. Offering scalable and robust solutions for modern web applications.",
  keywords: "Ahmed Fahmy, Software Engineer, Back-End Developer, AI, Computer Vision, .NET Core, React, Node.js, Nest.js, Flask, Web Development, API Development, Egypt Developer",
  authors: [{ name: "Ahmed Fahmy" }],
  creator: "Ahmed Fahmy",
  publisher: "Ahmed Fahmy",
  robots: "index, follow",
  applicationName: "Ahmed Fahmy Portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmedfahmy.me",
    title: "Ahmed Fahmy - Software Engineer & Back-End Developer",
    description: "Ahmed Fahmy is a Software Engineer specializing in back-end development, .NET Core, Node.js, Nest.js, Flask, and Computer Vision.",
    siteName: "Ahmed Fahmy Portfolio",
    images: [
      {
        url: "/images/me1.jpg",
        width: 800,
        height: 600,
        alt: "Ahmed Fahmy - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Fahmy - Software Engineer",
    description: "Ahmed Fahmy is a Software Engineer specializing in back-end development, .NET Core, Node.js, Nest.js, Flask, and Computer Vision.",
    creator: "@Ahmed_fahmy8308",
    images: ["/images/me1.jpg"],
  },
  alternates: {
    canonical: "https://ahmedfahmy.me",
  },
  verification: {
    google: "", 
  },
  metadataBase: new URL("https://ahmedfahmy.me"), 
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
        <link rel="canonical" href="https://ahmedfahmy.me" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#4338ca" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/Logo 192x192.png" />
        <link rel="manifest" href="/manifest.json" />
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
