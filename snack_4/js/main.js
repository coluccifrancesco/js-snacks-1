//  http://127.0.0.1:3000/live Coding/js-snacks-1/snack_4/index.html

//  array vuoto
let oddNumbers = [];

//  chiedi 6 volte un numero
for (let i = 0; i < 6; i++){
    let numbers = Number(prompt('Inserisci un numero cortesemente che magari sto script torna'));    
    if (numbers % 2 != 0){
        oddNumbers.push(numbers);
    }
}

console.log(oddNumbers)
//  se numero dispari inserisci nell'array