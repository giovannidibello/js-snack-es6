// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

// creo un array con dei numeri
const arrayNumeri = [23, 45, 67, 12, 89, 34, 56, 78, 90, 11, 43, 22, 74, 18, 39, 65, 27, 88, 54, 32];

console.log(arrayNumeri);

// creo una funzione con tre argomenti, un array e due numeri (a più piccolo di b)
function numeriTraMinMax (array, min, max){
    
    // inizializzo l'array
    const nuovoArray = [];

    // ciclo sull'intera lunghezza dell'array
    for (let i=0; i < array.length; i++) {

        // seleziono il numero corrente
        const numeroCorrente = array[i];

        // cerco i numeri compresi tra a e b nell'array fornito
        if (numeroCorrente >= min && numeroCorrente <= max) {
            // metto i numeri compresi in un nuovo array
            nuovoArray.push(numeroCorrente);
        }

    }

    return nuovoArray;    

}

// definisco dei min e max come esempio
let numeroMin = 13;
let numeroMax = 67;

// log dei numeri scelti
console.log(`Minimo:  ${numeroMin}  Massimo:  ${numeroMax}`);  

// invoco la funzione
const numerCompresi = numeriTraMinMax(arrayNumeri, numeroMin, numeroMax)

// stampo l'output
console.log(numerCompresi);





