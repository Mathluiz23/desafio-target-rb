function verificarLetraA(str) {
	let contador = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === "a" || str[i] === "A") {
			contador++;
		}
	}

	if (contador > 0) {
		console.log(`A letra 'a' aparece ${contador} vez(es) na string.`);
	} else {
		console.log("A letra 'a' não aparece na string.");
	}
}

const stringParaVerificar = "Desafio Target!";
verificarLetraA(stringParaVerificar);
