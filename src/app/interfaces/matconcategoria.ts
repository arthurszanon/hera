export interface matconcategoria{
    list(): unknown;
    label: string;
    items:  Array<matconcategoria>;
}
