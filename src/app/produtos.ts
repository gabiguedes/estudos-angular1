export interface Produto {
    id: string;
    preco: number;
    descricao: string;
}

export const produtos = [
    {
        id: 1,
        nome: 'Pro max',
        preco: 799,
        descricao: 'Um celular bom'
    },
    {
        id: 2,
        nome: 'Phone mini',
        preco: 699,
        descricao: 'Melhor ainda'
    },
    {
        id: 3,
        nome: 'Nokia',
        preco: 299,
        descricao: 'top'
    },
];