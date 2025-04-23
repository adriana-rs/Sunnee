import { IProdotto, ICliente, StatoProdotto, Tipo, Taglia } from './interface';

/*
 * Classe che rappresenta un prodotto di beachwear in plastica riciclata.
 * Implementa l'interfaccia IProdotto.
 */
export class Prodotto implements IProdotto{
   private _tipo: Tipo;
   private _id: number;
   private _taglia: Taglia;
   private _colore: string;
   private _stato: StatoProdotto;
   private _cliente?: ICliente;

   // Costruttore per creare un nuovo prodotto.
   constructor(
      tipo: Tipo, 
      id: number, 
      taglia: Taglia, 
      colore: string, 
      stato: StatoProdotto
   ) {
      this._tipo = tipo;
      this._id = id;
      this._taglia = taglia;
      this._colore = colore;
      this._stato = stato;
   }

    // Getter per leggere le proprietà private
   public get tipo(): Tipo {
      return this._tipo;
   }   

   public get id(): number {
      return this._id;
   }

   public get taglia(): Taglia {
      return this._taglia;
   }

   public get colore(): string {
      return this._colore;
   }

   public get stato(): StatoProdotto {
      return this._stato;
   }

   public get cliente(): ICliente | undefined {
      return this._cliente;
   }

   // Setter per modificare lo stato del prodotto
   public set stato(nuovoStato: StatoProdotto) {
      this._stato = nuovoStato;
   }

   // Assegna un prodotto specifico ad un cliente
   public assegnaCliente(cliente: ICliente): void {
     if(!this._cliente) {
    this._cliente = cliente;
    this._stato = StatoProdotto.Esaurito;
    console.log(`\n✅ Prodotto ${this._id} assegnato al cliente ${this._cliente.nome} ${this._cliente.cognome}.`);
     } else {
      console.warn(`\n⚠️ Il prodotto ${this._id} è già assegnato al cliente ${this._cliente.nome} ${this._cliente.cognome}.`);
     }
   }
}





