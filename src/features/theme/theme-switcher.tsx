"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { HTMLProps, useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export function ThemeSwitcher(props: HTMLProps<HTMLDivElement>) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true); // only once mounted is true are the client/user preference settings loaded
  }, []);

  return (
    <div
      {...props}
      className={cn(
        "text-muted-foreground inline-block rounded-full border",
        props.className,
      )}
    >
      <div className="flex items-center justify-center">
        <button
          className={cn(
            "hover:text-foreground border-background inline rounded-full border p-1.5",
            mounted && theme === "light" && "text-foreground border-border",
          )}
          onClick={() => setTheme("light")}
          aria-label="Switch to light theme"
        >
          <Sun className="" size="14" />
        </button>
        <button
          className={cn(
            "hover:text-foreground border-background inline rounded-full border p-1.5",
            mounted && theme === "dark" && "text-foreground border-border",
          )}
          onClick={() => setTheme("dark")}
          aria-label="Switch to dark theme"
        >
          <Moon className="" size="14" />
        </button>
        <button
          className={cn(
            "hover:text-foreground border-background inline rounded-full border p-1.5",
            mounted && theme === "system" && "text-foreground border-border",
          )}
          onClick={() => setTheme("system")}
          aria-label="Switch to system theme"
        >
          <Monitor size="14" />
        </button>
      </div>
    </div>
  );
}
