"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLProps, useState } from "react";
import { ThemeSwitcher } from "./theme/theme-switcher";

const navigationLinks = [
  { name: "Components", href: "/components" },
  { name: "Test Page", href: "/test" },
];

export default function NavigationBar(props: HTMLProps<HTMLElement>) {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  return (
    <nav
      {...props}
      className={cn(
        "text-muted-foreground text-sm font-medium",
        props.className,
      )}
      aria-label="Main navigation"
    >
      {/* Hamburger */}
      <button
        className="hover:border-input hover:bg-input/40 relative z-30 size-[32px] cursor-pointer space-y-1.25 rounded-full border md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={cn(
            "bg-foreground mx-auto h-[1.5px] w-[14px] transition-transform duration-200 ease-in-out",
            isOpen && "translate-y-[3.2px] rotate-45",
          )}
        />
        <div
          className={cn(
            "bg-foreground mx-auto h-[1.5px] w-[14px] transition-transform duration-200 ease-in-out",
            isOpen && "-translate-y-[3.2px] -rotate-45",
          )}
        />
      </button>

      {/* Mobile navigation menu is opened */}
      {isOpen && (
        <div className="bg-background absolute top-0 left-0 flex min-h-screen w-full flex-col gap-2 px-6 pt-16">
          {navigationLinks.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "hover:text-foreground hover:bg-accent text-muted-foreground rounded-md px-3 py-3",
                  pathname === link.href && "text-foreground",
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="hover:text-foreground flex items-center justify-between px-3 py-3">
            <span>Theme</span>
            <ThemeSwitcher />
          </div>
        </div>
      )}

      {/* Desktop */}
      <div className="hidden gap-4 md:flex">
        {navigationLinks.map((link) => {
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "hover:text-foreground",
                pathname === link.href && "text-foreground",
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
