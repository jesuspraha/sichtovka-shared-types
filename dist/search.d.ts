import type { Sichta, Zakazka, Misto, Zakaznik } from './index';
export type SearchResponse = {
    companies: Zakaznik[];
    places: Misto[];
    zakazky: Zakazka[];
    sichty: Sichta[];
};
