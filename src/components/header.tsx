"use client";

import { type HTMLProps, useEffect, useState } from "react";
import { cn } from "../lib/utils";

export default function Header(props: HTMLProps<HTMLElement>) {
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
      {...props}
      className={cn(
        "bg-background sticky top-0 z-50 py-1",
        scrolled && "border-b",
        props.className,
      )}
    >
      {props.children}
    </header>
  );
}
