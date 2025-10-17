"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "text-muted-foreground inline-block rounded-full border",
        className
      )}
    >
      <div className="flex items-center justify-center p-1">
        <button
          className={cn(
            "hover:text-foreground border-background inline rounded-full border p-1.5",
            mounted &&
              theme === "light" &&
              "text-foreground border-border bg-border"
          )}
          onClick={() => setTheme("light")}
          aria-label="Switch to light theme"
        >
          <Sun className="" size="18" />
        </button>
        <button
          className={cn(
            "hover:text-foreground border-background inline rounded-full border p-1.5",
            mounted &&
              theme === "dark" &&
              "text-foreground border-border bg-border"
          )}
          onClick={() => setTheme("dark")}
          aria-label="Switch to dark theme"
        >
          <Moon className="" size="18" />
        </button>
        <button
          className={cn(
            "hover:text-foreground border-background inline rounded-full border p-1.5",
            mounted &&
              theme === "system" &&
              "text-foreground border-border bg-border"
          )}
          onClick={() => setTheme("system")}
          aria-label="Switch to system theme"
        >
          <Monitor size="18" />
        </button>
      </div>
    </div>
  );
}
