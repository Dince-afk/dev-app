import { type HTMLProps } from "react";
import { cn } from "../../lib/utils";
import Link from "next/link";
import Logo from "./logo";
import NavigationLinks from "./navigation-links";
import MobileNavigation from "./mobile-navigation";
import { Separator } from "../../components/ui/separator";
import LanguageSelector from "./language-selector";
import { ThemeSwitcher } from "../../components/theme/theme-switcher";

const languageData = [
  {
    countryIsoCode: "DE",
    languageIsoCode: "de",
    languageNativeName: "Deutsch",
  },
  {
    countryIsoCode: "GB",
    languageIsoCode: "en",
    languageNativeName: "English",
  },
  {
    countryIsoCode: "BA",
    languageIsoCode: "ba",
    languageNativeName: "Bosanski",
  },
];

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
      <div className="container mx-auto flex items-center justify-between gap-10">
        <Link href="/">
          <Logo className="h-8" />
        </Link>

        {/* Mobile */}
        <MobileNavigation className="md:hidden">
          <NavigationLinks variant="mobile" />
          <Separator />
          <div className="hover:text-foreground text-muted-foreground flex items-center justify-between py-3 pl-3">
            <span>Theme</span>
            <ThemeSwitcher />
          </div>
          <div className="hover:text-foreground text-muted-foreground flex items-center justify-between py-3 pl-3">
            <span>Language</span>
            <LanguageSelector languageData={languageData} />
          </div>
        </MobileNavigation>

        {/* Desktop */}
        <div className="hidden grow items-center justify-between md:flex">
          <NavigationLinks variant="desktop" />
          <LanguageSelector languageData={languageData} />
        </div>
      </div>
    </header>
  );
}
