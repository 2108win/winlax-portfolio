import useLocalStorage from "./useLocalStorage";

import React from "react";

function useColorMode() {
  const [colorMode, setColorMode] = useLocalStorage("colorMode", "light");
  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorMode === "light" ? "dark" : "light");
    root.classList.add(colorMode);
  }, [colorMode]);
  return [colorMode, setColorMode];
}

export default useColorMode;
