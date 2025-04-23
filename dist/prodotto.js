"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prodotto = void 0;
const interface_1 = require("./interface");
/*
 * Classe che rappresenta un prodotto di beachwear in plastica riciclata.
 * Implementa l'interfaccia IProdotto.
 */
class Prodotto {
    _tipo;
    _id;
    _taglia;
    _colore;
    _stato;
    _cliente;
    // Costruttore per creare un nuovo prodotto.
    constructor(tipo, id, taglia, colore, stato) {
        this._tipo = tipo;
        this._id = id;
        this._taglia = taglia;
        this._colore = colore;
        this._stato = stato;
    }
    // Getter per leggere le proprietà private
    get tipo() {
        return this._tipo;
    }
    get id() {
        return this._id;
    }
    get taglia() {
        return this._taglia;
    }
    get colore() {
        return this._colore;
    }
    get stato() {
        return this._stato;
    }
    get cliente() {
        return this._cliente;
    }
    // Setter per modificare lo stato del prodotto
    set stato(nuovoStato) {
        this._stato = nuovoStato;
    }
    // Assegna un prodotto specifico ad un cliente
    assegnaCliente(cliente) {
        if (!this._cliente) {
            this._cliente = cliente;
            this._stato = interface_1.StatoProdotto.Esaurito;
            console.log(`\n✅ Prodotto ${this._id} assegnato al cliente ${this._cliente.nome} ${this._cliente.cognome}.`);
        }
        else {
            console.warn(`\n⚠️ Il prodotto ${this._id} è già assegnato al cliente ${this._cliente.nome} ${this._cliente.cognome}.`);
        }
    }
}
exports.Prodotto = Prodotto;
