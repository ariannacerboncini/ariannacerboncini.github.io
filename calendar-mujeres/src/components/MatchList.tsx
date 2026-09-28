import type { Partita } from "../types/partita";

type MatchListProps = {
    partite: Partita[];
}

export function MatchList({ partite }: MatchListProps) {    

    return (
        <table>
            <thead>
                <tr>
                    <th>Data e ora</th>
                    <th>Partita</th>
                    <th>Risultato</th>
                </tr>
            </thead>

            <tbody>
                {partite.map((partita) => (
                    <tr>
                        {/* inserire giorno della settimana partita */}
                        <td>{partita.data} {partita.ora}</td>
                        <td>{/* inserire mapping competizione (descrizione) */}{partita.squadraCasa} - {partita.squadraTrasferta}</td>
                        <td>{partita.risultato ? (`${partita.risultato.casa} - ${partita.risultato.trasferta}`) : '' }</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}