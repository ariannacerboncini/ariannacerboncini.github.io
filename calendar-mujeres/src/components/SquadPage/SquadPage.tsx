import type { Calendar } from "../../types/calendar";
import { CalendarButtonList } from "../CalendarButtonList/CalendarButtonList";
import { MatchList } from "../MatchList/MatchList";


type SquadPageProps = {
    selectedCalendar: Calendar;
}

export function SquadPage({ selectedCalendar }: SquadPageProps) {

    return (
        <div className="app-page">
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

            <section>
                <MatchList partite={selectedCalendar.partite} />
            </section>
        </div>
    );
}