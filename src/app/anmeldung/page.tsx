'use client';
import {
    Box, Button, TextField, Checkbox, FormControlLabel, Typography, Alert,
    FormGroup, FormLabel,
} from "@mui/material";
import { useState } from "react";

export default function AnmeldungPage() {

    const programme = [
        { value: 'kreativ', label: 'Kreativ-Workshop (Mo, 10–12 Uhr)' },
        { value: 'fussball', label: 'Fußballcamp (Di, 14–17 Uhr)' },
        { value: 'schwimmen', label: 'Schwimmkurs (Mi, 9–11 Uhr)' },
    ];

    const [form, setForm] = useState({
        buchender: '',
        email: '',
        kinder: '',
        programme: [] as string[],
        bemerkung: '',
        einverstanden: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;

        // FIXME
        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? null : value,
        }));
    };

    // Für Mehrfachauswahl Programme
    const handleProgrammeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setForm(prev => ({
            ...prev,
            programme: checked
                ? [...prev.programme, value]
                : prev.programme.filter(item => item !== value),
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Hier könntest du die Daten z.B. an eine API senden
        // await fetch("/api/programmbuchung", { method: "POST", body: JSON.stringify(form) });
    };



    return (
        <div>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    maxWidth: 480, mx: 'auto', my: 6, p: 3, background: '#f5f8ff',
                    borderRadius: 2, boxShadow: 3
                }}
            >
                <Typography variant="h5" mb={2} textAlign="center">
                    Programmbuchung Ferienprogramm
                </Typography>
                <TextField
                    label="Name Teilnehmer/Eltern"
                    name="buchender"
                    value={form.buchender}
                    onChange={handleChange}
                    fullWidth required margin="normal"
                />
                <TextField
                    label="E-Mail-Adresse"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    fullWidth required margin="normal"
                />
                <TextField
                    label="Name des Kindes / der Kinder"
                    name="kinder"
                    value={form.kinder}
                    onChange={handleChange}
                    fullWidth margin="normal"
                />

                <FormLabel sx={{ mt: 2, mb: 1 }}>Programme auswählen</FormLabel>
                <FormGroup>
                    {programme.map(prg => (
                        <FormControlLabel
                            key={prg.value}
                            control={
                                <Checkbox
                                    value={prg.value}
                                    checked={form.programme.includes(prg.value)}
                                    onChange={handleProgrammeChange}
                                />
                            }
                            label={prg.label}
                        />
                    ))}
                </FormGroup>

                <TextField
                    label="Bemerkungen (optional)"
                    name="bemerkung"
                    value={form.bemerkung}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    minRows={2}
                    margin="normal"
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            name="einverstanden"
                            checked={form.einverstanden}
                            onChange={handleChange}
                            required
                        />
                    }
                    label="Ich bin mit der Datenverarbeitung für die Programmbuchung einverstanden."
                    sx={{ mt: 1, alignItems: 'flex-start' }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    sx={{ mt: 2 }}
                >
                    Jetzt buchen
                </Button>

                {submitted && (
                    <Alert severity="success" sx={{ mt: 2 }}>
                        Danke, Ihre Buchung wurde übermittelt!
                    </Alert>
                )}
            </Box>
        </div>
    );
}