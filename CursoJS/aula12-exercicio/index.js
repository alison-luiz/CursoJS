// ALTERAR O VALOR DAS VARIAVEIS ENTRE ELAS
// Alterar os valores das variaves varA, varB e varC

let varA = 'A'; // Para -> B
let varB = 'B'; // Para -> C
let varC = 'C'; // Para -> A

const temp = varA; // Crio uma constante para salvar o valor da variavel na memoria

// Altero os valores da variavel let

varA = varB;
varB = varC;
varC = temp;

console.log(varA, varB, varC);


// OUTRA MANEIRA DE FAZER A ALTERACAO
// MAIS MODERNA

let varAA = 'A'; // Para -> B
let varBB = 'B'; // Para -> C
let varCC = 'C'; // Para -> A

[varAA, varBB, varCC] = [varBB, varCC, varAA]

console.log(varAA, varBB, varCC)
