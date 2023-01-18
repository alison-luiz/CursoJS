function saudacao(nome) { // nome = um parametro
    return `Bom dia ${nome}!`
}

const variavel = saudacao('Alison'); // passandro 'Alison" para o parametro da função - chamamos de argumento
console.log(variavel);

// ****************************************************************************

function soma(x, y) { // x e y é um parametro
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2), `= Retorna a soma dos dois argumentos passados para função`);

// ****************************************************************************

function somar(x = 0, y = 0) { // Passando desta forma você define um valor 'padrão' caso não seja passado o argumento
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