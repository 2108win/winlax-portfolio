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
      className="ml-3 w-8 h-8 flex items-center justify-center hover:scale-110 transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <BsSunFill className="text-[#242424cc] w-6 h-6" />
      ) : (
        <BsMoonFill className="text-[#f5f6f180] w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggler;
