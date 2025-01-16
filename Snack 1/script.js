// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

// creo un array di oggetti con le bici

const bici = [

    // imposto le proprietà delle bici
    { "nome": "Bianchi", "peso": 7.0 },
    { "nome": "Look", "peso": 7.5 },
    { "nome": "Willier Triestina", "peso": 7.6 },
    { "nome": "Pinarello", "peso": 8.0 },
    { "nome": "Colnago", "peso": 7.9 },
    { "nome": "Cervelo S5", "peso": 7.8 },
    { "nome": "Canyon", "peso": 7.1 },
    { "nome": "Merida Reacto Team", "peso": 7.9 }
];

// stampo l'array in console
console.table(bici);

// inizializzo la variabile con il primo elemento dell'array
let biciLeggera = bici[0];

// ciclo l'array di oggetti
for (let i=1; i < bici.length; i++){

    // confronto la proprietà peso
    if (bici[i].peso < biciLeggera.peso){

        // aggiorno il peso 
        biciLeggera = bici[i];
    }
}

//  restituisco quella con il peso minore
console.log("La bici più leggera è:", biciLeggera.nome, "con un peso di", biciLeggera.peso, "kg");


