export type Zakazka = {
    id: number;
    nazev?: string | null;
    cislo?: string | null;
    misto_id?: number | null;
    zakaznik_id?: number | null;
    stav?: number | null;
    adresa_text?: string | null;
    zakaznik?: string | null;
    zakaznik_text?: string | null;
    deleted?: boolean | null;
    naklady?: number | null;
    faktprace?: number | null;
    faktkm?: number | null;
    vs?: string | null;
    ziskmat?: number | null;
    pozn?: string | null;
    provize?: number | null;
    provizelast?: string | null;
    archiv?: boolean | null;
    uhrazena?: boolean | null;
    datum_zacatku?: string | null;
    drive_file_url?: string[] | null;
};
export declare enum ZakazkaStav {
    OTEVRENA = 0,
    K_FAKTURACI = 1,
    UZAVRENA = 2,
    NEREALIZOVANA = 3,
    INTERNI = 4,
    REKLAMACE = 5,
    ZNOVUOTEVRENA = 6
}
export declare const ZAKAZKA_STAVY: {
    value: ZakazkaStav;
    label: string;
}[];
