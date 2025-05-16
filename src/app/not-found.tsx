"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScrollToTop } from "@/components/scroll-to-top";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

export default function NotFound() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col justify-center items-center bg-background px-4"
    >
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-primary mb-4 drop-shadow-lg">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <Button size="lg" className="gap-2">
            Go Home
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Button>
        </Link>
      </div>
      <div className="mt-16 w-full">
        <Footer />
        <ScrollToTop />
      </div>
    </motion.main>
  );
}
