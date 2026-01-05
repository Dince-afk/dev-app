"use client";

import { useEffect, useState } from "react";
import { ConsentViewState, SupportedLanguages, t } from "../config";
import { setConsentCookie } from "../utils/utils.client";

export function SmallPopup({
  lang,
  setShow,
}: {
  lang: SupportedLanguages;
  setShow: (newValue: ConsentViewState) => void;
}) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  function handleDeny() {
    setConsentCookie(true, false, false, false);
    setShow("hidden");
  }

  function handleAccept() {
    setConsentCookie(true, true, true, true);
    setShow("hidden");
  }

  return (
    <div
      className={`${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"} fixed bottom-0 z-50 m-4 rounded-xl border bg-white p-4 font-sans text-sm shadow transition-transform duration-700 ease-out sm:max-w-[450px] dark:bg-black dark:text-white`}
    >
      <p>{t[lang].info}</p>
      <div className="flex w-full content-between gap-4 pt-3 text-xs sm:text-sm">
        <button
          className="cursor-pointer rounded-xl border px-2.5 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-900"
          onClick={handleDeny}
        >
          {t[lang].denyBt}
        </button>
        <button
          className="cursor-pointer rounded-xl border px-2.5 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-900"
          onClick={handleAccept}
        >
          {t[lang].acceptBt}
        </button>
        <button
          onClick={() => setShow("settings")}
          className="ml-auto cursor-pointer rounded-xl border bg-black px-2.5 py-1 text-white hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-300"
        >
          {t[lang].smallPopup.settingsBt}
        </button>
      </div>
    </div>
  );
}
