"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { RouteTransition } from "@/components/route-transition";
import React from "react";

export function AppPageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <RouteTransition key={pathname}>{children}</RouteTransition>
    </AnimatePresence>
  );
}
