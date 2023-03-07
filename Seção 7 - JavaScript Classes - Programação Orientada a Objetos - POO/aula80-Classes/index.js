class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome,
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} esta falando.`)
    }

}

const pessoa1 = new Pessoa('Alison', 'Luiz');
console.log(pessoa1);

pessoa1.falar();