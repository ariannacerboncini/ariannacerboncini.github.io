import './CalendarButtonList.css'
import { calendarApps } from "./calendar-apps";

type CalendarButtonListProps = {
}

export function CalendarButtonList({ }: CalendarButtonListProps) {

    return (
        <div className="calendar-app-buttons">
            {calendarApps.map((app) => (
                <button className="calendar-app-button" key={app.name}>
                    <img className="calendar-app-icon" src={app.icon} alt=""/>
                    {app.name}
                </button>
            ))}
        </div>
    );
}