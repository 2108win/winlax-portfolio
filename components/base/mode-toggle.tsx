"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [theme, setThemeState] = useState<true | false>(() =>
    localStorage.theme === "dark" ? true : false,
  );
  const handleChangeTheme = () => {
    setThemeState(!theme);
    setTheme(theme ? "light" : "dark");
  };
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full bg-neutral-950 hover:bg-neutral-900 dark:bg-neutral-50"
      onClick={handleChangeTheme}
    >
      {theme ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-neutral-950 transition-all hover:bg-inherit dark:-rotate-90 dark:scale-90" />
      ) : (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] text-neutral-50 transition-all hover:bg-inherit" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
