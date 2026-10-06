import './SquadPage.css';
import type { Calendar } from "../../types/calendar";
import { CalendarButtonList } from "../CalendarButtonList/CalendarButtonList";
import { MatchList } from "../MatchList/MatchList";


type SquadPageProps = {
    selectedCalendar: Calendar;
    onBack: () => void;
}

export function SquadPage({ selectedCalendar, onBack }: SquadPageProps) {

    return (
        <div className="app-page">
            <div className="top-left">
                <button className="back-button" onClick={onBack}>
                    « Torna alla selezione calendari
                </button>
            </div>
            <section className="app-header">
                <div>
                    <h1>{selectedCalendar.title}</h1>
                    <p>
                        {selectedCalendar.description}
                    </p>
                </div>
            </section>

            <section>
                <CalendarButtonList
                    icsUrl={selectedCalendar.icsUrl}
                    calendarName={selectedCalendar.name}
                />
            </section>

            <section className="match-list-section">
                <MatchList partite={selectedCalendar.partite} />
            </section>
        </div>
    );
}