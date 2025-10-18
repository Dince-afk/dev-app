"use client";

import { type HTMLProps, useEffect, useState } from "react";
import { cn } from "../lib/utils";
import Link from "next/link";
import Logo from "./logo";
import NavigationBar from "./navigation-menu";

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
        "bg-background sticky top-0 z-50 flex items-center justify-between border-b border-b-transparent px-4 py-3 sm:px-8",
        scrolled && "border-b-border",
        props.className,
      )}
    >
      <div className="flex items-center gap-12">
        <Link href="/">
          <Logo className="h-8" />
        </Link>
        <NavigationBar className="" />
      </div>
    </header>
  );
}
