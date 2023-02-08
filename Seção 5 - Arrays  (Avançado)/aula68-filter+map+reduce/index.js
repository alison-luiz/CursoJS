// Filter - filtrar os pares
// Map - dobrar os valores
// Reduce - Somar tudo

// Indices       0  1  2  3  4  5  6  7  .....
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const filterPares = numeros.filter(valor => valor % 2 === 0);
console.log(filterPares);

const mapDobrar = numeros.map(valor => valor * 2);
console.log(mapDobrar);

const reduceSomar = numeros.reduce((ac, valor) => ac += valor);
console.log(reduceSomar);

const exercicio = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac += valor);
console.log(exercicio);