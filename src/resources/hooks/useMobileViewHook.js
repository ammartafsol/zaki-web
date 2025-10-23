import { useState, useEffect } from "react";

export function useMobileViewHook(width = 576) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" &&
      (window.innerWidth < width || window.screen.width < width)
  );

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    function handleResize() {
      const currentWidth = window.innerWidth;
      setWindowWidth(currentWidth);
      setIsMobile(currentWidth < width || window.screen.width < width);
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return { isMobile, windowWidth };
}
