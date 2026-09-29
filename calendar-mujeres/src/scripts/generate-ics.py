from datetime import datetime, timedelta
from icalendar import Calendar, Event
from pathlib import Path
import json

SCRIPT_DIR = Path(__file__).resolve().parent
DATA_FILE = SCRIPT_DIR.parent / "data" / "partite.json"
ICS_FILE = SCRIPT_DIR.parent / "data" / "mujeres_calendar.ics"

with open(DATA_FILE, "r", encoding="utf-8") as input_file:
    data=json.load(input_file)

calendar = Calendar()
calendar.add("X-WR-CALNAME", "La Resistente Mujeres")

for partita in data:
    data_ora_string = f"{partita["data"]} {partita["ora"]}"
    dtstart = datetime.strptime(data_ora_string, "%Y-%m-%d %H:%M")
    dtend = dtstart + timedelta(hours = 1)

    summary = f"{partita["squadraCasa"]} - {partita["squadraTrasferta"]}"
    if partita["risultato"]:
        summary += f" ({partita["risultato"]["casa"]} - {partita["risultato"]["trasferta"]})"

    event = Event()
    event.add("UID", partita["uid"])
    event.add("DTSTART", dtstart)
    event.add("DTEND", dtend)
    event.add("SUMMARY", summary)
    event.add("DESCRIPTION", partita["descrizione"])
    event.add("LOCATION", partita["campo"])
    calendar.add_component(event)

with open(ICS_FILE, "wb") as output_file:
    output_file.write(calendar.to_ical())