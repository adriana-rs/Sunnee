// Tipi di prodotto disponibili in plastica riciclata
export enum Tipo {
    Costume = 'costume da bagno',
    Pareo = 'pareo',
    Cappello = 'cappello'
}

// Taglie disponibili
export enum Taglia {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL'
 }

// Stato di disponibilità del prodotto
export enum StatoProdotto {
   Disponibile = 'DISPONIBILE',
   Esaurito = 'ESAURITO'
 }

// Interfaccia per rappresentare un prodotto di beachwear
export interface IProdotto {
    tipo: Tipo;
    id: number;
    taglia: Taglia;
    colore: string;
    stato: StatoProdotto;

    assegnaCliente(cliente: ICliente): void;
}

// Interfaccia per rappresentare un cliente del brand
export interface ICliente {
    nome: string;
    cognome: string;
    email: string;
    metodoDiPagamento: string;
    
    ordinaProdotto(prodotto: IProdotto): void;
 }

 // Interfaccia per i processi produttivi sostenibili
export interface IProcessoProduzione {
    nomeProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];
 
    aggiungiProdotto(prodotto: IProdotto): void;
 }