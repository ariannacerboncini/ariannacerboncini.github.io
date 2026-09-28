import googleIcon from "./icons/google-calendar.svg";
import outlookIcon from "./icons/outlook.svg";
import appleIcon from "./icons/apple-calendar.svg";
import type { CalendarApp } from "../../types/calendar-app";

export const calendarApps: CalendarApp[] = [
    {
        name: "Google Calendar",
        icon: googleIcon
    },
    {
        name: "Outlook Calendar",
        icon: outlookIcon
    },
    {
        name: "Apple Calendar",
        icon: appleIcon
    }
];