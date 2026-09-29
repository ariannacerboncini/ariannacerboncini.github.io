import googleIcon from "./icons/google-calendar.svg";
import outlookIcon from "./icons/outlook.svg";
import appleIcon from "./icons/apple-calendar.svg";
import type { CalendarApp } from "../../types/calendar-app";

const CALENDAR_ICS_URL = "https://ariannacerboncini.github.io/mujeres_calendar.ics"
const GOOGLE_CALENDAR_URL = `https://calendar.google.com/calendar/r?cid=${encodeURIComponent(CALENDAR_ICS_URL)}`

export const calendarApps: CalendarApp[] = [
    {
        name: "Google Calendar",
        icon: googleIcon,
        url: GOOGLE_CALENDAR_URL
    },
    {
        name: "Outlook Calendar",
        icon: outlookIcon,
        url: "https://www.outlook.com"
    },
    {
        name: "Apple Calendar",
        icon: appleIcon,
        url: "https://www.apple.com"
    }
];