import { cn } from "@/lib/utils";
import Link from "next/link";
import type { HTMLProps } from "react";
import { ThemeSwitcher } from "./theme/theme-switcher";

export default function Footer(props: HTMLProps<HTMLElement>) {
  return (
    <footer
      {...props}
      className={cn(
        "flex items-end justify-between border-t px-8 py-8",
        props.className,
      )}
    >
      <div className="text-muted-foreground flex flex-col gap-16 text-sm">
        <ul className="flex gap-8">
          <li>
            <Link href={`/impressum`} className="hover:text-primary">
              Impressum
            </Link>
          </li>
          <li>
            <Link href={`/privacy`} className="hover:text-primary">
              Datenschutzerklärung
            </Link>
          </li>
        </ul>
        <p>&copy; {new Date().getFullYear()} Dev</p>
      </div>
      <ThemeSwitcher className="" />
    </footer>
  );
}
