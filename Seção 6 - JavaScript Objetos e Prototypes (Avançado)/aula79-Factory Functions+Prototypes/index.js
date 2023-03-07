const falar = {
    fala() {
        console.log(`${this.nome} esta falando.`)
    }
}

const pessoaPrototype = Object.assign({}, falar);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
}

const pessoa1 = criaPessoa('Alison', 'Luiz');