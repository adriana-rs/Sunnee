# 🌞 Sunnee - Progetto di Beachwear Ecosostenibile

Sunnee è un progetto sviluppato in TypeScript che simula il ciclo di vita di un capo beachwear sostenibile, dalla produzione alla vendita.  
Nasce dalla volontà di sensibilizzare sull'inquinamento marino e sulla necessità di un consumo più consapevole, anche nel settore della moda.

## 🎯 Obiettivi del progetto

- Simulare il ciclo di vita di un prodotto realizzato con plastica riciclata (es. reti da pesca dismesse)
- Modellare ogni fase: produzione, assegnazione, ordine, tracciabilità
- Utilizzare TypeScript per strutturare il codice in modo chiaro e tipizzato
- Gestire casi limite realistici (es. prodotto esaurito, duplicazione in produzione)

---

## 🧠 Motivazioni delle scelte progettuali

- **TypeScript** per garantire un codice robusto e leggibile grazie alla tipizzazione statica
- **Interfacce** per rappresentare entità complesse e definire contratti chiari
- **Enum** per gestire attributi a valori fissi (tipo, taglia, stato)
- **Classi** per implementare le logiche di business con un approccio OOP
- Gestione dei **casi limite** per migliorare l’esperienza utente e la qualità del codice

---

## 🛠️ Tecnologie Utilizzate

- **TypeScript** – Linguaggio principale del progetto
- **Programmazione Orientata agli Oggetti (OOP)**
- **Node.js** – (facoltativo, se usato per eseguire TypeScript)
- **Git + GitHub** – Versionamento e repository

---

## 📁 Struttura del Progetto

├── app.ts → Logica esecutiva e demo del progetto ├── interface.ts → Interfacce e enum principali ├── prodotto.ts → Classe Prodotto (gestione articoli beachwear) ├── cliente.ts → Classe Cliente (gestione ordini) ├── produzione.ts → Classe ProcessoProduzione (gestione produzione) ├── tsconfig.json → Configurazione TypeScript (se presente) └── README.md → Documentazione del progetto

---

## ⚙️ Funzionalità

- Creazione di prodotti con attributi (tipo, taglia, colore, stato)
- Creazione di clienti
- Ordini validi solo se il prodotto è disponibile
- Assegnazione dei prodotti ai clienti con aggiornamento stato
- Inserimento dei prodotti nei processi produttivi
- Gestione dei duplicati nei processi (con messaggi di warning)

![Screenshot](./img/Screenshot%202025-04-23%20140354.png)

---

## 🧪 Demo: Casi gestiti in `app.ts`

- ✅ Creazione di 3 prodotti e 2 clienti
- ✅ Ordine eseguito da un cliente → prodotto esaurito
- ❌ Ordine di prodotto già esaurito → warning
- ✅ Inserimento di prodotti nel processo produttivo
- ❌ Tentativo di duplicazione nel processo → warning
- ✅ Stato aggiornato correttamente dopo l’ordine

![Screenshot](./img/Screenshot%202025-04-23%20140334.png)

---

## 🚀 Come eseguire il progetto

1. Assicurati di avere **Node.js** installato
2. Installa TypeScript globalmente (se non già presente):

```bash
npm install -g typescript
```

3. Compila il progetto

```bash
tsc
```

4. Esegui il file app.js generato:

```bash
node dist/app.js
```

Se preferisci, puoi usare anche ts-node per eseguire direttamente i file .ts.

---

## 🤝 Contributi

Questo è un progetto personale sviluppato a scopo didattico.
Chiunque voglia contribuire con miglioramenti, refactoring o estensioni è il benvenuto!

Per contribuire:

1. Fai un fork del repository
2. Crea un nuovo branch (git checkout -b feature/NomeFunzionalità)
3. Fai il commit delle modifiche (git commit -m 'Aggiunta funzionalità')
4. Fai push del branch (git push origin feature/NomeFunzionalità)
5. Apri una pull request

---

## Autore
Questo progetto è stato realizzato da [Adriana Russo](https://adriana-rs.github.io/)

Il progetto è stato deployato anche su [CodePen](https://codepen.io/adriana-rs/pen/MYYbEqp)

---

## Contatti 
[LinkedIn](https://www.linkedin.com/in/adriana-rs1805/)
[Facebook](https://www.facebook.com/Tony.Adry)
[Instagram](https://www.instagram.com/adrianars20/profilecard/?igsh=eW42cXphbTdseGRp)

---

Grazie per aver visitato il mio progetto! 😊

---

## About

Progetto realizzato come test finale del corso di TypeScript presso Start2Impact.
