//  http://127.0.0.1:3000/live Coding/js-snacks-1/snack_3/index.html

const numeri = []; 
const somma = [];

// software deve chiedere per 10 volte di inserire un numero
for (let i = 0; i < 10; i++){
    numeri.push = Number(prompt('Scegli un numero')); 
        const numeriCounter = [i];
    if (i == 0){
        somma.unshift(i);
    } else if(i >= 1){
        somma.push(+ i);
        somma.push();
    } else {
        break
    }
}
console.log(somma)

// programma stampa la somma dei numeri inseriti
