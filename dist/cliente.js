"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const interface_1 = require("./interface");
/*
 * Classe che rappresenta un cliente del brand di beachwear sostenibile.
 * Implementa l'interfaccia ICliente.
 */
class Cliente {
    _nome;
    _cognome;
    _email;
    _metodoDiPagamento;
    // Costruttore per inizializzare un cliente.
    constructor(nome, cognome, email, metodoDiPagamento) {
        this._nome = nome;
        this._cognome = cognome;
        this._email = email;
        this._metodoDiPagamento = metodoDiPagamento;
    }
    // Getter per leggere le proprietà private
    get nome() {
        return this._nome;
    }
    get cognome() {
        return this._cognome;
    }
    get email() {
        return this._email;
    }
    get metodoDiPagamento() {
        return this._metodoDiPagamento;
    }
    // Permette al cliente di ordinare un prodotto
    ordinaProdotto(prodotto) {
        if (prodotto.stato === interface_1.StatoProdotto.Disponibile) {
            prodotto.assegnaCliente(this);
            console.log(`\n✅ Prodotto con ID: ${prodotto.id} ordinato con successo!`);
        }
        else {
            console.warn(`\n⚠️ Il prodotto con ID: ${prodotto.id} non è più disponibile`);
        }
    }
}
exports.Cliente = Cliente;
