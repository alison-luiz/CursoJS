/**
 * Aritiméticos
 * + Adição / Concatenação
 * - / * Subtração/Divisão/Multiplicação
 * -> ** Potenciação (Dois asteriscos)
 * % -> resto da divisão (EX: 10 / 3 = 33.333 - > resto = .333)
 */

const num1 = 2; // valor de number o sinal de + passa a somar/adição
const num2 = 10;
console.log(num1 + num2);
console.log(num1 ** num2);

const numUm = `5`; // Valor de string o sinal de + passa a concatenar
const numDois = `10`;
console.log(numUm + numDois);

let contador = 10;
contador++; // ++ é um operador de incremento
contador++;
console.log(contador);

contador--;
console.log(contador);

// PRÉ E POS -> INCREMENTO E DECREMENTO
// PODE TER O SINAL ANTES OU DEPOIS DA VARIAVEL

// NaN - Not a Number -> parseInt (Inteiros) parseFloat (decimal)
const number = 2;
const number1 = parseInt('5');
console.log(number + number1);