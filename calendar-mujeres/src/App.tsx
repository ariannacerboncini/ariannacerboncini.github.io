import { useState } from 'react';
import './App.css'
import { CalendarSelector } from './components/CalendarSelector/CalendarSelector';
import { SquadPage } from './components/SquadPage/SquadPage';
import { calendars } from './config/calendars';
import type { Calendar } from './types/calendar';

function App() {

  const [selectedCalendar, setSelectedCalendar] = useState<Calendar | null>(null);

  return (
    <>
      {selectedCalendar ? (
        <>          
          <SquadPage selectedCalendar={selectedCalendar} onBack={() => setSelectedCalendar(null)} />
        </>
      ) : (

        <CalendarSelector
          calendars={calendars}
          onSelect={setSelectedCalendar}
        />
      )
      }
    </>
  );
}

export default App
