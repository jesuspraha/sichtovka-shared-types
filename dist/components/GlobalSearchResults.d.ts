import type { SearchResponse } from '../index';
export type NewSichtaSearchContext = {
    type: 'company';
    item: SearchResponse['companies'][number];
} | {
    type: 'place';
    item: SearchResponse['places'][number];
} | {
    type: 'zakazka';
    item: SearchResponse['zakazky'][number];
} | {
    type: 'sichta';
    item: SearchResponse['sichty'][number];
};
type GlobalSearchResultsProps = {
    searchData: SearchResponse;
    query: string;
    loading?: boolean;
    error?: string | null;
    linkBuilder: (entity: 'company' | 'place' | 'zakazka' | 'sichta', id: string | number) => string;
    newSichtaHref?: (ctx: NewSichtaSearchContext) => string;
};
export declare function GlobalSearchResults({ searchData, query, loading, error, linkBuilder, newSichtaHref, }: GlobalSearchResultsProps): import("react/jsx-runtime").JSX.Element | null;
export {};
