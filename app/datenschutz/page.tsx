"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function page() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  return (
    <>
      {lang === "en" ? (
        <div className="flex flex-col mt-8 gap-2">
          <h1 className="text-3xl font-semibold">Privacy Policy</h1>
          <p>Below, we would like to explain how we process your data.</p>
          <h2 className="text-xl font-semibold mt-2">
            The controller within the meaning of the GDPR is:
          </h2>
          <p className="flex flex-col mb-2">
            <span className="">Luke Barnes</span>
            <span className="">Teutoburger Strasse 38</span>
            <span className="">50678 Cologne, Deutschland</span>
            <span className="">Email: lbracketstringingservices@gmail.com</span>
          </p>
          <p>
            If you contact us by email, we will store the data you provide in
            order to process your enquiry. The processing of your data in the
            context of establishing contact is based on Art. 6 para. 1 lit. b
            GDPR, insofar as it concerns the initiation or execution of a
            contract, or on the basis of Art. 6 para. 1 lit. f GDPR (legitimate
            interest in responding to your enquiry).
          </p>
          <h2 className="text-xl font-semibold mt-2">
            The data processed includes:
          </h2>
          <p className="flex flex-col">
            <span>Your name</span>
            <span>Your email address</span>
            <span className="mb-2">
              Your telephone number, if you provide it to us
            </span>
            We will delete the data as soon as it is no longer necessary for
            storage or restrict processing if there are legal retention
            obligations.
          </p>
          <h2 className="text-xl font-semibold mt-2">
            Rights of data subjects
          </h2>
          <p className="flex flex-col">
            As a data subject, you have
            <span className="mt-2">the right to information,</span>
            <span>the right to rectification or erasure,</span>
            <span>the right to restrict processing, and</span>
            <span className="mb-2">
              the right to object to the processing of your data.
            </span>
            If you have given us your consent, you can revoke it at any time
            with effect for the future. Please send your objection in writing to
            the above address. In addition, you have the right to data
            portability. You also have the right to complain to a supervisory
            authority about the processing. A list of the relevant authorities
            can be found at:{" "}
            <Link
              href="
        https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
              className="underline break-all mb-2"
              target="_blank"
            >
              https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
            </Link>
            If the data processing is not based on the consent of the data
            subject, the right of withdrawal does not have to be stated (Art. 13
            para. 2 lit. c GDPR).
          </p>
          <h2 className="text-xl font-semibold mt-2">
            Data processing agreement
          </h2>
          <p>
            In principle, a contract processing agreement must be concluded with
            the host. The Bavarian State Office for Data Protection Supervision
            has made an exception for the hosting of purely static websites. If
            the website is used for self-presentation, e.g. by associations or
            small businesses, no personal data is passed on to the operator and
            no tracking takes place, there is no contract processing. It goes on
            to say: "The fact that IP addresses, i.e. personal data, must
            inevitably be processed when hosting static websites does not lead
            to the assumption of order processing. This would not be
            appropriate. Rather, the (short-term) storage of IP addresses is
            attributable to the telecommunications access provision of the
            website host in accordance with the TKG and serves primarily the
            security purposes of the host." We assume that this exception
            applies to GitHub Pages.
          </p>
          <h2 className="text-xl font-semibold mt-2">Cookies or tracking</h2>
          <p className="flex flex-col">
            This website does not use cookies, local storage or analysis or
            tracking tools. Therefore, no profiling or similar activities take
            place via the website.
          </p>
          <h2 className="text-xl font-semibold mt-2">Hosting GitHub Pages</h2>
          <p className="flex flex-col">
            Our host collects the following data in log files that your browser
            transmits: IP address, the address of the previously visited website
            (referrer request header), date and time of the request, time zone
            difference to Greenwich Mean Time, content of the request, HTTP
            status code, amount of data transferred, website from which the
            request comes, and information about the browser and operating
            system. This is necessary to display our website and to ensure its
            stability and security. This corresponds to our legitimate interest
            within the meaning of Art. 6 para. 1 sentence 1 lit. f GDPR. No
            tracking takes place and we have no direct access to this data. We
            use the following host to make our website available:
            <span className="mt-2">GitHub Inc.</span>
            <span> 88 Colin P Kelly Jr St</span>
            <span className="mb-2">San Francisco, CA 94107 United States</span>
            This is the recipient of your personal data. This corresponds to our
            legitimate interest within the meaning of Art. 6 para. 1 sentence 1
            lit. f GDPR, as we do not need to maintain a server on our premises.
            The server location is the USA. Further information on your rights
            to object and to request erasure from GitHub can be found at:{" "}
            <Link
              href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages"
              className="underline mb-2 break-all"
              target="_blank"
            >
              https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages
            </Link>
            You have the right to object to the processing. Whether the
            objection is successful must be determined in the context of a
            balancing of interests. The data will be deleted as soon as the
            purpose of the processing no longer applies. The processing of the
            data specified in this section is neither required by law nor
            contractually required. The functionality of the website cannot be
            guaranteed without this processing. GitHub has implemented
            compliance measures for international data transfers. These apply to
            all global activities in which GitHub processes personal data of
            natural persons in the EU. These measures are based on the EU
            Standard Contractual Clauses (SCCs). Further information can be
            found at:{" "}
            <Link
              href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1--the-standard-contractual-clauses-processors"
              className="underline mb-2 break-all"
              target="_blank"
            >
              https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1--the-standard-contractual-clauses-processors
            </Link>
          </p>
          <h2 className="text-xl font-semibold mt-2">Cloudflare</h2>
          <p className="flex flex-col">
            Unsere Website nutzt Dienste der
            <span className="mt-2">Cloudflare Inc.</span>
            <span>101 Townsend St.</span>
            <span className="mb-2">San Francisco, CA 94107, USA</span>
            Cloudflare provides a content delivery network (CDN) and acts as a
            reverse proxy to secure and optimise our website. All data
            transmitted between your browser and our website is routed through
            the Cloudflare network. This may also involve the processing of
            personal data such as your IP address. This is done on the basis of
            our legitimate interest pursuant to Art. 6 para. 1 lit. f GDPR in
            the secure and efficient provision of our online services. Further
            information can be found in Cloudflare's privacy policy:
            <Link
              href="https://www.cloudflare.com/privacypolicy/"
              className="underline break-all mb-2"
              target="_blank"
            >
              https://www.cloudflare.com/privacypolicy/
            </Link>
          </p>
          <h2 className="text-xl font-semibold mt-2">External links</h2>
          <p className="flex flex-col">
            This website contains links to external services:
            <span className="mt-2">Google Maps</span>
            <span>Instagram profile</span>
            <span className="mb-2">WhatsApp</span>
            Please note: When you click on these links, you will leave our
            website. Personal data (e.g. IP address) may be collected and
            processed by the respective third-party providers. We have no
            influence over these processes. The data protection provisions of
            the respective providers apply:
            <Link
              href="https://policies.google.com/privacy"
              className="underline break-all"
              target="_blank"
            >
              Google Privacy Policy
            </Link>
            <Link
              href="https://privacycenter.instagram.com/policy"
              className="underline break-all "
              target="_blank"
            >
              Instagram (Meta) Privacy Policy
            </Link>
            <Link
              href="https://www.whatsapp.com/legal/privacy-policy-eea"
              className="underline break-all mb-2"
              target="_blank"
            >
              WhatsApp (Meta) Privacy Policy
            </Link>
          </p>
          <h2 className="text-xl font-semibold mt-2">
            Changes to this privacy policy
          </h2>
          <p className="flex flex-col">
            We reserve the right to amend this privacy policy if the legal
            framework or content of the website changes.
          </p>
        </div>
      ) : (
        <div className="flex flex-col mt-8 gap-2">
          <h1 className="text-3xl font-semibold">Datenschutzerklärung</h1>
          <p>
            Im Folgenden möchten wir Sie aufklären, wie Ihre Daten von uns
            verarbeitet werden.
          </p>
          <h2 className="text-xl font-semibold mt-2">
            Verantwortlich im Sinne der DSGVO ist:
          </h2>
          <p className="flex flex-col mb-2">
            <span className="">Luke Barnes</span>
            <span className="">Teutoburger Straße 38</span>
            <span className="">50678 K&ouml;ln, Deutschland</span>
            <span className="">Email: lbracketstringingservices@gmail.com</span>
          </p>
          <p>
            Sollten Sie per E-Mail mit uns Kontakt aufnehmen, werden die
            mitgeteilten Daten von uns gespeichert, um Ihr Anliegen zu
            bearbeiten. Die Verarbeitung Ihrer Daten im Rahmen der
            Kontaktaufnahme erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
            DSGVO, soweit es um die Anbahnung oder Durchführung eines Vertrags
            geht, oder auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).
          </p>
          <h2 className="text-xl font-semibold mt-2">
            Zu den verarbeiteten Daten zählen:
          </h2>
          <p className="flex flex-col">
            <span>Ihr Name</span>
            <span>Ihre Email-Adresse</span>
            <span className="mb-2">
              Ihre Telefonnummer, sofern Sie uns diese mitteilen
            </span>
            Wir werden die Daten löschen, sobald die Speicherung nicht mehr
            erforderlich ist oder die Verarbeitung einschränken, falls
            gesetzliche Aufbewahrungspflichten bestehen.
          </p>
          <h2 className="text-xl font-semibold mt-2">Betroffenenrechte</h2>
          <p className="flex flex-col">
            Sie haben als betroffene Person,
            <span className="mt-2">das Recht auf Auskunft,</span>
            <span>das Recht auf Berichtigung oder Löschung,</span>
            <span>das Recht auf Einschränkung der Verarbeitung und</span>
            <span className="mb-2">
              das Recht auf Widerspruch gegen die Verarbeitung Ihrer Daten.
            </span>
            Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese
            jederzeit mit Wirkung für die Zukunft widerrufen. Bitte richten Sie
            Ihren Widerspruch formlos an die oben genannte Adresse. Darüber
            hinaus haben Sie das Recht auf Datenübertragbarkeit. Sie haben
            weiter das Recht, sich bei einer Aufsichtsbehörde über die
            Verarbeitung zu beschweren. Eine Liste der entsprechenden Behörden
            finden Sie unter:{" "}
            <Link
              href="
        https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
              className="underline break-all mb-2"
              target="_blank"
            >
              https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
            </Link>
            Sollte die Datenverarbeitung nicht auf Einwilligung des Betroffenen
            beruhen, muss das Widerrufsrecht nicht angegeben werden (Art. 13
            Abs. 2 lit. c DSGVO).
          </p>
          <h2 className="text-xl font-semibold mt-2">
            Auftragsverarbeitungsvertrag
          </h2>
          <p>
            Grundsätzlich ist ein Auftragsverarbeitungsvertrag mit dem Hoster
            abzuschließen. Das bayerische Landesamt für Datenschutzaufsicht hat
            für das Hosting rein statischer Websites eine Ausnahme gemacht. Für
            den Fall, dass die Webseite der Selbstdarstellung dient, z.B. von
            Vereinen oder Kleinunternehmen, keine personenbezogenen Daten an den
            Betreiber fließen und kein Tracking stattfindet, liegt keine
            Auftragsverarbeitung vor. Weiter heißt es: „Die Tatsache, dass auch
            beim Hosting von statischen Webseiten zwangsläufig IP-Adressen, d.h.
            personenbezogene Daten, verarbeitet werden müssen, führt nicht zur
            Annahme einer Auftragsverarbeitung. Das wäre nicht sachgerecht. Die
            (kurzfristige) IP-Adressenspeicherung ist vielmehr noch der
            TK-Zugangsvermittlung des Website-Hosters nach dem TKG zuzurechnen
            und dient in erster Linie Sicherheitszwecken des Hosters.“ Wir gehen
            davon aus, dass diese Ausnahme auf GitHub Pages anzuwenden ist.
          </p>
          <h2 className="text-xl font-semibold mt-2">Cookies oder Tracking</h2>
          <p className="flex flex-col">
            Diese Website verwendet keine Cookies, keinen Local Storage und
            keine Analyse- oder Tracking-Tools. Es erfolgt über die Website
            daher keine Profilbildung oder ähnliches.
          </p>
          <h2 className="text-xl font-semibold mt-2">Hosting GitHub Pages</h2>
          <p className="flex flex-col">
            Unser Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser
            übermittelt: IP-Adresse, die Adresse der vorher besuchten Website
            (Referer Anfrage-Header), Datum und Uhrzeit der Anfrage,
            Zeitzonendifferenz zur Greenwich Mean Time, Inhalt der Anforderung,
            HTTP-Statuscode, übertragene Datenmenge, Website, von der die
            Anforderung kommt und Informationen zu Browser und Betriebssystem.
            Das ist erforderlich, um unsere Website anzuzeigen und die
            Stabilität und Sicherheit zu gewährleisten. Dies entspricht unserem
            berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO.
            Es erfolgt kein Tracking und wir haben auf diese Daten keinen
            direkten Zugriff. Wir setzen für die Zurverfügungstellung unserer
            Website folgenden Hoster ein:
            <span className="mt-2">GitHub Inc.</span>
            <span> 88 Colin P Kelly Jr St</span>
            <span className="mb-2">San Francisco, CA 94107 United</span>
            States Dieser ist Empfänger Ihrer personenbezogenen Daten. Dies
            entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1
            S. 1 lit. f DSGVO, selbst keinen Server in unseren Räumlichkeiten
            vorhalten zu müssen. Serverstandort ist USA. Weitere Informationen
            zu Widerspruchs- und Beseitigungsmöglichkeiten gegenüber GitHub
            finden Sie unter:{" "}
            <Link
              href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages"
              className="underline mb-2 break-all"
              target="_blank"
            >
              https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages
            </Link>
            Sie haben das Recht der Verarbeitung zu widersprechen. Ob der
            Widerspruch erfolgreich ist, ist im Rahmen einer Interessenabwägung
            zu ermitteln. Die Daten werden gelöscht, sobald der Zweck der
            Verarbeitung entfällt. Die Verarbeitung der unter diesem Abschnitt
            angegebenen Daten ist weder gesetzlich noch vertraglich
            vorgeschrieben. Die Funktionsfähigkeit der Website ist ohne die
            Verarbeitung nicht gewährleistet. GitHub hat Compliance-Maßnahmen
            für internationale Datenübermittlungen umgesetzt. Diese gelten für
            alle weltweiten Aktivitäten, bei denen GitHub personenbezogene Daten
            von natürlichen Personen in der EU verarbeitet. Diese Maßnahmen
            basieren auf den EU-Standardvertragsklauseln (SCCs). Weitere
            Informationen finden Sie unter:{" "}
            <Link
              href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1--the-standard-contractual-clauses-processors"
              className="underline mb-2 break-all"
              target="_blank"
            >
              https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1--the-standard-contractual-clauses-processors
            </Link>
          </p>
          <h2 className="text-xl font-semibold mt-2">Cloudflare</h2>
          <p className="flex flex-col">
            Unsere Website nutzt Dienste der
            <span className="mt-2">Cloudflare Inc.</span>
            <span>101 Townsend St.</span>
            <span className="mb-2">San Francisco, CA 94107, USA</span>
            Cloudflare stellt ein Content Delivery Network (CDN) bereit und
            fungiert als Reverse Proxy zur Absicherung und Optimierung unserer
            Website. Dabei werden alle Daten, die zwischen Ihrem Browser und
            unserer Website übertragen werden, über das Cloudflare-Netz
            geleitet. Dabei kann es auch zur Verarbeitung personenbezogener
            Daten wie der IP-Adresse kommen. Der Einsatz erfolgt auf Grundlage
            unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO an
            einer sicheren und effizienten Bereitstellung unseres
            Onlineangebots. Weitere Informationen finden Sie in der
            Datenschutzerklärung von Cloudflare:
            <Link
              href="https://www.cloudflare.com/privacypolicy/"
              className="underline break-all mb-2"
              target="_blank"
            >
              https://www.cloudflare.com/privacypolicy/
            </Link>
          </p>
          <h2 className="text-xl font-semibold mt-2">Externe Links</h2>
          <p className="flex flex-col">
            Auf dieser Website befinden sich Links zu externen Diensten:
            <span className="mt-2">Google Maps</span>
            <span>Instagram-Profil</span>
            <span className="mb-2">WhatsApp Business</span>
            Bitte beachten Sie: Beim Aufruf dieser Links verlassen Sie unsere
            Website. Dabei können durch die jeweiligen Drittanbieter
            personenbezogene Daten (z.B. IP-Adresse) erfasst und verarbeitet
            werden. Auf diese Vorgänge haben wir keinen Einfluss. Es gelten die
            Datenschutzbestimmungen der jeweiligen Anbieter:
            <Link
              href="https://policies.google.com/privacy"
              className="underline break-all"
              target="_blank"
            >
              Google Datenschutzerklärung
            </Link>
            <Link
              href="https://privacycenter.instagram.com/policy"
              className="underline break-all "
              target="_blank"
            >
              Instagram (Meta) Datenschutzerklärung
            </Link>
            <Link
              href="https://www.whatsapp.com/legal/privacy-policy-eea"
              className="underline break-all mb-2"
              target="_blank"
            >
              WhatsApp (Meta) Datenschutzerklärung
            </Link>
          </p>
          <h2 className="text-xl font-semibold mt-2">
            Änderungen dieser Datenschutzerklärung
          </h2>
          <p className="flex flex-col">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn
            sich die rechtlichen Rahmenbedingungen oder Inhalte der Website
            ändern.
          </p>
        </div>
      )}
    </>
  );
}

export default page;
