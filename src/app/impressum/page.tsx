import { Box, Divider, Link, Typography } from "@mui/material";

export default function KontaktPage() {

    return (
        <div>
            <Box sx={{ maxWidth: 700, mx: "auto", p: { xs: 2, md: 4 }, background: "#f8f9fb", borderRadius: 2 }}>
                <Typography variant="h4" color="black" component="h1" gutterBottom>
                    Impressum
                </Typography>
                <Divider color="black" sx={{ mb: 2 }} />

                <Typography color="black" variant="h6">Herausgeber</Typography>
                <Typography color="black">Gemeinde Geltendorf<br />
                    Schulstraße 13<br />
                    82269 Geltendorf
                </Typography>
                <Typography color="black" sx={{ mt: 1 }}>
                    Vertreten durch den 1. Bürgermeister Robert Sedlmayr<br />
                    Telefon: <Link href="tel:0819393210">08193/9321-0</Link><br />
                    Fax: 08193/9321-23<br />
                    E-Mail: <Link href="mailto:gemeinde@geltendorf.de">gemeinde@geltendorf.de</Link><br />
                    Aufsichtsbehörde: Landratsamt Landsberg am Lech
                </Typography>

                <Divider color="black" sx={{ my: 2 }} />
                <Typography color="black" variant="h6">Inhaltliche Verantwortung nach § 55 Abs. 2 RStV</Typography>
                <Typography color="black">
                    Gemeinde Geltendorf<br />
                    Telefon: <Link href="tel:0819393210">08193/9321-0</Link><br />
                    Fax: 08193/9321-23<br />
                    E-Mail: <Link href="mailto:sedlmayr.gemeinde@geltendorf.de">sedlmayr.gemeinde@geltendorf.de</Link>
                </Typography>

                <Divider color="black" sx={{ my: 2 }} />
                <Typography color="black" variant="h6">Technische Umsetzung</Typography>
                <Typography color="black">
                    Manuela Eibl<br />
                    Schüleinstraße 9a<br />
                    82269 Geltendorf<br />
                    Telefon: +49 (0)172 7532122<br />
                    E-Mail: <Link href="mailto:manuela_eibl@gmx.de">manuela_eibl@gmx.de</Link>
                </Typography>

                <Divider color="black" sx={{ my: 2 }} />
                <Typography  color="black"variant="h6">Nutzungsbedingungen & Urheberrecht</Typography>
                <Typography color="black">
                    Texte, Bilder, Grafiken sowie die Gestaltung dieser Internetseiten unterliegen dem Urheberrecht. Sie dürfen im Rahmen des § 53 UrhG nur zum privaten oder eigenen Gebrauch genutzt werden. Die Vervielfältigung, Verwendung oder Veröffentlichung – auch auszugsweise – ist nur mit vorheriger Zustimmung gestattet.<br /><br />
                    Weitere Urheberrechtshinweise und Nutzungsbedingungen findest du auf der offiziellen Website.
                </Typography>

                <Divider color="black" sx={{ my: 2 }} />
                <Typography color="black" variant="h6">Haftungsausschluss</Typography>
                <Typography color="black">
                    Alle Informationen wurden nach bestem Wissen zusammengestellt; eine Garantie für die Aktualität, Richtigkeit, Vollständigkeit oder Verfügbarkeit kann jedoch nicht übernommen werden. Für Schäden durch Nutzung dieses Angebots wird keine Haftung übernommen. Weitere rechtliche Hinweise siehe Website.
                </Typography>

                <Divider color="black" sx={{ my: 2 }} />
                <Typography color="black" variant="h6">Links</Typography>
                <Typography color="black">
                    Für externe Inhalte verlinkter Seiten wird keine Verantwortung übernommen. Bei erstmaliger Verknüpfung wurden die Inhalte geprüft, für künftige Änderungen ist der jeweilige Anbieter verantwortlich.
                </Typography>
            </Box>
        </div>
    );
}



