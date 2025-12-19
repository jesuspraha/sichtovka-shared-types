
export type EmployeeReportItem = {
    user_id: number;
    jmeno: string;
    hodin: number;
    procento: number;
    mzda: number;
    odmena: number;
};

export type ZakazkaReportItem = {
    id: number;
    cislo?: string | null;
    nazev: string;
    stav: number;
    zakaznik?: string | null;
    misto?: string | null;
    celkem_hodin: number;
    cesta_hodin: number;
    km: number;
    naklady_zakazka: number;
    naklady_mzdy: number;
    naklady_celkem: number;
    fakturace: number;
    zisk: number;
    zamestnanci: EmployeeReportItem[];
};
