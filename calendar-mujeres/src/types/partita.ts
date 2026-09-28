export interface Partita {
    squadraCasa: string;
    squadraTrasferta: string;
    data: string;
    ora: string;
    campo: string;
    descrizione?: string;
    risultato?: {
        casa: number;
        trasferta: number;
    } | null;
}