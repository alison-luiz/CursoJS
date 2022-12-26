/**
 * Aritiméticos
 * + Adição / Concatenação (Junção das strings)
 * - / * Subtração/Divisão/Multiplicação
 * -> ** Potenciação (Dois asteriscos)
 * % -> resto da divisão (EX: 10 / 3 = 33.333 - > resto = .333)
 */

const restoDiv = 5 % 3 // 5/3 = 1,66

console.log(restoDiv);

const num1 = 2; // valor de number o sinal de + passa a somar/adição
const num2 = 10;
console.log(num1 + num2, `= Soma do num1 + num2`);
console.log(num1 ** num2, `= 2 ** elevado a 10° potencia`);

const numUm = `5`; // Valor de string o sinal de + passa a concatenar
const numDois = `10`;
console.log(numUm + numDois, `= Junção das strings numUm + numDois`);

let contador = 10;
contador++; // ++ é um operador de incremento
contador++;
console.log(contador, `= ++ operador de incremento - tenho contador iniciando em 10 - mais dois incrementos ++ no código`);

contador--;
console.log(contador, `= mesma coisa do operador ++ - porem faz o inverso`);

// PRÉ E POS -> INCREMENTO E DECREMENTO
// PODE TER O SINAL ANTES OU DEPOIS DA VARIAVEL
// NaN - Not a Number -> parseInt (Inteiros) parseFloat (decimal)

const number = 2;
const number1 = parseInt('5'); // parseInt - pega a parte inteira da string
console.log(typeof(number1), `= tipo da parte inteira com parseInt`);
console.log(number + number1);