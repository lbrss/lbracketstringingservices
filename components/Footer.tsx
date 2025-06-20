"use client";
import React from "react";
//import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import LangLink from "@/lib/LangLink";
import { useSearchParams } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  const links = [
    {
      name: { de: "Impressum", en: "Legal Disclosure" },
      href: "/impressum",
    },
    {
      name: { de: "Datenschutz", en: "Privacy Policy" },
      href: "/datenschutz",
    },
    {
      name: { de: "Home", en: "Home" },
      href: "/",
    },
  ];

  return (
    <footer className="flex flex-col items-center justify-center gap-2 mt-10">
      {links.map((link, index) => {
        return (
          <React.Fragment key={index}>
            {/* {index > 0 && <span>|</span>} */}
            <LangLink
              href={link.href}
              className={clsx("hover:underline", {
                "font-semibold": pathname === link.href,
              })}
            >
              {lang === "en" ? link.name.en : link.name.de}
            </LangLink>
          </React.Fragment>
        );
      })}
    </footer>
  );
}

export default Footer;
