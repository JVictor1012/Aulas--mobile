export enum TipoDespesa {
    ALIMENTACAO = 'Alimentação',
    LAZER = 'Lazer',
    MERCADO = 'Mercado',
    CONTAS = 'Contas',
    PETS = 'Pets',
    TRANSPORTE = 'Transporte',
    JARDIM = 'Jardim',
    OUTROS = 'Outros'
    
}


export class Despesa{
    motivo: string;
    tipo : string;
    valor: number;
    data: string;


    constructor(){
        this.motivo = '';
        this.valor = 0;
        this.tipo = TipoDespesa.OUTROS;
        this.data = new Date().toISOString();

    }
}