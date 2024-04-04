/**
 * Description: Ritorna true se la parola é palindoma, altrimenti ritorna false
 * @param {string} parola
 * @returns {boolean}
 */
function controllaSePalindromo(parola) {
	const parolaSplittata = parola.split("");
	console.log(parolaSplittata);

	parolaSplittata.reverse();
	console.log(parolaSplittata);

	let palindroma = parolaSplittata.join("");
	console.log(palindroma);

	let result = false;
	if (parola === palindroma){
		result = true;
	}

	return result;
}

//creare una condizione dicendogli che se la parola è palindroma allorala il risutato è true alrtrimenti il risultato è false
//se parola è uguale a parola al contrario allora il risultato è true
//salvarsi dentro una nuova variabile la parola al contrario
//dove devo salvarmi il true o false? -> in una nuova variabile che chiameremo risultato

//il .reverse() so puó usare solo sugli array, non sulle stringhe.
// io ho una stringa. quindi devo trasformarla in array -> "anna" -> ["a", "n", "n", "a"]

//per ricavare la parola al contrario:
// 	1. suddividere la parola originale carattere per carattere e mettare tutti questi caratteri in un array
//		2. invertire l'ordine dei carattari presenti nell'array
//		3. trasformare l'array (che adesso ha il caratteri tutti invertiti) dinuovo in una stringa
//    4. ed ecco che abbiamo la nostra parola al contrario