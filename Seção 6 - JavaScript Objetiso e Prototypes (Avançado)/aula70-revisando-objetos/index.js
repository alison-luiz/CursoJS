// Objeto literal
const pessoa = {
    nome: 'Alison',
    sobrenome: 'Luiz'
};

console.log(`Acessando por notação de ponto:`, pessoa.nome, pessoa.sobrenome); // Utilizando notação de ponto para acessar a chave do objeto
console.log(`Acessando por notação de colchetes:`, pessoa['nome'], pessoa['sobrenome']); // Utilizando notação de colchetes para acessar a chave do objeto

const chave = 'nome';
console.log(`Acessando por const:`, pessoa[chave]);

// Construtor de array
// new Array()
const pessoa1 = new Object();
pessoa1.nome = 'Alison';
pessoa1.sobrenome = 'Luiz';
console.log(`Acessando por new Object:`,pessoa1.nome, pessoa1.sobrenome);

// Apagando uma chave do objeto
delete pessoa1.sobrenome;
console.log(pessoa1);

// Manipulando valores das chaves de dentro do objeto com outra chave
const pessoa2 = new Object();
pessoa2.nome = 'Alison';
pessoa2.sobrenome = 'Luiz';
pessoa2.idade = 24;
// Quando function está dentro do meu objeto chamamos de "metodo"
pessoa2.getAnoNascimento = function() {
    const date = new Date();
    return date.getFullYear() - this.idade;
};
console.log(pessoa2.getAnoNascimento());
// For in - buscando nomes das chaves do meu objeto
for (chaves in pessoa2) {
    console.log(chaves);
};