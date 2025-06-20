"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setLang = (lang: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", lang);
    router.push(`${pathname}?${params.toString()}`);
  };

  const lang = searchParams.get("lang");

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        className={clsx("", {
          "cursor-pointer": lang === "en",
          "underline font-semibold": lang === "de" || !lang,
        })}
        onClick={() => setLang("de")}
        disabled={!lang || lang === "de"}
      >
        DE
      </button>
      <div className="">|</div>
      <button
        className={clsx("", {
          "cursor-pointer": lang === "de" || !lang,
          "underline font-semibold": lang === "en",
        })}
        onClick={() => setLang("en")}
        disabled={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;
