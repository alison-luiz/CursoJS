function retornaFuncao() {
    const nome = 'Alison';
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao();
console.log(funcao);