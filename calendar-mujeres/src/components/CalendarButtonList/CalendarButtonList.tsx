import './CalendarButtonList.css';
import { calendarApps } from "./calendar-apps";

type CalendarButtonListProps = {
}

export function CalendarButtonList({ }: CalendarButtonListProps) {

    return (
        <div className="calendar-app-buttons">
            {calendarApps.map((app) => (
                <a className="calendar-app-button" key={app.name} href={app.url} target='_blank'>
                    <img className="calendar-app-icon" src={app.icon} alt=""/>
                    {app.name}
                </a>
            ))}
        </div>
    );
}