import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Link } from 'react-router-dom';
import { ZAKAZKA_STAVY } from '../Zakazka';
const btnStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 12px',
    borderRadius: 12,
    border: '1px solid var(--bs-border-color, #e5e7eb)',
    background: 'var(--bs-body-bg, #fff)',
    color: 'var(--bs-body-color, #212529)',
    cursor: 'pointer',
    boxShadow: '0 1px 2px rgba(0,0,0,.05)',
    textDecoration: 'none',
    fontSize: 14,
    lineHeight: 1.2,
};
const cardStyle = {
    border: '1px solid var(--bs-border-color, #e5e7eb)',
    borderRadius: 0,
    overflow: 'hidden',
};
const thtd = {
    padding: '10px 12px',
    borderTop: '1px solid var(--bs-border-color-translucent, #f1f5f9)',
};
const sectionHeader = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '12px 0 6px',
};
const badgeMuted = {
    fontSize: 12,
    color: 'var(--bs-secondary-color, #64748b)',
};
const actionCellStyle = {
    ...thtd,
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    alignItems: 'center',
};
function formatZakazkaStav(stav) {
    var _a, _b;
    if (stav == null)
        return '—';
    return (_b = (_a = ZAKAZKA_STAVY.find((s) => s.value === stav)) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : String(stav);
}
export function GlobalSearchResults({ searchData, query, loading = false, error = null, linkBuilder, newSichtaHref, }) {
    const [view, setView] = React.useState('summary');
    const anyResults = searchData &&
        (searchData.companies.length +
            searchData.places.length +
            searchData.zakazky.length +
            searchData.sichty.length) > 0;
    function formatDate(iso) {
        if (!iso)
            return '—';
        try {
            const d = new Date(iso);
            return new Intl.DateTimeFormat('cs-CZ', {
                dateStyle: 'medium',
                timeStyle: 'short',
            }).format(d);
        }
        catch {
            return iso;
        }
    }
    function renderRowActions(entity, id, newSichtaCtx) {
        return (_jsxs("div", { style: actionCellStyle, children: [_jsx(Link, { to: linkBuilder(entity, id), style: btnStyle, children: "Detail" }), newSichtaHref && newSichtaCtx && (_jsx(Link, { to: newSichtaHref(newSichtaCtx), style: btnStyle, children: "Nov\u00E1 \u0161ichta" }))] }));
    }
    // Loading state
    if (loading) {
        return (_jsx("div", { style: { ...cardStyle, padding: 12, opacity: 0.7 }, children: "Hled\u00E1m\u2026" }));
    }
    // Error state
    if (error) {
        return (_jsx("div", { style: {
                border: '1px solid #fecaca',
                background: '#fef2f2',
                color: '#991b1b',
                borderRadius: 12,
                padding: 12,
            }, children: error }));
    }
    // No results
    if (!searchData) {
        return null;
    }
    return (_jsxs("div", { className: "global-search-results", children: [_jsxs("div", { style: { display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap' }, children: [_jsx("button", { type: "button", style: btnStyle, onClick: () => setView('summary'), children: "Souhrn" }), _jsxs("button", { type: "button", style: btnStyle, onClick: () => setView('companies'), children: ["Firmy (", searchData.companies.length, ")"] }), _jsxs("button", { type: "button", style: btnStyle, onClick: () => setView('places'), children: ["M\u00EDsta (", searchData.places.length, ")"] }), _jsxs("button", { type: "button", style: btnStyle, onClick: () => setView('zakazky'), children: ["Zak\u00E1zky (", searchData.zakazky.length, ")"] }), _jsxs("button", { type: "button", style: btnStyle, onClick: () => setView('sichty'), children: ["\u0160ichty (", searchData.sichty.length, ")"] })] }), view === 'summary' && (_jsxs("div", { style: { display: 'grid', gridTemplateColumns: '1fr', gap: 12 }, children: [_jsxs("div", { style: cardStyle, children: [_jsxs("div", { style: { ...sectionHeader, padding: '10px 12px' }, children: [_jsxs("strong", { children: ["Firmy ", _jsxs("span", { style: badgeMuted, children: ["(", searchData.companies.length, ")"] })] }), _jsx("button", { type: "button", style: btnStyle, onClick: () => setView('companies'), children: "Zobrazit v\u0161e" })] }), _jsxs("table", { style: {
                                    width: '100%',
                                    borderCollapse: 'separate',
                                    borderSpacing: 0,
                                    fontSize: 14,
                                }, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { style: { ...thtd, textAlign: 'left' }, children: "N\u00E1zev" }), _jsx("th", { style: thtd, children: "I\u010CO" }), _jsx("th", { style: thtd, children: "Adresa" }), _jsx("th", { style: { ...thtd, width: 1 } })] }) }), _jsxs("tbody", { children: [searchData.companies.slice(0, 5).map((c) => (_jsxs("tr", { children: [_jsx("td", { style: thtd, children: _jsx(Link, { to: linkBuilder('company', c.id), children: c.nazev }) }), _jsx("td", { style: thtd, children: c.ico || '—' }), _jsx("td", { style: thtd, children: c.ulice || c.obec || '' }), _jsx("td", { style: thtd, children: renderRowActions('company', c.id, { type: 'company', item: c }) })] }, `c-${c.id}`))), searchData.companies.length === 0 && (_jsx("tr", { children: _jsx("td", { style: { ...thtd, color: 'var(--bs-secondary-color, #6b7280)' }, colSpan: 4, children: "Nic nenalezeno." }) }))] })] })] }), _jsxs("div", { style: cardStyle, children: [_jsxs("div", { style: { ...sectionHeader, padding: '10px 12px' }, children: [_jsxs("strong", { children: ["M\u00EDsta ", _jsxs("span", { style: badgeMuted, children: ["(", searchData.places.length, ")"] })] }), _jsx("button", { type: "button", style: btnStyle, onClick: () => setView('places'), children: "Zobrazit v\u0161e" })] }), _jsxs("table", { style: {
                                    width: '100%',
                                    borderCollapse: 'separate',
                                    borderSpacing: 0,
                                    fontSize: 14,
                                }, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { style: { ...thtd, textAlign: 'left' }, children: "N\u00E1zev" }), _jsx("th", { style: thtd, children: "Adresa" }), _jsx("th", { style: thtd, children: "Z\u00E1kazn\u00EDk" }), _jsx("th", { style: { ...thtd, width: 1 } })] }) }), _jsxs("tbody", { children: [searchData.places.slice(0, 5).map((p) => (_jsxs("tr", { children: [_jsx("td", { style: thtd, children: _jsx(Link, { to: linkBuilder('place', p.id), children: p.nazev }) }), _jsx("td", { style: thtd, children: p.adresa_text || '' }), _jsx("td", { style: thtd, children: p.zakaznik_text || '' }), _jsx("td", { style: thtd, children: renderRowActions('place', p.id, { type: 'place', item: p }) })] }, `p-${p.id}`))), searchData.places.length === 0 && (_jsx("tr", { children: _jsx("td", { style: { ...thtd, color: 'var(--bs-secondary-color, #6b7280)' }, colSpan: 4, children: "Nic nenalezeno." }) }))] })] })] }), _jsxs("div", { style: cardStyle, children: [_jsxs("div", { style: { ...sectionHeader, padding: '10px 12px' }, children: [_jsxs("strong", { children: ["Zak\u00E1zky ", _jsxs("span", { style: badgeMuted, children: ["(", searchData.zakazky.length, ")"] })] }), _jsx("button", { type: "button", style: btnStyle, onClick: () => setView('zakazky'), children: "Zobrazit v\u0161e" })] }), _jsxs("table", { style: {
                                    width: '100%',
                                    borderCollapse: 'separate',
                                    borderSpacing: 0,
                                    fontSize: 14,
                                }, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { style: thtd, children: "K\u00F3d" }), _jsx("th", { style: thtd, children: "N\u00E1zev" }), _jsx("th", { style: thtd, children: "Z\u00E1kazn\u00EDk" }), _jsx("th", { style: thtd, children: "Stav" }), _jsx("th", { style: { ...thtd, width: 1 } })] }) }), _jsxs("tbody", { children: [searchData.zakazky.slice(0, 5).map((o) => (_jsxs("tr", { children: [_jsx("td", { style: thtd, children: _jsx(Link, { to: linkBuilder('zakazka', o.id), children: o.cislo || o.id }) }), _jsx("td", { style: thtd, children: o.nazev || '—' }), _jsx("td", { style: thtd, children: o.zakaznik_text || '' }), _jsx("td", { style: thtd, children: formatZakazkaStav(o.stav) }), _jsx("td", { style: thtd, children: renderRowActions('zakazka', o.id, { type: 'zakazka', item: o }) })] }, `o-${o.id}`))), searchData.zakazky.length === 0 && (_jsx("tr", { children: _jsx("td", { style: { ...thtd, color: 'var(--bs-secondary-color, #6b7280)' }, colSpan: 5, children: "Nic nenalezeno." }) }))] })] })] }), _jsxs("div", { style: cardStyle, children: [_jsxs("div", { style: { ...sectionHeader, padding: '10px 12px' }, children: [_jsxs("strong", { children: ["\u0160ichty ", _jsxs("span", { style: badgeMuted, children: ["(", searchData.sichty.length, ")"] })] }), _jsx("button", { type: "button", style: btnStyle, onClick: () => setView('sichty'), children: "Zobrazit v\u0161e" })] }), _jsxs("table", { style: {
                                    width: '100%',
                                    borderCollapse: 'separate',
                                    borderSpacing: 0,
                                    fontSize: 14,
                                }, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { style: thtd, children: "Za\u010D\u00E1tek" }), _jsx("th", { style: thtd, children: "Popis" }), _jsx("th", { style: thtd, children: "Adresa" }), _jsx("th", { style: { ...thtd, width: 1 } })] }) }), _jsxs("tbody", { children: [searchData.sichty.slice(0, 5).map((s) => (_jsxs("tr", { children: [_jsx("td", { style: thtd, children: formatDate(s.zacatek) }), _jsx("td", { style: thtd, children: s.popis || '—' }), _jsx("td", { style: thtd, children: s.adresa_text || '—' }), _jsx("td", { style: thtd, children: renderRowActions('sichta', s.id, { type: 'sichta', item: s }) })] }, `s-${s.id}`))), searchData.sichty.length === 0 && (_jsx("tr", { children: _jsx("td", { style: { ...thtd, color: 'var(--bs-secondary-color, #6b7280)' }, colSpan: 4, children: "Nic nenalezeno." }) }))] })] })] }), !anyResults && (_jsxs("div", { style: { ...cardStyle, padding: 16, color: 'var(--bs-secondary-color, #6b7280)' }, children: ["Nenalezeny \u017E\u00E1dn\u00E9 v\u00FDsledky pro \u201E", query, "\"."] }))] })), view !== 'summary' && (_jsxs("div", { style: { ...cardStyle, marginTop: 12 }, children: [_jsxs("div", { style: {
                            padding: 10,
                            borderBottom: '1px solid var(--bs-border-color-translucent, #f1f5f9)',
                            display: 'flex',
                            gap: 8,
                            alignItems: 'center',
                        }, children: [_jsx("button", { type: "button", style: btnStyle, onClick: () => setView('summary'), children: "\u27F5 Zp\u011Bt na souhrn" }), _jsx("strong", { children: view === 'companies'
                                    ? 'Firmy'
                                    : view === 'places'
                                        ? 'Místa'
                                        : view === 'zakazky'
                                            ? 'Zakázky'
                                            : 'Šichty' }), _jsxs("span", { style: { marginLeft: 'auto', ...badgeMuted }, children: ["dotaz: \u201E", query, "\""] })] }), view === 'companies' && (_jsxs("table", { style: {
                            width: '100%',
                            borderCollapse: 'separate',
                            borderSpacing: 0,
                            fontSize: 14,
                        }, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { style: { ...thtd, textAlign: 'left' }, children: "N\u00E1zev" }), _jsx("th", { style: thtd, children: "I\u010CO" }), _jsx("th", { style: thtd, children: "Adresa" }), _jsx("th", { style: { ...thtd, width: 1 } })] }) }), _jsxs("tbody", { children: [searchData.companies.map((c) => (_jsxs("tr", { children: [_jsx("td", { style: thtd, children: _jsx(Link, { to: linkBuilder('company', c.id), children: c.nazev }) }), _jsx("td", { style: thtd, children: c.ico || '—' }), _jsx("td", { style: thtd, children: c.ulice || c.obec || '' }), _jsx("td", { style: thtd, children: renderRowActions('company', c.id, { type: 'company', item: c }) })] }, `fc-${c.id}`))), searchData.companies.length === 0 && (_jsx("tr", { children: _jsx("td", { style: { ...thtd, color: 'var(--bs-secondary-color, #6b7280)' }, colSpan: 4, children: "Nic nenalezeno." }) }))] })] })), view === 'places' && (_jsxs("table", { style: {
                            width: '100%',
                            borderCollapse: 'separate',
                            borderSpacing: 0,
                            fontSize: 14,
                        }, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { style: { ...thtd, textAlign: 'left' }, children: "N\u00E1zev" }), _jsx("th", { style: thtd, children: "Adresa" }), _jsx("th", { style: thtd, children: "Z\u00E1kazn\u00EDk" }), _jsx("th", { style: { ...thtd, width: 1 } })] }) }), _jsxs("tbody", { children: [searchData.places.map((p) => (_jsxs("tr", { children: [_jsx("td", { style: thtd, children: _jsx(Link, { to: linkBuilder('place', p.id), children: p.nazev }) }), _jsx("td", { style: thtd, children: p.adresa_text || '' }), _jsx("td", { style: thtd, children: p.zakaznik_text || '' }), _jsx("td", { style: thtd, children: renderRowActions('place', p.id, { type: 'place', item: p }) })] }, `pl-${p.id}`))), searchData.places.length === 0 && (_jsx("tr", { children: _jsx("td", { style: { ...thtd, color: 'var(--bs-secondary-color, #6b7280)' }, colSpan: 4, children: "Nic nenalezeno." }) }))] })] })), view === 'zakazky' && (_jsxs("table", { style: {
                            width: '100%',
                            borderCollapse: 'separate',
                            borderSpacing: 0,
                            fontSize: 14,
                        }, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { style: thtd, children: "K\u00F3d" }), _jsx("th", { style: thtd, children: "N\u00E1zev" }), _jsx("th", { style: thtd, children: "Z\u00E1kazn\u00EDk" }), _jsx("th", { style: thtd, children: "Stav" }), _jsx("th", { style: { ...thtd, width: 1 } })] }) }), _jsxs("tbody", { children: [searchData.zakazky.map((o) => (_jsxs("tr", { children: [_jsx("td", { style: thtd, children: _jsx(Link, { to: linkBuilder('zakazka', o.id), children: o.cislo || o.id }) }), _jsx("td", { style: thtd, children: o.nazev || '—' }), _jsx("td", { style: thtd, children: o.zakaznik_text || '' }), _jsx("td", { style: thtd, children: formatZakazkaStav(o.stav) }), _jsx("td", { style: thtd, children: renderRowActions('zakazka', o.id, { type: 'zakazka', item: o }) })] }, `or-${o.id}`))), searchData.zakazky.length === 0 && (_jsx("tr", { children: _jsx("td", { style: { ...thtd, color: 'var(--bs-secondary-color, #6b7280)' }, colSpan: 5, children: "Nic nenalezeno." }) }))] })] })), view === 'sichty' && (_jsxs("table", { style: {
                            width: '100%',
                            borderCollapse: 'separate',
                            borderSpacing: 0,
                            fontSize: 14,
                        }, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { style: thtd, children: "Za\u010D\u00E1tek" }), _jsx("th", { style: thtd, children: "Popis" }), _jsx("th", { style: thtd, children: "Adresa" }), _jsx("th", { style: { ...thtd, width: 1 } })] }) }), _jsxs("tbody", { children: [searchData.sichty.map((s) => (_jsxs("tr", { children: [_jsx("td", { style: thtd, children: formatDate(s.zacatek) }), _jsx("td", { style: thtd, children: s.popis || '—' }), _jsx("td", { style: thtd, children: s.adresa_text || '—' }), _jsx("td", { style: thtd, children: renderRowActions('sichta', s.id, { type: 'sichta', item: s }) })] }, `sh-${s.id}`))), searchData.sichty.length === 0 && (_jsx("tr", { children: _jsx("td", { style: { ...thtd, color: 'var(--bs-secondary-color, #6b7280)' }, colSpan: 4, children: "Nic nenalezeno." }) }))] })] }))] }))] }));
}
