import googleIcon from "./icons/google-calendar.svg";
import outlookIcon from "./icons/outlook.svg";
import appleIcon from "./icons/apple-calendar.svg";

import type { CalendarApp } from "../../types/calendar-app";

export function getCalendarApps(
    icsUrl: string,
    calendarName: string
): CalendarApp[] {

    const webcalUrl = icsUrl.replace(/^https?:\/\//, "webcal://");

    const googleCalendarUrl =
        `https://calendar.google.com/calendar/render?cid=${encodeURIComponent(webcalUrl)}`;

    const outlookCalendarUrl =
        `https://outlook.live.com/calendar/0/addcalendar?url=${encodeURIComponent(icsUrl)}&name=${encodeURIComponent(calendarName)}`;

    return [
        {
            name: "Google Calendar",
            icon: googleIcon,
            url: googleCalendarUrl
        },
        {
            name: "Outlook Calendar",
            icon: outlookIcon,
            url: outlookCalendarUrl
        },
        {
            name: "Apple Calendar",
            icon: appleIcon,
            url: webcalUrl
        }
    ];
}
