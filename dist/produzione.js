"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessoProduzione = void 0;
/*
 * Classe che rappresenta un processo di produzione sostenibile.
 * Implementa l'interfaccia IProcessoProduzione.
 */
class ProcessoProduzione {
    _nomeProcesso;
    _descrizione;
    _prodottiInProduzione;
    // Costruttore per creare un processo di produzione.
    constructor(nomeProcesso, descrizione, prodottiInProduzione = []) {
        this._nomeProcesso = nomeProcesso;
        this._descrizione = descrizione;
        this._prodottiInProduzione = prodottiInProduzione;
    }
    // Getter per leggere i dati privati
    get nomeProcesso() {
        return this._nomeProcesso;
    }
    get descrizione() {
        return this._descrizione;
    }
    get prodottiInProduzione() {
        return [...this._prodottiInProduzione];
    }
    // Aggiunge un prodotto al processo di produzione.
    aggiungiProdotto(prodotto) {
        if (this._prodottiInProduzione.some(p => p.id === prodotto.id)) {
            console.warn(`\n⚠️ Prodotto con ID ${prodotto.id} già presente nel processo.`);
            return;
        }
        this._prodottiInProduzione.push(prodotto);
        console.log(`\n✅ Prodotto ${prodotto.tipo} (ID: ${prodotto.id}) aggiunto al processo "${this.nomeProcesso}"`);
    }
}
exports.ProcessoProduzione = ProcessoProduzione;
