import { getConsentCookieServer } from "@/components/consent/utils.server";
import { NextResponse } from "next/server";

export async function GET() {
  const consentCookie = await getConsentCookieServer();
  console.log(consentCookie);
  return NextResponse.json({ consentCookie });
}
