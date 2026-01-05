"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ConsentViewState, SupportedLanguages } from "../config";
import { ConsentSettings } from "./consent-settings";
import { SmallPopup } from "./small-popup";
import { getConsentCookieClient } from "../utils/utils.client";

/**
 * A client component which checks if the consent cookie is set. If not, it will render the consent popup.
 * @returns
 * @example
 * // In layout.tsx import ConsentPopup
 * import { ConsentPopup } from "@repo/shared/components/consent";
 * ...
 * <body>
 *  <ConsentPopup/>
 * <body/>
 * @example
 * // You can then check if as user consented to a specific tracking
 *  const trackingConsent = await getConsentCookieServer();
    if (trackingConsent?.marketing) {
      try {
      ...
 */
export function ConsentPopup() {
  const [show, setShow] = useState<ConsentViewState>("hidden");
  useEffect(() => {
    const cookie = getConsentCookieClient();
    if (cookie) return;

    setShow("popup");
  }, []);
  const path = usePathname();
  let lang = path.split("/")[1] as SupportedLanguages;
  if (!lang || lang !== "de") lang = "en";

  switch (show) {
    case "hidden":
      return null;
    case "popup":
      return <SmallPopup lang={lang} setShow={setShow} />;
    case "settings":
      return <ConsentSettings lang={lang} setShow={setShow} />;
  }
}
