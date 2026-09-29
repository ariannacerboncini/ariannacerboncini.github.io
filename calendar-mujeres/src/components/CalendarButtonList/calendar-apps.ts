import googleIcon from "./icons/google-calendar.svg";
import outlookIcon from "./icons/outlook.svg";
import appleIcon from "./icons/apple-calendar.svg";
import type { CalendarApp } from "../../types/calendar-app";

const CALENDAR_ICS_URL = "https://ariannacerboncini.github.io/mujeres_calendar.ics"

// 2. URL con protocollo webcal:// (necessario per Apple Calendar / Outlook desktop)
const WEBCAL_URL = CALENDAR_ICS_URL.replace(/^https?:\/\//, "webcal://");
// 3. Link di iscrizione per Google Calendar Web
const GOOGLE_CALENDAR_URL = `https://calendar.google.com/calendar/render?cid=${encodeURIComponent(WEBCAL_URL)}`;
// 4. Link di iscrizione per Outlook.com (Web)
const OUTLOOK_WEB_URL = `https://outlook.live.com/calendar/0/addcalendar?url=${encodeURIComponent(CALENDAR_ICS_URL)}&name=${encodeURIComponent("La Resistente Mujeres")}`;

export const calendarApps: CalendarApp[] = [
    {
        name: "Google Calendar",
        icon: googleIcon,
        url: GOOGLE_CALENDAR_URL
    },
    {
        name: "Outlook Calendar",
        icon: outlookIcon,
        url: OUTLOOK_WEB_URL
    },
    {
        name: "Apple Calendar",
        icon: appleIcon,
        url: WEBCAL_URL
    }
];