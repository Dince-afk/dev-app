"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav
      className="text-muted-foreground hidden gap-6 text-sm font-medium sm:flex"
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
