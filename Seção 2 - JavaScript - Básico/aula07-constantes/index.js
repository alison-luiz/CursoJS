// Diferente de let, constante deve ter um valor, nao podemos atribuir o valor em outro momento..

const nome = 'Alison';

console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;

// + - * / -> isso são os tipos de contas que é possivel fazer js

const resultado = primeiroNumero * segundoNumero;

const resultadoDuplicado = resultado * 2;

let resultadoTriplicado; // Declarando minha variavel let com valor undefined;

resultadoTriplicado = resultado * 3; // Aplicando um valor na variavel let usando a variavel const declarada anteriormente

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

// Valor entre aspas é uma string, valor fora de aspas é um number
// typeof pra indentificar o que é uma variavel
// Para saber o tipo de uma variavel com a junçao de outra, colocar novamente entre parenteses

console.log(typeof (primeiroNumero * segundoNumero)); // usar o comando typeof, consigo vizualizado o tipo da minha variavel..
console.log(typeof primeiroNumero);