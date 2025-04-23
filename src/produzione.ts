import { IProcessoProduzione, IProdotto, StatoProdotto } from './interface';

/*
 * Classe che rappresenta un processo di produzione sostenibile.
 * Implementa l'interfaccia IProcessoProduzione.
 */
export class ProcessoProduzione implements IProcessoProduzione {
    private _nomeProcesso: string;
    private _descrizione: string;
    private _prodottiInProduzione: IProdotto[];

    // Costruttore per creare un processo di produzione.
    constructor(
        nomeProcesso: string, 
        descrizione: string, 
        prodottiInProduzione: IProdotto[] = []
    ) {
        this._nomeProcesso = nomeProcesso;
        this._descrizione = descrizione;
        this._prodottiInProduzione = prodottiInProduzione;
    }

    // Getter per leggere i dati privati
    public get nomeProcesso(): string {
        return this._nomeProcesso;
    }

    public get descrizione(): string {
        return this._descrizione;
    }

    public get prodottiInProduzione(): IProdotto[] {
        return [...this._prodottiInProduzione];
    }

    // Aggiunge un prodotto al processo di produzione.
    public aggiungiProdotto(prodotto: IProdotto): void {
        if (this._prodottiInProduzione.some(p => p.id === prodotto.id)) {
            console.warn(`\n⚠️ Prodotto con ID ${prodotto.id} già presente nel processo.`);
            return;
        }
        this._prodottiInProduzione.push(prodotto);
        console.log(`\n✅ Prodotto ${prodotto.tipo} (ID: ${prodotto.id}) aggiunto al processo "${this.nomeProcesso}"`);
    }
}
