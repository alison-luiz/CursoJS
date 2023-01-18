const frutas = ['Pera', 'Maça', 'Uva'];

//for in -> lê os indices ou chaves do objeto

for (let i in frutas) {
    console.log(frutas[i]);
}

// Outro exemplo usando for in -> em objetos

const pessoa = {
    nome: 'Alison',
    sobrenome: 'Luiz',
    idade: 24
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}