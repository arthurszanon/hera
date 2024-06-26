import {Imagem} from './Imagem';

export interface produtos{
    id: string;
    descricao: string;
    descricaoSite: string;
    unidade: string;
    peso: string;
    valorCapital: number;
    valorCapitalPromocao: number;
    valorInterior: number;
    valorInteriorPromocao: number;
    categoria: string;
    subCategoria: string;
    imagens: string[];
    tags: string[];
}
