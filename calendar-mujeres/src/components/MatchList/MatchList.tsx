import './MatchList.css';
import type { Partita } from "../../types/partita";
import {
    AmichevoleIcon,
    CalcioEMartelloIcon,
    CampionatoIcon,
    CoppaIcon
} from './icons/competition-icons';

type MatchListProps = {
    partite: Partita[];
}

export function MatchList({ partite }: MatchListProps) {

    const getWeekday = (dateString: string) => {
        const date = new Date(`${dateString}T00:00:00`);

        return date.toLocaleDateString("it-IT", {
            weekday: 'short'
        });
    };

    const getMatchType = (description: string | undefined) => {
        if (!description) return null;

        if (description.startsWith("Amichevole")) {
            return {
                icon: AmichevoleIcon,
                label: "Amichevole"
            };
        }

        if (description.startsWith("Campionato")) {
            return {
                icon: CampionatoIcon,
                label: "Campionato"
            };
        }

        if (description.startsWith("Coppa")) {
            return {
                icon: CoppaIcon,
                label: "Coppa"
            };
        }

        if (description.startsWith("Calcio e Martello")) {
            return {
                icon: CalcioEMartelloIcon,
                label: "Calcio e Martello"
            };
        }

        return null;
    };

    const sortedPartite = [...partite].sort((a, b) => {
        const dateA = new Date(`${a.data}T${a.ora}`);
        const dateB = new Date(`${b.data}T${b.ora}`);

        return dateA.getTime() - dateB.getTime();
    });

    return (
        <table className="match-table">
            <thead>
                <tr>
                    <th className="date-column">Data e ora</th>
                    <th className="match-column">Partita</th>
                    <th className="score-column">Risultato</th>
                </tr>
            </thead>

            <tbody>
                {sortedPartite.map((partita) => {
                    const matchType = getMatchType(partita.descrizione);

                    return (
                        <tr key={`${partita.data}-${partita.ora}-${partita.squadraCasa}-${partita.squadraTrasferta}`}>
                            <td>
                                {getWeekday(partita.data)} {partita.data} {partita.ora}
                            </td>

                            <td>
                                <span className="match-content">
                                    {matchType && (
                                        <span
                                            className="competition-icon-container"
                                            title={matchType.label}
                                        >
                                            <img
                                                className="competition-icon"
                                                src={matchType.icon}
                                                alt={matchType.label}
                                            />
                                        </span>
                                    )}

                                    <span>
                                        {partita.squadraCasa} - {partita.squadraTrasferta}
                                    </span>
                                </span>
                            </td>

                            <td>
                                {partita.risultato
                                    ? `${partita.risultato.casa} - ${partita.risultato.trasferta}`
                                    : ''
                                }
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
