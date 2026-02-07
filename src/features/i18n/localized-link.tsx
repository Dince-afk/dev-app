"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocalizedLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const localizedHref = "/" + locale + href;
  console.log({ pathname, locale, href, localizedHref });

  return <Link href={localizedHref}>{children}</Link>;
}
