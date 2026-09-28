import './MatchList.css';
import type { Partita } from "../../types/partita";

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

    const getMatchType = (description: string) => {
        if (description.startsWith("Amichevole")) {
            return "friendly";
        }

        if (description.startsWith("Campionato UISP")) {
            return "league";
        }

        if (description.startsWith("Coppa")) {
            return "cup";
        }

        return "other";
    };


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
                {partite.map((partita) => (
                    <tr>
                        <td>{getWeekday(partita.data)} {partita.data} {partita.ora}</td>
                        <td>{/* inserire mapping competizione (descrizione) */}{partita.squadraCasa} - {partita.squadraTrasferta}</td>
                        <td>{partita.risultato ? (`${partita.risultato.casa} - ${partita.risultato.trasferta}`) : ''}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}