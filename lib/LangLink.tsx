"use client";

import Link, { LinkProps } from "next/link";
import { useSearchParams } from "next/navigation";

interface Props
  extends LinkProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

export default function LangLink({ href, children, ...rest }: Props) {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  let finalHref = href;

  if (lang) {
    // Aufsplitten in path und bestehende Query
    const [path, queryString] = href.split("?");
    const params = new URLSearchParams(queryString || "");

    // Bestehenden "lang" entfernen und neuen setzen
    params.set("lang", lang);

    // Neu zusammensetzen
    const newQuery = params.toString();
    finalHref = newQuery ? `${path}?${newQuery}` : path;
  }

  return (
    <Link href={finalHref} {...rest}>
      {children}
    </Link>
  );
}
