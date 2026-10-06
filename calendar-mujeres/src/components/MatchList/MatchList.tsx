import './MatchList.css';
import type { Partita } from "../../types/partita";
import { AmichevoleIcon, CalcioEMartelloIcon, CampionatoIcon, CoppaIcon } from './icons/competition-icons';

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
        if (!description) return "";

        if (description.startsWith("Amichevole")) {
            return AmichevoleIcon;
        }

        if (description.startsWith("Campionato")) {
            return CampionatoIcon;
        }

        if (description.startsWith("Coppa")) {
            return CoppaIcon;
        }

        if (description.startsWith("Calcio e Martello")) {
            return CalcioEMartelloIcon;
        }

        return "";
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
                        <td><img className="competition-icon" src={getMatchType(partita.descrizione)} /> {partita.squadraCasa} - {partita.squadraTrasferta}</td>
                        <td>{partita.risultato ? (`${partita.risultato.casa} - ${partita.risultato.trasferta}`) : ''}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}