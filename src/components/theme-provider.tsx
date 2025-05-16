"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
      storageKey="ahmed-portfolio-theme" // مفتاح تخزين للتفضيلات
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}