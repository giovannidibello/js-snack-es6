// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// creo un array di oggetti con le squadre di calcio

const squadre = [

    // aggiungo le proprietà compilando solo il nome
    {"nome": "Real Madrid", "puntiFatti": 0, "falliSubiti":0 },
    {"nome": "Barcellona", "puntiFatti": 0, "falliSubiti":0 },
    {"nome": "Atletico Madrid", "puntiFatti": 0, "falliSubiti":0 },
    {"nome": "Betis", "puntiFatti": 0, "falliSubiti":0 },
    {"nome": "Getafe", "puntiFatti": 0, "falliSubiti":0 },
    {"nome": "Siviglia", "puntiFatti": 0, "falliSubiti":0 },
    {"nome": "Villareal", "puntiFatti": 0, "falliSubiti":0 },
    {"nome": "Espanyol", "puntiFatti": 0, "falliSubiti":0 },
    {"nome": "Atletico Bilbao", "puntiFatti": 0, "falliSubiti":0 },
];

// visualizzo l'array delle squadre
console.table(squadre);

// creo una funzione che genera un numero random
function numeroRandom () {
    return Math.floor(Math.random() * 99) + 1;
}

// richiamo la funzione per riempire i valori dei punti fatti e falli subiti
for (let i = 0; i < squadre.length; i++){

    // assegno al valore iesimo di punti fatti un numero generato dalla funzione
    squadre[i].puntiFatti = numeroRandom();

    // assegno al valore iesimo di falli subiti un numero generato dalla funzione
    squadre[i].falliSubiti = numeroRandom();
}

// visualizzo l'array con i valori aggiornati
console.table(squadre);

// inserisco nel nuovo array nome e falli subiti delle squadre dal precedente solo 

const squadreFalliSubiti = squadre.map(function(squadraCorrente) {

    // ritorna solo queste proprietà
    return {
        nome: squadraCorrente.nome,
        falliSubiti: squadraCorrente.falliSubiti
    };
});

// stampo l'array in console
console.table(squadreFalliSubiti);
