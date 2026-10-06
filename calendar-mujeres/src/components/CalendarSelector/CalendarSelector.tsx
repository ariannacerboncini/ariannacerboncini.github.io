import type { Calendar } from '../../types/calendar';
import './CalendarSelector.css';

type CalendarSelectorProps = {
    calendars: Calendar[];
    onSelect: (calendar: Calendar) => void;
}

export function CalendarSelector({ calendars, onSelect }: CalendarSelectorProps) {

    return (
        <div className="app-page">
            <section className="app-header">
            <h1>La Resistente - Calendari</h1>
            <p>
                Benvenutə! Da questa pagina puoi consultare online le prossime partite delle squadre della Resistente, oppure aggiungerle al tuo calendario digitale.
            </p>
            <p>
                Seleziona una squadra per iniziare!
            </p>
            </section>
            <section className="calendar-selector">
                {calendars.map((cal) => (
                    <button className="calendar-card" key={cal.id} onClick={() => onSelect(cal)}>
                        <div className="calendar-card-content">
                            <span className="calendar-card-subtitle">
                                {cal.subtitle}
                            </span>

                            <h2>{cal.name}</h2>
                        </div>

                        <span className="calendar-card-action">
                            Visualizza calendario
                            <span className="calendar-card-arrow">→</span>
                        </span>
                    </button>
                ))}
            </section>
        </div>
    );
}