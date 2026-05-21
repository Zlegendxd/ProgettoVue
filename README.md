# ProgettoVue

1. Introduzione
Il progetto consiste nello sviluppo di una SPA utilizzando il framework Vue.js. L’applicazione realizzata è una libreria digitale interattiva che permette di esplorare, cercare e visualizzare libri tramite l’integrazione con una API REST pubblica (Open Library API). 
2. Scelte Tecnologiche
Per la realizzazione del progetto sono state utilizzate le seguenti tecnologie:
Vue.js come framework principale
Vite come build tool per garantire velocità di sviluppo e ottimizzazione del progetto
Tailwind CSS
Open Library API come fonte dati per la ricerca e visualizzazione dei libri
LocalStorage per la gestione e la persistenza dei libri preferiti
3. Architettura del Progetto
L’applicazione è stata strutturata secondo questa modalità:
App.vue: componente principale che contiene l’intera applicazione
HomeView.vue: gestione della ricerca, visualizzazione dei libri e logica principale
LibraryShelf.vue: componente responsabile della griglia di visualizzazione dei libri
BookItem.vue: componente dedicato alla singola card del libro con animazioni e gestione dei preferiti
BookModal.vue: finestra modale per la visualizzazione dei dettagli del libro
openLibrary.js: servizio dedicato alle chiamate API REST
router/index.js: gestione della navigazione tra le pagine della SPA
4. Funzionalità Implementate
Ricerca di libri tramite API Open Library
Visualizzazione di libri casuali all’avvio dell’applicazione
Sistema di gestione dei “preferiti” con salvataggio tramite LocalStorage
Visualizzazione dettagli del libro tramite finestra modale
Interfaccia responsive
5. Ostacoli e Soluzioni
Durante lo sviluppo del progetto sono stati affrontati diversi problemi:
5.1 Problema deploy su Altervista (pagina bianca)
Dopo la pubblicazione del progetto su Altervista, l’applicazione risultava completamente bianca. Il problema era causato da una configurazione non corretta del build tool e del router.
Soluzioni adottate:
aggiunta della configurazione base: './' nel file Vite
sostituzione di createWebHistory con createWebHashHistory nel Vue Router
ricompilazione del progetto tramite npm run build e nuovo deploy
5.2 Problema sistema preferiti 
il sistema dei preferiti non funzionava correttamente.
Soluzioni adottate:
utilizzo del LocalStorage per salvare i dati in modo permanente
gestione dello stato dei preferiti all’interno della HomeView
5.3 Problema pulsante preferiti e interfaccia grafica
Il pulsante dei preferiti e alcune animazioni dell’interfaccia non erano inizialmente correttamente integrati nel sistema delle card.
Soluzioni adottate:
inserimento del pulsante direttamente all’interno del componente BookItem.
