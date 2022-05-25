//const pessoa1 = {
//    nome: 'Alison',
//    sobrenome: 'Luiz',
//    idade: 23
//};

//console.log(pessoa1.nome);


function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa = criaPessoa('Alison', 'Luiz', 23)