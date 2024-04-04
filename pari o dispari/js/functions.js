function rdnNumber(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function calcolaSomma(num1, num2) {
	return num1 + num2;
}

function controllaSePari(numero) {
	if (numero % 2 == 0) {
		return true;
	}else {
		return false;
	}
}
