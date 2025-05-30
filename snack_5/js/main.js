//  http://127.0.0.1:3000/live Coding/js-snacks-1/snack_5/index.html

// N numero è indicato dall'utente
let nChoice = Number(prompt('Inserisci un numero'))

// stampa il cubo dei primi N numeri 
for (let i = 1; i < 6; i++){
    let numberTimes = (nChoice * nChoice);
    let result = (numberTimes * nChoice)
    console.log(result);
}

console.log(' ');

// stampa potenze di 2 fino a 100
let numberTwo = 2;
squareResult = null; 

for(let i = 1; i < 1001; i++){
    let square = (numberTwo * numberTwo);
    let squareResult = (square * numberTwo);
    console.log(squareResult);
}