"use client";

import ReactCountryFlag from "react-country-flag";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { usePathname, useRouter } from "next/navigation";

type Language = {
  languageIsoCode: string;
  languageNativeName: string;
  countryIsoCode: string;
};

export default function LanguageSelector({
  languageData,
}: {
  languageData: Language[];
}) {
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = pathname?.split("/")[1] || "en";

  const currentLangData = languageData.find(
    (lang) => lang.languageIsoCode === currentLang,
  );

  function handleLanguageChange(newLang: string) {
    const newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPathname);
  }

  return (
    <Select
      value={currentLangData?.languageIsoCode || "en"}
      onValueChange={(newLang) => handleLanguageChange(newLang)}
    >
      <SelectTrigger
        aria-label={currentLang === "de" ? "Sprache ändern" : "Switch language"}
      >
        <SelectValue>
          <ReactCountryFlag
            className="grayscale-0"
            countryCode={currentLangData?.countryIsoCode || "GB"}
            svg
            alt={`${currentLangData?.countryIsoCode} country flag icon`}
          />
          {/* <span className="">
            {currentLangData?.languageNativeName || "English"}
          </span> */}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="" onCloseAutoFocus={(e) => e.preventDefault()}>
        {languageData.map((lang) => (
          <SelectItem
            key={lang.languageIsoCode + "-" + lang.countryIsoCode}
            value={lang.languageIsoCode}
          >
            <ReactCountryFlag
              countryCode={lang.countryIsoCode || "GB"}
              svg
              className="mr-1 aspect-square grayscale-25"
              aria-hidden="true"
            />
            <span className="text-xs">
              {lang.languageNativeName || "English"}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
