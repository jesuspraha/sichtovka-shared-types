export type Zakazka = {
  id: number;
  nazev?: string | null;
  cislo?: string | null;
  misto_id?: number | null;
  zakaznik_id?: number | null;
  stav?: number | null;           // ← INT
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
};

export enum ZakazkaStav {
  OTEVRENA = 0,
  K_FAKTURACI = 1,
  UZAVRENA = 2,
  NEREALIZOVANA = 3,
  INTERNI = 4,
  REKLAMACE = 5,
  ZNOVUOTEVRENA = 6,
}

export const ZAKAZKA_STAVY: { value: ZakazkaStav; label: string }[] = [
  { value: ZakazkaStav.OTEVRENA, label: "Otevřená" },
  { value: ZakazkaStav.K_FAKTURACI, label: "K fakturaci" },
  { value: ZakazkaStav.UZAVRENA, label: "Uzavřená" },
  { value: ZakazkaStav.NEREALIZOVANA, label: "Nerealizovaná" },
  { value: ZakazkaStav.INTERNI, label: "Interní" },
  { value: ZakazkaStav.REKLAMACE, label: "Reklamace" },
  { value: ZakazkaStav.ZNOVUOTEVRENA, label: "Znovuotevřená" },
];