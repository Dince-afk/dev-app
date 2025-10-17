import { cn } from "@/lib/utils";
import Link from "next/link";
import type { HTMLProps } from "react";
import { ThemeSwitcher } from "./theme/theme-switcher";

export default function Footer(props: HTMLProps<HTMLHRElement>) {
  return (
    <footer {...props} className={cn("text-sm border-t", props.className)}>
      <div className="mx-auto space-y-6 px-4 py-10 sm:px-6 lg:px-8 flex justify-between">
        <div className="flex flex-col items-start gap-6">
          <ul className="flex gap-8">
            <li>
              <Link
                href={`/impressum`}
                className="pt-4  text-muted-foreground hover:text-primary"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href={`/privacy`}
                className="pt-4  text-muted-foreground hover:text-primary"
              >
                Datenschutzerklärung
              </Link>
            </li>
          </ul>
          <div className="flex flex-col items-center justify-between pt-4 text-muted-foreground sm:flex-row">
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
