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
        props.className,
      )}
      aria-label="Main navigation"
    >
      <Link
        href="/#test"
        className={cn(
          "hover:text-foreground",
          pathname === "/#test" && "text-foreground",
        )}
      >
        Section
      </Link>

      <Link
        href="/components"
        className={cn(
          "hover:text-foreground",
          pathname === "/components" && "text-foreground",
        )}
      >
        Components
      </Link>
      <Link
        href="/test"
        className={cn(
          "hover:text-foreground",
          pathname === "/test" && "text-foreground",
        )}
      >
        Test Page
      </Link>
    </nav>
  );
}
