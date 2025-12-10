import React from 'react';
import { Link } from 'react-router-dom';
import type { SearchResponse } from '../index';

type GlobalSearchResultsProps = {
    searchData: SearchResponse;
    query: string;
    loading?: boolean;
    error?: string | null;
    linkBuilder: (entity: 'company' | 'place' | 'zakazka' | 'sichta', id: string | number) => string;
};

type ViewType = 'summary' | 'companies' | 'places' | 'zakazky' | 'sichty';

// Styles
const btnStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 12px',
    borderRadius: 12,
    border: '1px solid #e5e7eb',
    background: '#fff',
    cursor: 'pointer',
    boxShadow: '0 1px 2px rgba(0,0,0,.05)'
};

const cardStyle: React.CSSProperties = {
    border: '1px solid #e5e7eb',
    borderRadius: 0,
    overflow: 'hidden'
};

const thtd: React.CSSProperties = {
    padding: '10px 12px',
    borderTop: '1px solid #f1f5f9'
};

const sectionHeader: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '12px 0 6px'
};

const badgeMuted: React.CSSProperties = {
    fontSize: 12,
    color: '#64748b'
};

export function GlobalSearchResults({
    searchData,
    query,
    loading = false,
    error = null,
    linkBuilder,
}: GlobalSearchResultsProps) {
    const [view, setView] = React.useState<ViewType>('summary');

    const anyResults =
        searchData &&
        (searchData.companies.length +
            searchData.places.length +
            searchData.zakazky.length +
            searchData.sichty.length) > 0;

    function formatDate(iso?: string | null) {
        if (!iso) return '—';
        try {
            const d = new Date(iso);
            return new Intl.DateTimeFormat('cs-CZ', {
                dateStyle: 'medium',
                timeStyle: 'short'
            } as any).format(d);
        } catch {
            return iso as string;
        }
    }

    // Loading state
    if (loading) {
        return (
            <div style={{ ...cardStyle, padding: 12, opacity: 0.7 }}>
                Hledám…
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div
                style={{
                    border: '1px solid #fecaca',
                    background: '#fef2f2',
                    color: '#991b1b',
                    borderRadius: 12,
                    padding: 12
                }}
            >
                {error}
            </div>
        );
    }

    // No results
    if (!searchData) {
        return null;
    }

    return (
        <div>
            {/* View switcher */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                <button style={btnStyle} onClick={() => setView('summary')}>
                    Souhrn
                </button>
                <button style={btnStyle} onClick={() => setView('companies')}>
                    Firmy ({searchData.companies.length})
                </button>
                <button style={btnStyle} onClick={() => setView('places')}>
                    Místa ({searchData.places.length})
                </button>
                <button style={btnStyle} onClick={() => setView('zakazky')}>
                    Zakázky ({searchData.zakazky.length})
                </button>
                <button style={btnStyle} onClick={() => setView('sichty')}>
                    Šichty ({searchData.sichty.length})
                </button>
            </div>

            {/* Summary view: top 5 from each entity */}
            {view === 'summary' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
                    {/* Companies */}
                    <div style={cardStyle}>
                        <div style={{ ...sectionHeader, padding: '10px 12px' }}>
                            <strong>
                                Firmy <span style={badgeMuted}>({searchData.companies.length})</span>
                            </strong>
                            <button style={btnStyle} onClick={() => setView('companies')}>
                                Zobrazit vše
                            </button>
                        </div>
                        <table
                            style={{
                                width: '100%',
                                borderCollapse: 'separate',
                                borderSpacing: 0,
                                fontSize: 14
                            }}
                        >
                            <thead style={{ background: '#f8fafc', color: '#475569' }}>
                                <tr>
                                    <th style={{ ...thtd, textAlign: 'left' }}>Název</th>
                                    <th style={thtd}>IČO</th>
                                    <th style={thtd}>Adresa</th>
                                    <th style={{ ...thtd, width: 1 }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchData.companies.slice(0, 5).map((c) => (
                                    <tr key={`c-${c.id}`}>
                                        <td style={thtd}>
                                            <Link to={linkBuilder('company', c.id)}>{c.nazev}</Link>
                                        </td>
                                        <td style={thtd}>{c.ico || '—'}</td>
                                        <td style={thtd}>{c.ulice || c.obec || ''}</td>
                                        <td style={thtd}>
                                            <Link to={linkBuilder('company', c.id)} style={btnStyle}>
                                                Detail
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                {searchData.companies.length === 0 && (
                                    <tr>
                                        <td style={{ ...thtd, color: '#6b7280' }} colSpan={4}>
                                            Nic nenalezeno.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Places */}
                    <div style={cardStyle}>
                        <div style={{ ...sectionHeader, padding: '10px 12px' }}>
                            <strong>
                                Místa <span style={badgeMuted}>({searchData.places.length})</span>
                            </strong>
                            <button style={btnStyle} onClick={() => setView('places')}>
                                Zobrazit vše
                            </button>
                        </div>
                        <table
                            style={{
                                width: '100%',
                                borderCollapse: 'separate',
                                borderSpacing: 0,
                                fontSize: 14
                            }}
                        >
                            <thead style={{ background: '#f8fafc', color: '#475569' }}>
                                <tr>
                                    <th style={{ ...thtd, textAlign: 'left' }}>Název</th>
                                    <th style={thtd}>Adresa</th>
                                    <th style={thtd}>Zákazník</th>
                                    <th style={{ ...thtd, width: 1 }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchData.places.slice(0, 5).map((p) => (
                                    <tr key={`p-${p.id}`}>
                                        <td style={thtd}>
                                            <Link to={linkBuilder('place', p.id)}>{p.nazev}</Link>
                                        </td>
                                        <td style={thtd}>{p.adresa_text || ''}</td>
                                        <td style={thtd}>{(p as any).zakaznik_text || ''}</td>
                                        <td style={thtd}>
                                            <Link to={linkBuilder('place', p.id)} style={btnStyle}>
                                                Detail
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                {searchData.places.length === 0 && (
                                    <tr>
                                        <td style={{ ...thtd, color: '#6b7280' }} colSpan={4}>
                                            Nic nenalezeno.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Zakazky */}
                    <div style={cardStyle}>
                        <div style={{ ...sectionHeader, padding: '10px 12px' }}>
                            <strong>
                                Zakázky <span style={badgeMuted}>({searchData.zakazky.length})</span>
                            </strong>
                            <button style={btnStyle} onClick={() => setView('zakazky')}>
                                Zobrazit vše
                            </button>
                        </div>
                        <table
                            style={{
                                width: '100%',
                                borderCollapse: 'separate',
                                borderSpacing: 0,
                                fontSize: 14
                            }}
                        >
                            <thead style={{ background: '#f8fafc', color: '#475569' }}>
                                <tr>
                                    <th style={thtd}>Kód</th>
                                    <th style={thtd}>Název</th>
                                    <th style={thtd}>Zákazník</th>
                                    <th style={thtd}>Stav</th>
                                    <th style={{ ...thtd, width: 1 }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchData.zakazky.slice(0, 5).map((o) => (
                                    <tr key={`o-${o.id}`}>
                                        <td style={thtd}>
                                            <Link to={linkBuilder('zakazka', o.id)}>{o.cislo || o.id}</Link>
                                        </td>
                                        <td style={thtd}>{o.nazev || '—'}</td>
                                        <td style={thtd}>{o.zakaznik_text || ''}</td>
                                        <td style={thtd}>{(o as any).status || ''}</td>
                                        <td style={thtd}>
                                            <Link to={linkBuilder('zakazka', o.id)} style={btnStyle}>
                                                Detail
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                {searchData.zakazky.length === 0 && (
                                    <tr>
                                        <td style={{ ...thtd, color: '#6b7280' }} colSpan={5}>
                                            Nic nenalezeno.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Sichty */}
                    <div style={cardStyle}>
                        <div style={{ ...sectionHeader, padding: '10px 12px' }}>
                            <strong>
                                Šichty <span style={badgeMuted}>({searchData.sichty.length})</span>
                            </strong>
                            <button style={btnStyle} onClick={() => setView('sichty')}>
                                Zobrazit vše
                            </button>
                        </div>
                        <table
                            style={{
                                width: '100%',
                                borderCollapse: 'separate',
                                borderSpacing: 0,
                                fontSize: 14
                            }}
                        >
                            <thead style={{ background: '#f8fafc', color: '#475569' }}>
                                <tr>
                                    <th style={thtd}>Začátek</th>
                                    <th style={thtd}>Popis</th>
                                    <th style={thtd}>Adresa</th>
                                    <th style={{ ...thtd, width: 1 }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchData.sichty.slice(0, 5).map((s) => (
                                    <tr key={`s-${s.id}`}>
                                        <td style={thtd}>{formatDate(s.zacatek)}</td>
                                        <td style={thtd}>{s.popis || '—'}</td>
                                        <td style={thtd}>{s.adresa_text || '—'}</td>
                                        <td style={thtd}>
                                            <Link to={linkBuilder('sichta', s.id)} style={btnStyle}>
                                                Detail
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                {searchData.sichty.length === 0 && (
                                    <tr>
                                        <td style={{ ...thtd, color: '#6b7280' }} colSpan={4}>
                                            Nic nenalezeno.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {!anyResults && (
                        <div style={{ ...cardStyle, padding: 16, color: '#6b7280' }}>
                            Nenalezeny žádné výsledky pro „{query}".
                        </div>
                    )}
                </div>
            )}

            {/* Full tables by entity */}
            {view !== 'summary' && (
                <div style={{ ...cardStyle, marginTop: 12 }}>
                    <div
                        style={{
                            padding: 10,
                            borderBottom: '1px solid #f1f5f9',
                            display: 'flex',
                            gap: 8,
                            alignItems: 'center'
                        }}
                    >
                        <button style={btnStyle} onClick={() => setView('summary')}>
                            ⟵ Zpět na souhrn
                        </button>
                        <strong>
                            {view === 'companies'
                                ? 'Firmy'
                                : view === 'places'
                                    ? 'Místa'
                                    : view === 'zakazky'
                                        ? 'Zakázky'
                                        : 'Šichty'}
                        </strong>
                        <span style={{ marginLeft: 'auto', ...badgeMuted }}>dotaz: „{query}"</span>
                    </div>

                    {view === 'companies' && (
                        <table
                            style={{
                                width: '100%',
                                borderCollapse: 'separate',
                                borderSpacing: 0,
                                fontSize: 14
                            }}
                        >
                            <thead style={{ background: '#f8fafc', color: '#475569' }}>
                                <tr>
                                    <th style={{ ...thtd, textAlign: 'left' }}>Název</th>
                                    <th style={thtd}>IČO</th>
                                    <th style={thtd}>Adresa</th>
                                    <th style={{ ...thtd, width: 1 }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchData!.companies.map((c) => (
                                    <tr key={`fc-${c.id}`}>
                                        <td style={thtd}>
                                            <Link to={linkBuilder('company', c.id)}>{c.nazev}</Link>
                                        </td>
                                        <td style={thtd}>{c.ico || '—'}</td>
                                        <td style={thtd}>{c.ulice || c.obec || ''}</td>
                                        <td style={thtd}>
                                            <Link to={linkBuilder('company', c.id)} style={btnStyle}>
                                                Detail
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                {searchData!.companies.length === 0 && (
                                    <tr>
                                        <td style={{ ...thtd, color: '#6b7280' }} colSpan={4}>
                                            Nic nenalezeno.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}

                    {view === 'places' && (
                        <table
                            style={{
                                width: '100%',
                                borderCollapse: 'separate',
                                borderSpacing: 0,
                                fontSize: 14
                            }}
                        >
                            <thead style={{ background: '#f8fafc', color: '#475569' }}>
                                <tr>
                                    <th style={{ ...thtd, textAlign: 'left' }}>Název</th>
                                    <th style={thtd}>Adresa</th>
                                    <th style={thtd}>Zákazník</th>
                                    <th style={{ ...thtd, width: 1 }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchData!.places.map((p) => (
                                    <tr key={`pl-${p.id}`}>
                                        <td style={thtd}>
                                            <Link to={linkBuilder('place', p.id)}>{p.nazev}</Link>
                                        </td>
                                        <td style={thtd}>{p.adresa_text || ''}</td>
                                        <td style={thtd}>{(p as any).zakaznik_text || ''}</td>
                                        <td style={thtd}>
                                            <Link to={linkBuilder('place', p.id)} style={btnStyle}>
                                                Detail
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                {searchData!.places.length === 0 && (
                                    <tr>
                                        <td style={{ ...thtd, color: '#6b7280' }} colSpan={4}>
                                            Nic nenalezeno.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}

                    {view === 'zakazky' && (
                        <table
                            style={{
                                width: '100%',
                                borderCollapse: 'separate',
                                borderSpacing: 0,
                                fontSize: 14
                            }}
                        >
                            <thead style={{ background: '#f8fafc', color: '#475569' }}>
                                <tr>
                                    <th style={thtd}>Kód</th>
                                    <th style={thtd}>Název</th>
                                    <th style={thtd}>Zákazník</th>
                                    <th style={thtd}>Stav</th>
                                    <th style={{ ...thtd, width: 1 }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchData!.zakazky.map((o) => (
                                    <tr key={`or-${o.id}`}>
                                        <td style={thtd}>
                                            <Link to={linkBuilder('zakazka', o.id)}>{o.cislo || o.id}</Link>
                                        </td>
                                        <td style={thtd}>{o.nazev || '—'}</td>
                                        <td style={thtd}>{o.zakaznik_text || ''}</td>
                                        <td style={thtd}>{(o as any).status || ''}</td>
                                        <td style={thtd}>
                                            <Link to={linkBuilder('zakazka', o.id)} style={btnStyle}>
                                                Detail
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                {searchData!.zakazky.length === 0 && (
                                    <tr>
                                        <td style={{ ...thtd, color: '#6b7280' }} colSpan={5}>
                                            Nic nenalezeno.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}

                    {view === 'sichty' && (
                        <table
                            style={{
                                width: '100%',
                                borderCollapse: 'separate',
                                borderSpacing: 0,
                                fontSize: 14
                            }}
                        >
                            <thead style={{ background: '#f8fafc', color: '#475569' }}>
                                <tr>
                                    <th style={thtd}>Začátek</th>
                                    <th style={thtd}>Popis</th>
                                    <th style={thtd}>Adresa</th>
                                    <th style={{ ...thtd, width: 1 }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchData!.sichty.map((s) => (
                                    <tr key={`sh-${s.id}`}>
                                        <td style={thtd}>{formatDate(s.zacatek)}</td>
                                        <td style={thtd}>{s.popis || '—'}</td>
                                        <td style={thtd}>{s.adresa_text || '—'}</td>
                                        <td style={thtd}>
                                            <Link to={linkBuilder('sichta', s.id)} style={btnStyle}>
                                                Detail
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                {searchData!.sichty.length === 0 && (
                                    <tr>
                                        <td style={{ ...thtd, color: '#6b7280' }} colSpan={4}>
                                            Nic nenalezeno.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            )}
        </div>
    );
}
