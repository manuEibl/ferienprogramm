import styles from "@/app/kalender/kalender.module.css";
import React from "react";
import Image from "next/image";

export default function StartPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Image
                aria-hidden
                src="/landing_page/geltendorf_logo.png"
                alt="Logo Geltendorfer Ferienprogramm"
                width={600}
                height={600}
            />

            <div className={styles['text']}>
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
                    <br/>Ab dem 27. Juni 2025 könnt Ihr die Programmliste durchstöbern. Auch die Registrierung ist ab
                    diesem Zeitpunkt möglich. Folgt einfach den Anweisungen auf der rechten Seite.
                </p>
                <p>
                    <br/>Wie üblich ist den &quot;Mach mit&quot;-Mitgliedern und Programmpunkt-Anbieter:innen die
                    Anmeldung am Freitag, den 04.07.25 von 14.00 bis 18.00 Uhr vorbehalten. Ab Samstag, den 05. Juli von
                    10.00 Uhr bis 06. Juli 18.00 Uhr ist die Anmeldung für alle geöffnet.
                </p>
                <p className="text-lime-500 font-bold">
                    <br/><br/>---------------------------------------
                </p>
                <p className="text-sky-400 font-bold">
                    <br/><br/>Bitte beachtet unsere 2025 angepassten Veranstaltungshinweise mit den neuen
                    Rückerstattungsmodalitäten!
                </p>
                <p>
                    <br/>Besonderer Dank gilt allen ehrenamtlichen Helfer*innen, die es ermöglichen, das 27.
                    Geltendorfer Ferienprogramm in dieser Vielfalt anbieten zu können.
                </p>
                <p className="text-lime-500 font-bold">
                    <br/>Herzlich danken wir auch der Gemeinde Geltendorf für die Unterstützung.
                </p>
                <p>
                    <br/>Der &quot;Mach mit&quot;-Vorstand und der Arbeitskreis Ferienprogramm wünschen Euch schöne und
                    abwechslungsreiche Ferien!
                </p>
                <p>
                    <br/>www.machmit-geltendorf.de
                </p>
            </div>
        </div>
    );
}