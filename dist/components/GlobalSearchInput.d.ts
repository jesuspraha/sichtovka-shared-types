type GlobalSearchInputProps = {
    value: string;
    onChange: (value: string) => void;
    onSubmit?: (value: string) => void;
    placeholder?: string;
    minLength?: number;
    autoFocus?: boolean;
};
export declare function GlobalSearchInput({ value, onChange, onSubmit, placeholder, minLength, autoFocus, }: GlobalSearchInputProps): import("react/jsx-runtime").JSX.Element;
export {};
