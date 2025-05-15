"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="relative overflow-hidden"
      >
        <motion.div
          animate={{
            rotate: theme === "dark" ? 40 : 0,
            opacity: theme === "dark" ? 0 : 1,
            y: theme === "dark" ? -30 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </motion.div>
        
        <motion.div
          animate={{
            rotate: theme === "light" ? -40 : 0,
            opacity: theme === "light" ? 0 : 1,
            y: theme === "light" ? 30 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </motion.div>
        
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  )
}
