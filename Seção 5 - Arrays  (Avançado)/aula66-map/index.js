// Map

// Dobrar os números
// Indices       0  1  2  3  4  5  6  7  .....
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const numeros2x = numeros.map(function(valor, indice, array) {
    return valor * 2;
});
console.log(numeros2x);

// Map - sempre vai ter o mesmo tamanho do array original
const numeros2xNew = numeros.map(valor => valor * 2);
console.log(numeros2xNew);

// Para cada elemento:
// - Retorne apenas uma string com o nome da pessoa
// - Remova apanas a chave "nome" do objeto
// - Adiciona uma chave "id" em cada objeto
const pessoas = [
    { nome: 'Alison', idade: 24},
    { nome: 'Jhenny', idade: 25},
    { nome: 'Maria', idade: 56},
    { nome: 'Jose', idade: 69}
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idade = pessoas.map(obj => ({idade: obj.idade}));
console.log(idade);

const ids = pessoas.map(function(obj, indice) {
    const newObj = { ...obj };
    newObj.id = (indice + 1) * 100;
    return newObj;
});
console.log(ids);