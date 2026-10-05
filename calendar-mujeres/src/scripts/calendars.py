from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent

CALENDARS = [
    {
        "name": "FIGC",
        "data_file": SCRIPT_DIR.parent / "data" / "figc.json",
        "ics_file": SCRIPT_DIR.parent.parent / "public" / "calendars" / "resistente_figc_calendar.ics",
    },
    {
        "name": "Mujeres",
        "data_file": SCRIPT_DIR.parent / "data" / "mujeres.json",
        "ics_file": SCRIPT_DIR.parent.parent / "public" / "calendars" / "resistente_mujeres_calendar.ics",
    },
    # {
    #     "name": "UISP Under",
    #     "data_file": SCRIPT_DIR.parent / "data" / "uisp_under.json",
    #     "ics_file": SCRIPT_DIR.parent.parent / "public" / "calendars" / "resistente_uisp_under_calendar.ics",
    # },    
    # {
    #     "name": "UISP Over",
    #     "data_file": SCRIPT_DIR.parent / "data" / "uisp_over.json",
    #     "ics_file": SCRIPT_DIR.parent.parent / "public" / "calendars" / "resistente_uisp_over_calendar.ics",
    # },    
    # {
    #     "name": "Volley Misto",
    #     "data_file": SCRIPT_DIR.parent / "data" / "volley_misto.json",
    #     "ics_file": SCRIPT_DIR.parent.parent / "public" / "calendars" / "resistente_volley_misto_calendar.ics",
    # },    
    # {
    #     "name": "Volley Femminile",
    #     "data_file": SCRIPT_DIR.parent / "data" / "volley_femminile.json",
    #     "ics_file": SCRIPT_DIR.parent.parent / "public" / "calendars" / "resistente_volley_femminile_calendar.ics",
    # },    
]