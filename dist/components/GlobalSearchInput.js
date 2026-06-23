import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: 12,
    border: '1px solid #e5e7eb',
    outline: 'none',
    boxShadow: '0 1px 2px rgba(0,0,0,.03)',
    fontSize: 16
};
const cardStyle = {
    border: '1px solid #e5e7eb',
    borderRadius: 0,
    overflow: 'hidden'
};
const badgeMuted = {
    fontSize: 12,
    color: '#64748b'
};
export function GlobalSearchInput({ value, onChange, onSubmit, placeholder = 'Hledej firmu, místo, zakázku nebo šichtu (min. 2 znaky)…', minLength = 2, autoFocus = true, }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim().length >= minLength && onSubmit) {
            onSubmit(value.trim());
        }
    };
    return (_jsxs("div", { style: { ...cardStyle, padding: 12, marginBottom: 16 }, children: [_jsx("form", { onSubmit: handleSubmit, children: _jsx("input", { placeholder: placeholder, value: value, onChange: (e) => onChange(e.target.value), style: inputStyle, "aria-label": "Vyhled\u00E1v\u00E1n\u00ED", minLength: minLength, autoFocus: autoFocus, type: "search" }) }), _jsx("div", { style: { marginTop: 8, ...badgeMuted }, children: "M\u016F\u017Ee\u0161 ps\u00E1t n\u00E1zev, I\u010CO, adresu, k\u00F3d zak\u00E1zky, jm\u00E9no pracovn\u00EDka nebo \u010D\u00E1st textu pozn\u00E1mky." })] }));
}
