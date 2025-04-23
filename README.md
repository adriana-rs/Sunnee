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

## ⚙️ Funzionalità

- Creazione di prodotti con attributi (tipo, taglia, colore, stato)
- Creazione di clienti
- Ordini validi solo se il prodotto è disponibile
- Assegnazione dei prodotti ai clienti con aggiornamento stato
- Inserimento dei prodotti nei processi produttivi
- Gestione dei duplicati nei processi (con messaggi di warning)

## 🧪 Demo: Casi gestiti in `app.ts`

- ✅ Creazione di 3 prodotti e 2 clienti
- ✅ Ordine eseguito da un cliente → prodotto esaurito
- ❌ Ordine di prodotto già esaurito → warning
- ✅ Inserimento di prodotti nel processo produttivo
- ❌ Tentativo di duplicazione nel processo → warning
- ✅ Stato aggiornato correttamente dopo l’ordine

---

## 🚀 Come eseguire il progetto

1. Assicurati di avere **Node.js** installato
2. Installa TypeScript globalmente (se non già presente):

```bash
npm install -g typescript

3. Compila il progetto

tsc

4. Esegui il file app.js generato:

node dist/app.js

---

Se preferisci, puoi usare anche ts-node per eseguire direttamente i file .ts.

## 🤝 Contributi

Questo è un progetto personale sviluppato a scopo didattico.
Chiunque voglia contribuire con miglioramenti, refactoring o estensioni è il benvenuto!

Per contribuire:

Fai un fork del repository

Crea un nuovo branch (git checkout -b feature/NomeFunzionalità)

Fai il commit delle modifiche (git commit -m 'Aggiunta funzionalità')

Fai push del branch (git push origin feature/NomeFunzionalità)

Apri una pull request

