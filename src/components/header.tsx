"use client";
// import { ThemeSwitcher } from "@repo/shared/theme-switcher";
// import LanguageSwitcher from "./language-switcher";
// import Logo from "./logo";

import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export default function Header({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled more than 10px
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]); // Re-run effect if scrolled state changes

  return (
    <header
      className={cn(
        "bg-background sticky top-0 z-50 px-4 py-1 sm:px-6 lg:px-8",
        className,
        scrolled && "border-b",
      )}
    >
      {children}
    </header>
  );
}
