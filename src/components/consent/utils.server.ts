import { cookies } from "next/headers";
import { CONSENT_COOKIE_NAME } from "./config";

export async function getConsentCookieServer() {
  const rawConsentStr = (await cookies()).get(CONSENT_COOKIE_NAME)?.value;
  if (!rawConsentStr) return null;
  const consentObj = JSON.parse(rawConsentStr);
  return consentObj;
}
