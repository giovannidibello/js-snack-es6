// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

// creo un array con delle stringhe
const arrayStringhe = ["cane", "gatto", "topo", "lucertola", "mucca", "grillo"]

console.log(arrayStringhe);

// creo una funzione con tre argomenti, un array e due numeri (a più piccolo di b)
function posizioneTraMinMax(array, min, max) {

    // inizializzo l'array
    const nuovoArray = [];

    // ciclo sull'intera lunghezza dell'array
    for (let i = min; i <= max; i++) {

        // seleziono la posizione corrente
        const posizioneCorrente = array[i];

        // metto i valori delle posizioni nel nuovo array
        nuovoArray.push(posizioneCorrente);


    }

    return nuovoArray;

}

// definisco dei min e max come esempio
let numeroMin = 1;
let numeroMax = 4;

// log dei numeri scelti
console.log(`Minimo:  ${numeroMin}  Massimo:  ${numeroMax}`);

// invoco la funzione
const posizioneComprese = posizioneTraMinMax(arrayStringhe, numeroMin, numeroMax)

// stampo l'output
console.log(posizioneComprese);





