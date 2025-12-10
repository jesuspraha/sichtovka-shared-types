import React from 'react';

type GlobalSearchInputProps = {
    value: string;
    onChange: (value: string) => void;
    onSubmit?: (value: string) => void;
    placeholder?: string;
    minLength?: number;
    autoFocus?: boolean;
};

const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: 12,
    border: '1px solid #e5e7eb',
    outline: 'none',
    boxShadow: '0 1px 2px rgba(0,0,0,.03)',
    fontSize: 16
};

const cardStyle: React.CSSProperties = {
    border: '1px solid #e5e7eb',
    borderRadius: 0,
    overflow: 'hidden'
};

const badgeMuted: React.CSSProperties = {
    fontSize: 12,
    color: '#64748b'
};

export function GlobalSearchInput({
    value,
    onChange,
    onSubmit,
    placeholder = 'Hledej firmu, místo, zakázku nebo šichtu (min. 2 znaky)…',
    minLength = 2,
    autoFocus = true,
}: GlobalSearchInputProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (value.trim().length >= minLength && onSubmit) {
            onSubmit(value.trim());
        }
    };

    return (
        <div style={{ ...cardStyle, padding: 12, marginBottom: 16 }}>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder={placeholder}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                    style={inputStyle}
                    aria-label="Vyhledávání"
                    minLength={minLength}
                    autoFocus={autoFocus}
                    type="search"
                />
            </form>
            <div style={{ marginTop: 8, ...badgeMuted }}>
                Můžeš psát název, IČO, adresu, kód zakázky, jméno pracovníka nebo část textu poznámky.
            </div>
        </div>
    );
}
