import Negotiator from "negotiator";
import { NextRequest } from "next/server";

import { availableLocales as defaultAvailableLocales } from "./config";
/**
 * Get a list of user language preferences.
 * @param request
 * @returns
 * @example
 * // returns [ 'de', 'en-US', 'en' ]
 */
export function getUserLocales(request: Request) {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const negotiator = new Negotiator({ headers: negotiatorHeaders });

  return negotiator.languages();
}

/**
 * Checks if the request pathname contains an available website locale.
 * @param request
 * @param availableLocales
 * @returns
 */
export function checkPathHasAvailableLocale(
  request: NextRequest,
  availableLocales: string[] = defaultAvailableLocales,
) {
  const pathHasAvailableLocale = availableLocales.some(
    (locale) =>
      request.nextUrl.pathname.startsWith(`/${locale}/`) ||
      request.nextUrl.pathname === `/${locale}`,
  );
  return pathHasAvailableLocale;
}
