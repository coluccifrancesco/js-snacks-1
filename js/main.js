//  Utente inserisce due numeri in successione
const valueOne = Number(prompt("Inserisci un valore"));
const valueTwo = Number(prompt("Inserisci un altro valore"));

//  software stampa il maggiore
if (valueOne > valueTwo){
    console.log(valueOne);
} else if (valueOne == valueTwo){
    console.log(valueOne + ' = ' + valueTwo);
} else {
    console.log(valueTwo);
}