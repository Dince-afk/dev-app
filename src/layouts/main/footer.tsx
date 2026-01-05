import { cn } from "@/lib/utils";
import Link from "next/link";
import type { HTMLProps } from "react";
import { ThemeSwitcher } from "../../components/theme/theme-switcher";

export default function Footer(props: HTMLProps<HTMLElement>) {
  return (
    <footer {...props} className={cn("border-t", props.className)}>
      <div className="container mx-auto flex items-end justify-between px-4 py-8">
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
      </div>
    </footer>
  );
}
