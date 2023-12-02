console.log('Hello, world!');

/* 
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Tools:
- NO strings
- NO arrays
- prompt
- function
- if
- for
*/

// definisce la costante della parola da analizzare
const user_word = prompt ('Type a word');

// funzione per controllare se la parola è palindroma
function CheckIfPalindrom(user_word){

    // trova la lunghezza della parola
    let len = user_word.length;

    // loop su metà della parola
    for (let i = 0; i < len / 2; i++) { 

        // controlla se il primo e l'ultimo carattere sono uguali, poi il secondo e il penultimo e via dicendo
        if (user_word[i] !== user_word[len - 1 - i]) {

            // se i caratteri confrontati sono diversi il risultato è falso (la parola non è palindroma)
            return false; 
        }
        // se i caratteri confrontati non sono diversi allora sono uguali, il risultato è vero (la parola è palindroma)
        return true;
   }
}
// stampa in console il risultato dell'analisi della parola
console.log(CheckIfPalindrom(user_word));


