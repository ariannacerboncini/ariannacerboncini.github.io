from datetime import datetime, timedelta, timezone
from zoneinfo import ZoneInfo
from icalendar import Calendar, Event
from pathlib import Path
import json

SCRIPT_DIR = Path(__file__).resolve().parent
DATA_FILE = SCRIPT_DIR.parent / "data" / "partite.json"
ICS_FILE = SCRIPT_DIR.parent.parent / "public" / "mujeres_calendar.ics"

with open(DATA_FILE, "r", encoding="utf-8") as input_file:
    data=json.load(input_file)

calendar = Calendar()
calendar.add("VERSION", "2.0")
calendar.add("PRODID", "-//La Resistente Mujeres//Calendario Partite//IT")
calendar.add("CALSCALE", "GREGORIAN")
calendar.add("X-MICROSOFT-CALSCALE", "GREGORIAN")
calendar.add("X-WR-CALNAME", "La Resistente Mujeres")
calendar.add("METHOD", "PUBLISH")
calendar.add("X-WR-TIMEZONE", "Europe/Rome")

rome_tz = ZoneInfo("Europe/Rome")
now_utc = datetime.now(timezone.utc)

for partita in data:
    data_ora_string = f"{partita['data']} {partita['ora']}"
    dtstart_naive = datetime.strptime(data_ora_string, "%Y-%m-%d %H:%M")
    dtstart_rome = dtstart_naive.replace(tzinfo=rome_tz)
    dtend_rome = dtstart_rome + timedelta(hours=1)
    dtstart_utc = dtstart_rome.astimezone(timezone.utc)
    dtend_utc = dtend_rome.astimezone(timezone.utc)

    summary = f"{partita['squadraCasa']} - {partita['squadraTrasferta']}"
    if partita["risultato"]:
        summary += f" ({partita['risultato']['casa']} - {partita['risultato']['trasferta']})"    

    event = Event()
    event.add("UID", partita['uid'])
    event.add("DTSTAMP", now_utc)
    event.add("DTSTART", dtstart_utc)
    event.add("DTEND", dtend_utc)
    event.add("SUMMARY", summary)
    event.add("DESCRIPTION", partita['descrizione'])
    event.add("LOCATION", partita['campo'])
    calendar.add_component(event)

with open(ICS_FILE, "wb") as output_file:
    output_file.write(calendar.to_ical())