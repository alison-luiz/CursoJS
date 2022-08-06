const pessoa = {
    nome: 'Alison',
    sobrenome: 'Silva',
    idade: 24,
    endereco: {
        rua: 'Est. Velha Maringá Campo Mourão',
        numero: 's/n'
    }
};

// Atribuição via desestruturação

// Posso atribuir um valor padrão, e tambem utilizando o nome do objeto com : posso mudar o nome da variavel
const { nome, sobrenome, idade: anosDeVida = ''} = pessoa
console.log(nome, sobrenome, anosDeVida);

// Para atribuir o valor de um objeto dentro de outro objeto:
const { endereco: {rua, numero} } = pessoa;
console.log(rua, numero);

// Para atribuir o resto do objeto é o mesmo modo feito no array, usando ...
const { nome: nomePessoa, ...resto } = pessoa
console.log(nomePessoa, resto);
