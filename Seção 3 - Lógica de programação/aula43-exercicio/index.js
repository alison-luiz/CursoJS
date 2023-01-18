// Função que receba um número e retorne:
// - Número é divisivel por 3 = Fizz
// - Número é divisivel por 5 = Buzz
// - Número é divisivel por 3 e 5 = FizzBuzz
// Não é divisível por 3 ee 5 retorne o proprio numero
// Checar se o numero é realmente um número
// Use a função com números de 0 a 100

function fizzBuzz(numero) {
    if (typeof(numero) !=='number') {
        return numero;
    } else if (numero < 0 || numero > 100) return `Numero fora do intervalo de 0 a 100`
    if (numero % 3 === 0 && numero % 5 === 0) return `FizzBuzz`;
    if (numero % 3 === 0) return `Fizz`;
    if (numero % 5 === 0) return `Buzz`;
    return numero;
}

for (let i = -10; i <= 110; i++) {
    console.log(i, fizzBuzz(i));
}