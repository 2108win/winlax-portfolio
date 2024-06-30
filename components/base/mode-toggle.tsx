/* eslint-disable react-hooks/exhaustive-deps */
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
  }, []);
  const toggleTheme = () => {
    setIsDark(!isDark);
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="size-12 scale-75 rounded-full border-none bg-neutral-950 p-0 text-neutral-50 hover:scale-[0.7] hover:bg-neutral-900 hover:text-neutral-50 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-100 md:size-16"
    >
      <motion.span
        whileTap={{
          scale: 0.95,
        }}
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
        <Sun className="size-6" />
      </motion.span>
      <motion.span
        whileTap={{
          scale: 0.95,
        }}
        className="absolute flex -translate-y-1/2 translate-x-1/2 items-center justify-center opacity-0"
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
        <Moon className="size-6 rotate-180" />
      </motion.span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
