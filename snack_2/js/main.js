//  http://127.0.0.1:3000/live Coding/js-snacks-1/snack_2/index.html

//  due prompt testuali
const parolaUno = prompt("Inserisci una parola");
const parolaDue = prompt("Inserisci un'altra parola");

//  software stampa prima la parola più corta poi più lunga
if (parolaUno.length > parolaDue.length){
    console.log(parolaDue + ' è più corta di ' + parolaUno)
} else if (parolaUno.length < parolaDue.length){
    console.log(parolaUno + '  è più corta di ' + parolaDue)
} else {
    console.log(parolaUno + ' è lunga come ' + parolaDue)
}