import Image from "next/image";
import { Navbar } from "./components/Navbar";
import styles from './page.module.css';


export default function Home() {
  return (
    <div className={styles['container-fluid']}>
      <main className={styles['main']}>
          <Image
            aria-hidden
            src="/landing_page/geltendorf_logo.png"
            alt="Logo Geltendorfer Ferienprogramm"
            width={600}
            height={600}
          />

          <Navbar />

           <div className={styles['text'] }>
              <p className="text-lime-500 font-bold">
                <br/>Es ist geschafft: das 27. Geltendorfer Ferienprogramm ist da!
              </p>
              <p>
                <br/>27 Jahre Ferienprogramm, 27 Jahre actionreiche, spannende Sommerferien!
              </p>
              <p>
                <br/>Auch dieses Jahr freuen wir uns auf unsere Highlights:
              </p>
              <p className="text-sky-400 font-bold">
                <br/>Das große Lagerfeuer und den Hüttenbau
              </p>
              <p>
                <br/>Ab dem 27. Juni 2025 könnt Ihr die Programmliste durchstöbern. Auch die Registrierung ist ab diesem Zeitpunkt möglich. Folgt einfach den Anweisungen auf der rechten Seite.
              </p>
              <p>
                <br/>Wie üblich ist den &quot;Mach mit&quot;-Mitgliedern und Programmpunkt-Anbieter:innen die Anmeldung am Freitag, den 04.07.25 von 14.00 bis 18.00 Uhr vorbehalten. Ab Samstag, den 05. Juli von 10.00 Uhr bis 06. Juli 18.00 Uhr ist die Anmeldung für alle geöffnet.
              </p>
              <p className="text-lime-500 font-bold">
                 <br/><br/>---------------------------------------
              </p>
              <p className="text-sky-400 font-bold">
                <br/><br/>Bitte beachtet unsere 2025 angepassten Veranstaltungshinweise mit den neuen Rückerstattungsmodalitäten!
              </p>
              <p>
                <br/>Besonderer Dank gilt allen ehrenamtlichen Helfer*innen, die es ermöglichen, das 27. Geltendorfer Ferienprogramm in dieser Vielfalt anbieten zu können.
              </p>
              <p className="text-lime-500 font-bold">
                <br/>Herzlich danken wir auch der Gemeinde Geltendorf für die Unterstützung.
              </p>
              <p>
                <br/>Der &quot;Mach mit&quot;-Vorstand und der Arbeitskreis Ferienprogramm wünschen Euch schöne und abwechslungsreiche Ferien!
              </p>
              <p>
                <br/>www.machmit-geltendorf.de
              </p>
            </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
