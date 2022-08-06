const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
console.log(numeros);

// colocando tres pontinho eu seleciono o resto do array
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto);

// colocando um valor "vazio, ," eu posso pular um indice do array
const [num1, , num2, , num3, ...numResto] = numeros;
console.log(num1, num2, num3, numResto);

const numArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(numArrays[2][2])