// Reduce

// Indices       0  1  2  3  4  5  6  7  .....
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0);

console.log(total);


// Retornar a pessoa com mais idade utilizando reduce
const pessoas = [
    { nome: 'Alison', idade: 24},
    { nome: 'Jhenny', idade: 25},
    { nome: 'Maria', idade: 56},
    { nome: 'Jose', idade: 69}
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);