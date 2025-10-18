import { cn } from "@/lib/utils";
import Link from "next/link";
import type { HTMLProps } from "react";
import { ThemeSwitcher } from "./theme/theme-switcher";

export default function Footer(props: HTMLProps<HTMLHRElement>) {
  return (
    <footer
      {...props}
      className={cn(
        "text-muted-foreground flex justify-between border-t text-sm",
        props.className,
      )}
    >
      <ul className="">
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
        <p>&copy; {new Date().getFullYear()} Dev</p>
      </ul>
      <ThemeSwitcher className="m-2" />
    </footer>
  );
}
