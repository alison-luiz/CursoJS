function saudacao(nome) {
    return `Bom dia ${nome}!`
}

const variavel = saudacao('Alison');
console.log(variavel);

// ****************************************************************************

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));

// ****************************************************************************

function somar(x = 0, y = 0) {
    const resultado = x + y;
    return resultado;
}

console.log(somar());

// ****************************************************************************

const constFunction = function (n) {
    return n ** 0.5
}

console.log(constFunction(25));

// ****************************************************************************
// Exemplo de função compactada, funciona do mesmo modo que a função acima.

const functionCompacta = x => x ** 0.5;

console.log(functionCompacta(25));