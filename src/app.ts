import { Prodotto } from "./prodotto";
import { Tipo, Taglia, StatoProdotto } from "./interface";
import { Cliente } from "./cliente";
import { ProcessoProduzione } from "./produzione";


// creo diversi articoli di beachwear prodotti con plastica riciclata.
const prodotto1 = new Prodotto(
  Tipo.Costume, 
  101, 
  Taglia.M, 
  'Nero',
  StatoProdotto.Disponibile
);

const prodotto2 = new Prodotto(
  Tipo.Cappello,
  102,
  Taglia.S,
  'Blu',
  StatoProdotto.Disponibile
)

const prodotto3 = new Prodotto(
  Tipo.Pareo,
  103,
  Taglia.L,
  'Rosso',
  StatoProdotto.Disponibile
)

console.log('Prodotto istanziato', prodotto1);
console.log('Prodotto istanziato', prodotto2);
console.log('Prodotto istanziato', prodotto3);

// creo i clienti del brand
const cliente1 = new Cliente(
  'Mario',
  'Rossi',
  'mario.rossi@example.com',
  'PayPal'
)

const cliente2 = new Cliente(
  'Anna',
  'Verdi',
  'anna.verdi@example.com',
  'Carta di Credito'
)

console.log('Cliente istanziato', cliente1);
console.log('Cliente istanziato', cliente2);

// Creo un processo di produzione
const processoPrincipale = new ProcessoProduzione(
  'Cucitura e Assemblaggio',
  'Processo principale per costumi e parei.'
);

console.log("\nProcesso di Produzione istanziato:", processoPrincipale);

processoPrincipale.aggiungiProdotto(prodotto1);
processoPrincipale.aggiungiProdotto(prodotto2);
processoPrincipale.aggiungiProdotto(prodotto3);
processoPrincipale.aggiungiProdotto(prodotto1); // provo ad inserire due volte lo stesso articolo

// Mostro la lista di prodotti aggiunti al processo di produzione
console.log("\nProdotti aggiunti al processo di produzione: ", processoPrincipale.prodottiInProduzione);

// simulo l'ordine di un prodotto da parte di un cliente
cliente1.ordinaProdotto(prodotto1);
cliente2.ordinaProdotto(prodotto2);

console.log("\nStato del prodotto1 dopo l'ordine: ", prodotto1.stato);
console.log("\nStato del prodotto1 dopo l'ordine: ", prodotto2.stato);

// simulo l'ordine dello stesso prodotto da parte di due clienti diversi
cliente2.ordinaProdotto(prodotto1);
console.log("\nStato del prodotto: ", prodotto1.stato);