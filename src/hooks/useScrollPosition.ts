import { useState, useEffect } from "react";

export function useScrollPosition(elementId: string) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const element = document.getElementById(elementId);
      if (element) {
        const { bottom } = element.getBoundingClientRect();
        setIsScrolled(bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [elementId]);

  return { isScrolled, isMounted };
}
