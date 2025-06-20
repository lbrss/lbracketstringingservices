"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function page() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  return (
    <>
      {lang === "en" ? (
        <div className="my-6 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl font-semibold mb-4">Legal Disclosure</h1>
          <span className="font-semibold">
            Information according to § 5 TMG
          </span>
          <span className="">LB Racket Stringing Services</span>
          <span className="">Teutoburger Strasse 38</span>
          <span className="">50678 Cologne, Germany</span>

          <span className="font-semibold mt-6">Represented by</span>
          <span className="">Luke Barnes</span>

          <span className="font-semibold mt-6">Contact</span>
          <span className="">Phone: +49 (0) 1525 3407173</span>
          <span className="">Email: lbracketstringingservices@gmail.com</span>

          <span className="font-semibold mt-6">
            Company Registration Details
          </span>
          <span className="">Tax Office: Cologne Old Town</span>
          <span className="">Economic ID-Nr. DE454212205</span>

          <span className="mt-6">
            VAT ID: Not required in accordance with § 19 UStG (Small Business
            Regulation)
          </span>
          <span className="mt-6">
            Responsible for content according to § 18 Abs. 2 MStV: Luke Barnes
          </span>
        </div>
      ) : (
        <div className="my-6 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl font-semibold mb-4">Impressum</h1>
          <span className="font-semibold">Angaben gemäß § 5 TMG</span>
          <span className="">LB Racket Stringing Services</span>
          <span className="">Teutoburger Straße 38</span>
          <span className="">50678 Köln, Deutschland</span>

          <span className="font-semibold mt-6">Vertreten durch</span>
          <span className="">Luke Barnes</span>

          <span className="font-semibold mt-6">Kontakt</span>
          <span className="">Telefon: +49 (0) 1525 3407173</span>
          <span className="">Email: lbracketstringingservices@gmail.com</span>

          <span className="font-semibold mt-6">Registerangaben</span>
          <span className="">Finanzamt: Köln-Altstadt</span>
          <span className="">W-IdNr. DE454212205</span>

          <span className="mt-6">
            Umsatzsteuer-ID: nicht erforderlich gemäß § 19 UStG
            (Kleinunternehmerregelung)
          </span>
          <span className="mt-6">
            Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV: Luke Barnes
          </span>
        </div>
      )}
    </>
  );
}

export default page;
