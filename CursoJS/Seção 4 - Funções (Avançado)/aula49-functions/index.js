// Declaração de função (Function hoisting - Elevar as declaração das funções e variáveis para topo do .js)
function falaOi() {
    console.log('Oi')
}
falaOi();

// First-class objects (Objetos de primeira calsse)
const souUmDado = function() {
    console.log('Sou um dado.');
}
souUmDado(); // Variavel passou a ser uma função

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado);

// Arrow function =>
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando de dentro de um objeto!');
    },
    novaFunctionFalar() {
        console.log('Estou falando de dentro de um objeto, de outra maneira!');
    }
}
obj.falar();
obj.novaFunctionFalar();