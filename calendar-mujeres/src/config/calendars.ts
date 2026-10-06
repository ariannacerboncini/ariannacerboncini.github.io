import figc from "../data/figc.json";
import mujeres from "../data/mujeres.json";
import type { Calendar } from "../types/calendar";

export const calendars: Calendar[] = [
    {
        id: "figc",
        name: "FIGC",
        title: "Calendario La Resistente",
        subtitle: "Prima squadra",
        description:
            "Da questa pagina puoi aggiungere le partite della prima squadra al tuo calendario digitale o consultare le partite della stagione.",
        icsUrl:
            "https://ariannacerboncini.github.io/calendars/resistente_figc_calendar.ics",
        partite: figc,
    },
    {
        id: "mujeres",
        name: "Mujeres",
        title: "Calendario La Resistente Mujeres",
        subtitle: "Calcio femminile",
        description:
            "Da questa pagina puoi aggiungere le partite delle Mujeres al tuo calendario digitale o consultare le partite della stagione.",
        icsUrl:
            "https://ariannacerboncini.github.io/calendars/resistente_mujeres_calendar.ics",
        partite: mujeres,
    },
];