import { ICliente, IProdotto, StatoProdotto} from './interface';

/*
 * Classe che rappresenta un cliente del brand di beachwear sostenibile.
 * Implementa l'interfaccia ICliente.
 */
export class Cliente implements ICliente{
    private _nome: string;
    private _cognome: string;
    private _email: string;
    private _metodoDiPagamento: string;

    // Costruttore per inizializzare un cliente.
    constructor(
        nome: string, 
        cognome: string, 
        email: string, 
        metodoDiPagamento: string
    ) {
        this._nome = nome;
        this._cognome = cognome;
        this._email = email;
        this._metodoDiPagamento = metodoDiPagamento;
    }

    // Getter per leggere le proprietà private
    public get nome(): string {
        return this._nome;
    }

    public get cognome(): string {
        return this._cognome;
    }

    public get email(): string {
        return this._email;
    }

    public get metodoDiPagamento(): string {
        return this._metodoDiPagamento;
    }


    // Permette al cliente di ordinare un prodotto
    public ordinaProdotto(prodotto: IProdotto): void {
      if(prodotto.stato === StatoProdotto.Disponibile) {
       prodotto.assegnaCliente(this);
       console.log(`\n✅ Prodotto con ID: ${prodotto.id} ordinato con successo!`)
      } else {
        console.warn(`\n⚠️ Il prodotto con ID: ${prodotto.id} non è più disponibile`)
      }
    }
}
    
    