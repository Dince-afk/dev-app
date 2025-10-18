import { type HTMLProps } from "react";
import { cn } from "../lib/utils";
import Link from "next/link";
import Logo from "./logo";
import NavigationBar from "./navigation-menu";

export default function Header(props: HTMLProps<HTMLElement>) {
  return (
    <header
      {...props}
      className={cn(
        "bg-background show-on-scroll sticky top-0 z-50 flex items-center justify-between border-b px-4 py-3 sm:px-8",
        props.className,
      )}
    >
      <div className="flex items-center gap-12">
        <Link href="/">
          <Logo className="h-8" />
        </Link>
        <NavigationBar />
      </div>
    </header>
  );
}
