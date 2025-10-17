import { cn } from "@/lib/utils";
import Link from "next/link";
import type { HTMLProps } from "react";
import { ThemeSwitcher } from "./theme/theme-switcher";

export default function Footer(props: HTMLProps<HTMLHRElement>) {
  return (
    <footer {...props} className={cn("border-t text-sm", props.className)}>
      <div className="mx-auto flex justify-between space-y-6 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <ul className="flex gap-8">
            <li>
              <Link
                href={`/impressum`}
                className="text-muted-foreground hover:text-primary pt-4"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href={`/privacy`}
                className="text-muted-foreground hover:text-primary pt-4"
              >
                Datenschutzerklärung
              </Link>
            </li>
          </ul>
          <div className="text-muted-foreground flex flex-col items-center justify-between pt-4 sm:flex-row">
            <div className="">
              <p>&copy; {new Date().getFullYear()} Dev</p>
            </div>
          </div>
        </div>
      </div>
      <ThemeSwitcher className="m-2" />
    </footer>
  );
}
