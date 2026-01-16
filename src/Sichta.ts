export type Sichta = {
  id: number;
  typ: SichtaTyp;
  zacatek: string;
  konec?: string | null;
  prace_zacatek?: string | null;
  prace_konec?: string | null;
  delka_min?: number | null;
  pauza_min?: number | null;
  fakthod?: number | null;
  popis?: string | null;
  material?: string | null;
  km?: number | null;
  zakazka_id?: number | null;
  zakazka?: string | null;
  zakazka_stav?: number | null;
  misto_id?: number | null;
  misto?: string | null;
  zakaznik_id?: number | null;
  zakaznik?: string | null;
  misto_text?: string | null;
  zakaznik_text?: string | null;
  vozidlo_id?: number | null;
  vozidlo?: string | null;
  adresa_text?: string | null;
  user_id?: number | null;
  user?: string | null;
  drive_file_url?: string[] | null;
  lat?: number | null;
  lon?: number | null;
};

export enum SichtaTyp {
  OSTATNI = 0,
  SERVIS = 1,
  ZAKAZKA = 2,
  REZIE = 3
}
