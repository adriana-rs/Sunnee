"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatoProdotto = exports.Taglia = exports.Tipo = void 0;
// Tipi di prodotto disponibili in plastica riciclata
var Tipo;
(function (Tipo) {
    Tipo["Costume"] = "costume da bagno";
    Tipo["Pareo"] = "pareo";
    Tipo["Cappello"] = "cappello";
})(Tipo || (exports.Tipo = Tipo = {}));
// Taglie disponibili
var Taglia;
(function (Taglia) {
    Taglia["S"] = "S";
    Taglia["M"] = "M";
    Taglia["L"] = "L";
    Taglia["XL"] = "XL";
})(Taglia || (exports.Taglia = Taglia = {}));
// Stato di disponibilità del prodotto
var StatoProdotto;
(function (StatoProdotto) {
    StatoProdotto["Disponibile"] = "DISPONIBILE";
    StatoProdotto["Esaurito"] = "ESAURITO";
})(StatoProdotto || (exports.StatoProdotto = StatoProdotto = {}));
