"use client";

import { useEffect, useState } from "react";

import { ConsentViewState, SupportedLanguages, t } from "../config";
import { setConsentCookie } from "../utils/utils.client";
import { AccordionItem } from "./accordion-item";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export function ConsentSettings({
  setShow,
  lang,
}: {
  setShow: (newValue: ConsentViewState) => void;
  lang: SupportedLanguages;
}) {
  const [selectedOption, setSelectedOption] = useState<
    "essential" | "marketing" | "analytics" | "functional" | null
  >("essential");
  // Make background unscrollable when Settings mounts
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  function handleSave(formEvent: React.FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    const formData = new FormData(formEvent.currentTarget);
    const marketingConsent = !!formData.get("marketing");
    const analyticsConsent = !!formData.get("analytics");
    const functionalConsent = !!formData.get("functional");

    setConsentCookie(
      true,
      marketingConsent,
      analyticsConsent,
      functionalConsent,
    );
    setShow("hidden");
  }

  function handleDeny() {
    setConsentCookie(true, false, false, false);
    setShow("hidden");
  }

  function handleAccept() {
    setConsentCookie(true, true, true, true);
    setShow("hidden");
  }

  return (
    <div className="fixed inset-0 z-50 flex min-h-full items-center justify-center bg-black/50 font-sans">
      <form onSubmit={handleSave}>
        <div className="mx-3 flex min-h-[400px] flex-col overflow-hidden rounded-xl border bg-white shadow-md md:max-w-[600px] dark:bg-black">
          <div className="flex flex-col gap-6 border-b bg-neutral-50 p-6 dark:bg-black">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold">
                {t[lang].settings.yourPrivacy}
              </h2>
            </div>
            <p>{t[lang].info}</p>

            {/* Accordion */}
            <div className="mb-5 divide-y-[1px] overflow-hidden rounded-lg border bg-white dark:bg-neutral-950">
              {t[lang].settings.consentCategories.map((option) => {
                return (
                  <AccordionItem
                    key={option.key}
                    id={option.key}
                    title={option.title}
                    description={option.description}
                    showDescription={option.key === selectedOption}
                    setSelectedOption={setSelectedOption}
                  />
                );
              })}
            </div>
          </div>

          <div className="mt-auto space-y-5 p-6 dark:bg-neutral-950">
            <div className="flex gap-3 text-sm font-medium">
              <button
                className="cursor-pointer rounded-md border px-3 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                onClick={handleDeny}
                type="button"
              >
                {t[lang].denyBt}
              </button>
              <button
                className="cursor-pointer rounded-md border px-3 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                onClick={handleAccept}
                type="button"
              >
                {t[lang].acceptBt}
              </button>
              <button
                className="ml-auto cursor-pointer rounded-md border bg-black px-3 py-1 text-white hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-300"
                type="submit"
              >
                {t[lang].settings.saveBt}
              </button>
            </div>

            <div>
              <p className="text-xs font-light">
                {t[lang].settings.privacyPolicyLinkText}
                <a href={`/${lang}/privacy`}>
                  <ArrowTopRightIcon className="inline" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
