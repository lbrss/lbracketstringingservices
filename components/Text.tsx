"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Text() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-4 mb-6">
        <span>BA &#127992;</span>
        <span>SQ &#9899;</span>
        <span>TE &#127934;</span>
      </div>
      <span className="italic text-center mb-4">
        {lang === "en" ? (
          <>
            Strung right. <br />
            Otherwise it's the racket's fault. Again.
          </>
        ) : (
          <>
            Richtig besaitet.
            <br />
            Ansonsten ist wieder der Schläger schuld.
          </>
        )}
      </span>
      <span className="text-center text-sm md:text-base">
        {lang === "en"
          ? "Experienced stringer and lifelong racket sports fan"
          : "Erfahrener Besaiter und langjähriger Racketsportler"}
      </span>
      <span className="text-center text-sm md:text-base">
        {lang === "en"
          ? "Originally from 🇬🇧 ➡️ escaped to 🇩🇪 🇪🇺"
          : "Ursprünglich aus 🇬🇧 ➡️ geflohen nach 🇩🇪 🇪🇺"}
      </span>

      <span className="text-center mt-6">
        <Link
          href="https://maps.app.goo.gl/jvfB8CbAiWQmm1JG9?g_st=ic"
          target="_blank"
          className="hover:underline"
        >
          &#128205; {lang === "en" ? "Cologne, Germany" : "Köln, Deutschland"}
        </Link>
      </span>
    </section>
  );
}

export default Text;
