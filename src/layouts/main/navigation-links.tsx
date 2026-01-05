"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLProps } from "react";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Components", href: "/components" },
  { name: "Test Page", href: "/test" },
];

interface NavigationLinksProps extends HTMLProps<HTMLElement> {
  variant: "mobile" | "desktop";
}

export default function NavigationLinks(props: NavigationLinksProps) {
  const { variant, ...restProps } = props;
  const pathname = usePathname();

  return (
    <nav className={cn("", restProps.className)} {...restProps}>
      <div className="flex flex-col">
        {variant === "mobile" &&
          navigationLinks.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                // onClick={() => setIsOpen(false)}
                className={cn(
                  "hover:text-foreground hover:bg-accent text-muted-foreground rounded-md px-3 py-3",
                  pathname === link.href && "text-foreground",
                )}
              >
                {link.name}
              </Link>
            );
          })}
      </div>

      {variant === "desktop" && (
        <div className="hidden md:flex">
          <div className="flex gap-5">
            {navigationLinks.map((link) => {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "hover:text-foreground text-muted-foreground text-sm",
                    pathname === link.href && "text-foreground",
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
