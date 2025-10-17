"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLProps } from "react";

export default function NavigationBar(props: HTMLProps<HTMLElement>) {
  const pathname = usePathname();
  return (
    <nav
      {...props}
      className={cn(
        "text-muted-foreground hidden gap-8 text-sm font-medium sm:flex",
        props.className
      )}
      aria-label="Main navigation"
    >
      <Link
        href="/"
        className={cn(
          "hover:text-foreground",
          pathname === "/" && "text-foreground"
        )}
      >
        Home
      </Link>
      <Link
        href="/#test"
        className={cn(
          "hover:text-foreground",
          pathname === "/#test" && "text-foreground"
        )}
      >
        Section
      </Link>
      <Link
        href="/test"
        className={cn(
          "hover:text-foreground",
          pathname === "/test" && "text-foreground"
        )}
      >
        Test Page
      </Link>
    </nav>
  );
}
