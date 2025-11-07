import { type HTMLProps } from "react";
import { cn } from "../lib/utils";
import Link from "next/link";
import Logo from "./logo";
import NavigationBar from "./navigation-bar";

export default function Header(props: HTMLProps<HTMLElement>) {
  return (
    <header
      {...props}
      className={cn(
        "bg-background sticky top-0 z-10 border-b px-6 py-4",
        true && "show-on-scroll",
        props.className,
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Logo className="h-8" />
        </Link>
        <NavigationBar />
        <div className="hidden md:block"></div>
      </div>
    </header>
  );
}
