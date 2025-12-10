export type Misto = {
    id: number;
    nazev?: string | null;
    adresa_text?: string | null;
    identifikator?: string | null;
    lat?: number | null;
    lon?: number | null;
    zakaznik_text?: string | null;
    zakaznik_id?: number | null; // good to have too if we ever need it, but text is what we use
};
