import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className="flex items-center justify-center w-8 h-8 ml-3 transition-all duration-300 hover:scale-110 focus:outline-none"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <BsMoonFill className="text-[#ffab0a] w-6 h-6" />
      ) : (
        <BsSunFill className="text-[#ffab0a] w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggler;
