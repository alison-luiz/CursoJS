// ALTERAR O VALOR DAS VARIAVEIS ENTRE ELAS
// Alterar os valores das variaves varA, varB e varC

let varA = 'A'; // Para -> B
let varB = 'B'; // Para -> C
let varC = 'C'; // Para -> A

console.log(varA, varB, varC);

let temp = varA; // Crio uma constante para salvar o valor de uma das variavel na memoria

// Altero os valores da variavel let

varA = varB;
varB = varC;
varC = temp;

console.log(varA, varB, varC);

// OUTRA MANEIRA DE FAZER A ALTERACAO
// MAIS MODERNA

let a = 'A'; // Para -> B
let b = 'B'; // Para -> C
let c = 'C'; // Para -> A

console.log(a, b, c);

[a, b, c] = [b, c, a]

console.log(a, b, c)
