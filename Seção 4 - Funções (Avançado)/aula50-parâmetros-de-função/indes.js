// Funções definidas com a palavra "function" tem um argumento especial chamado "arguments"
// Mesmo que a função declarada sem argumentos e que venha a ser requisitada recebendo parametros..
// Sera salvo neste array/objeto chamado "arguments"
function funcao() {
    console.log(arguments);
}
funcao();
funcao('Valor');

// Declarando valor padrão
function soma(a, b = 0) {
    return a + b;
}
console.log(soma(1,3));
console.log(soma(1));

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(arguments);
    return acumulador;
}

console.log(conta('+', 0, 2, 8));
