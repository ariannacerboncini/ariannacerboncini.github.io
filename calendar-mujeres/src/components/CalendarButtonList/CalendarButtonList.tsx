import './CalendarButtonList.css';
import { getCalendarApps, getMobileCalendarApp } from "./calendar-apps";

type CalendarButtonListProps = {
    icsUrl: string;
    calendarName: string;
}

export function CalendarButtonList({ icsUrl, calendarName }: CalendarButtonListProps) {

    const calendarApps = getCalendarApps(icsUrl, calendarName);
    const mobileCalendarApp = getMobileCalendarApp(icsUrl);

    return (
        <>
            <div className="calendar-app-buttons">
                {calendarApps.map((app) => (
                    <a className="calendar-app-button" key={app.name} href={app.url} target='_blank' rel="noopener noreferrer">
                        <img className="calendar-app-icon" src={app.icon} alt="" />
                        {app.name}
                    </a>
                ))}
            </div>
            <a
                className="calendar-app-button calendar-mobile-button"
                href={mobileCalendarApp.url}
            >
                <img
                    className="calendar-app-icon"
                    src={mobileCalendarApp.icon}
                    alt=""
                />
                {mobileCalendarApp.name}
            </a>
        </>
    );
}