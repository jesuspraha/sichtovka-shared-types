export type Zakazka = { 
  id: number; 
  nazev?: string | null; 
  cislo?: string | null; 
  misto_id?: number | null;
  zakaznik_id?: number | null;
  stav?: number | null;           // ← INT
  adresa_text?: string | null;
  zakaznik?: string | null;

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