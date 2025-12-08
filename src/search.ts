// Search types shared between frontend and refine apps
import type { Sichta, Zakazka, Misto, Zakaznik } from './index';

export type SearchResponse = {
    companies: Zakaznik[];
    places: Misto[];
    zakazky: Zakazka[];
    sichty: Sichta[];
};
