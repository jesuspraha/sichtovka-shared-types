export var ZakazkaStav;
(function (ZakazkaStav) {
    ZakazkaStav[ZakazkaStav["OTEVRENA"] = 0] = "OTEVRENA";
    ZakazkaStav[ZakazkaStav["K_FAKTURACI"] = 1] = "K_FAKTURACI";
    ZakazkaStav[ZakazkaStav["UZAVRENA"] = 2] = "UZAVRENA";
    ZakazkaStav[ZakazkaStav["NEREALIZOVANA"] = 3] = "NEREALIZOVANA";
    ZakazkaStav[ZakazkaStav["INTERNI"] = 4] = "INTERNI";
    ZakazkaStav[ZakazkaStav["REKLAMACE"] = 5] = "REKLAMACE";
    ZakazkaStav[ZakazkaStav["ZNOVUOTEVRENA"] = 6] = "ZNOVUOTEVRENA";
})(ZakazkaStav || (ZakazkaStav = {}));
export const ZAKAZKA_STAVY = [
    { value: ZakazkaStav.OTEVRENA, label: "Otevřená" },
    { value: ZakazkaStav.K_FAKTURACI, label: "K fakturaci" },
    { value: ZakazkaStav.UZAVRENA, label: "Uzavřená" },
    { value: ZakazkaStav.NEREALIZOVANA, label: "Nerealizovaná" },
    { value: ZakazkaStav.INTERNI, label: "Interní" },
    { value: ZakazkaStav.REKLAMACE, label: "Reklamace" },
    { value: ZakazkaStav.ZNOVUOTEVRENA, label: "Znovuotevřená" },
];
