// **Pari e Dispari** :dado_da_gioco:
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const oddEven = prompt("Scegli se pari o dispari");
const numberPlayer = parseInt(prompt("Scegli un numero da 1 a 5"));

const numberComputer = rdnNumber(1, 5);
console.log(numberComputer);

const sum = calcolaSomma(numberPlayer, numberComputer);

console.log(sum);

const sumIsEven = controllaSePari(sum);

if (oddEven === "pari" && sumIsEven === true) {
	console.log("l'utente ha vinto");
} else if (oddEven === "dispari" && sumIsEven === false) {
	console.log("l'utente ha vinto");
} else {
	console.log("il computer ha vinto");
}
