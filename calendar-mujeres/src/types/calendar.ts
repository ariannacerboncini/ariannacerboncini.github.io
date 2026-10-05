import type { Partita } from "./partita";

export type Calendar = {
    id: string;
    name: string;
    title: string;
    description: string;
    icsUrl: string;
    partite: Partita[];
};