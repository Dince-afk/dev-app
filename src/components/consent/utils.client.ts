import Cookies from "js-cookie";
import { CONSENT_COOKIE_NAME } from "./config";

export function getConsentCookieClient() {
  const cookieStr = Cookies.get(CONSENT_COOKIE_NAME);
  if (cookieStr) {
    return JSON.parse(cookieStr);
  } else {
    return null;
  }
}

export function setConsentCookie(
  essential: boolean,
  marketing: boolean,
  analytics: boolean,
  functional: boolean,
) {
  Cookies.set(
    CONSENT_COOKIE_NAME,
    JSON.stringify({
      essential,
      marketing,
      analytics,
      functional,
    }),
    { expires: 365 },
  );
}
