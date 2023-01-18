function retornaFuncao() {
    const nome = 'Alison';
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao();
console.dir(funcao);
console.log(funcao());

function returnClosures(nome) {
    return function() {
        return nome;
    }
}

const closures1 = returnClosures('Alison');
const closures2 = returnClosures('Luiz');

console.log(closures1(), closures2());