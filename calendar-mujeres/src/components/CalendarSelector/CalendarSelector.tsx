import type { Calendar } from '../../types/calendar';
import './CalendarSelector.css';

type CalendarSelectorProps = {
    calendars: Calendar[];
    onSelect: (calendar: Calendar) => void;
}

export function CalendarSelector({ calendars, onSelect }: CalendarSelectorProps) {

    return (
        <div className="calendar-app-buttons">
        <h1>La Resistente - Calendari</h1>
            {calendars.map((cal) => (
                <button className="calendar-app-button" key={cal.id} onClick={() => onSelect(cal)}>
                    {/* <img className="calendar-app-icon" src={app.icon} alt=""/> */}
                    {cal.name}
                </button>
            ))}
        </div>
    );
}