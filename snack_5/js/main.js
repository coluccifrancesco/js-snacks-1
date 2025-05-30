//  http://127.0.0.1:3000/live Coding/js-snacks-1/snack_5/index.html

// N numero è indicato dall'utente
let nChoice = Number(prompt('Inserisci un numero'))

for (let i = 1; i < 6; i++){
    let numberTimes = ((nChoice * nChoice) * i);
    console.log(numberTimes)
}

// stampa il cubo dei primi N numeri 