import { type HTMLProps } from "react";
import { cn } from "../lib/utils";
import Link from "next/link";
import Logo from "./logo";
import NavigationBar from "./navigation-menu";
import LanguageSelector from "./language-selector";

export default function Header(props: HTMLProps<HTMLElement>) {
  return (
    <header
      {...props}
      className={cn(
        "bg-background sticky top-0 z-50 border-b px-4 py-3",
        true && "show-on-scroll",
        props.className,
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/">
            <Logo className="h-8" />
          </Link>
          <NavigationBar />
        </div>
        <LanguageSelector
          languageData={[
            {
              countryIsoCode: "DE",
              languageIsoCode: "de",
              languageNativeName: "Deutsch",
            },
            {
              countryIsoCode: "BA",
              languageIsoCode: "ba",
              languageNativeName: "Bosanski",
            },
          ]}
        />
      </div>
    </header>
  );
}
