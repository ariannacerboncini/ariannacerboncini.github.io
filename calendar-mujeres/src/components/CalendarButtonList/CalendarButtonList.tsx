import './CalendarButtonList.css';
import { getCalendarApps } from "./calendar-apps";

type CalendarButtonListProps = {
    icsUrl: string;
    calendarName: string;
}

export function CalendarButtonList({ icsUrl, calendarName }: CalendarButtonListProps) {

    const calendarApps = getCalendarApps(icsUrl, calendarName);
    
    return (
        <div className="calendar-app-buttons">
            {calendarApps.map((app) => (
                <a className="calendar-app-button" key={app.name} href={app.url} target='_blank' rel="noopener noreferrer">
                    <img className="calendar-app-icon" src={app.icon} alt=""/>
                    {app.name}
                </a>
            ))}
        </div>
    );
}