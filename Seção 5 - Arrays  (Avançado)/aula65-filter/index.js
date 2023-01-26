// Filter

// Filter -> Espera que retorne um valor boolean - true or false

// Retorne os numeros maiores que 10
// Indices       0  1  2  3  4  5  6  7  .....
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function callbackFilter(valor, indice, array) {
    return valor > 10;
}

// Formas de usar a notação de .filter - metodos mais otmizados.

// Chamar uma função de callback que vai filtrar minha condição de ser maior que 10;
const numerosFiltrados = numeros.filter(callbackFilter);
// Utilizar uma arrow function pra simplificar o código;
const numerosFiltrados2 = numeros.filter((valor) => {
    return valor > 10;
});
// Posso remover os () dos parâmetros e também simplificar o retorno da função.
const numerosFiltrados3 = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados);
console.log(numerosFiltrados2);
console.log(numerosFiltrados3);

// Retorne:
// - Pessoas cujo nome termina com "n";
// - Mais de 50 anos;
// - Com mais de 5 letras no nome; 
const pessoas = [
    {nome: 'Alison', idade: 24},
    {nome: 'Luiz', idade: 25},
    {nome: 'Maria', idade: 55}
];

const pessoasSize = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasAge = pessoas.filter(obj => obj.idade > 50);
const pessoasN = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('n'));
console.log(pessoasSize);
console.log(pessoasAge);
console.log(pessoasN);