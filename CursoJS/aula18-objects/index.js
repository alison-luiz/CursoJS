/* function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Alison', 'Luiz', 23);

console.log(pessoa1.nome); */

const pessoa1 = {
    nome: 'Alison',
    sobrenome: 'Luiz',
    idade: 23,

    diz() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    },
}

pessoa1.diz();

// Objeto se cria dentro do escopo usando {}
