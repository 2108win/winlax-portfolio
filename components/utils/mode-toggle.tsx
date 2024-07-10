"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    if (theme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [theme]);
  const toggleTheme = () => {
    setIsDark(!isDark);
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <motion.button
      whileTap={{
        scale: 0.9,
      }}
      whileHover={{
        scale: 0.95,
      }}
      onClick={toggleTheme}
      className="relative size-10 rounded-full border-none bg-foreground text-background duration-300 hover:text-background dark:bg-foreground dark:text-background md:size-12"
    >
      <motion.span
        className="flex items-center justify-center opacity-0"
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          damping: 15,
        }}
      >
        <Sun className="size-5 md:size-6" />
      </motion.span>
      <motion.span
        className="absolute inset-0 flex items-center justify-center opacity-0"
        animate={{
          rotate: isDark ? 0 : -180,
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          damping: 15,
        }}
      >
        <Moon className="size-5 rotate-180 md:size-6" />
      </motion.span>
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
