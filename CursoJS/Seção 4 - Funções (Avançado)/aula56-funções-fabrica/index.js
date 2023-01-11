// Factory Functions

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${this.assunto}.`
        },
        altura: a,
        peso: p,
        imc(){
            const indeice = this.peso / (this.altura ** 2);
            return indeice.toFixed(2);
        },
        // Getter - quando queremos obter o valor de um função
        get imcAtributo(){
            const indeice = this.peso / (this.altura ** 2);
            return indeice.toFixed(2);
        },
        get nomeCompleto() {
            return `${nome} ${sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }

    };
}

const p1 = criaPessoa('Alison', 'Luiz', 1.72, 98);
console.log(p1.nome);
console.log(p1.imc()); // Buscando informação passando parametro de função.
console.log(p1.imcAtributo); // Buscando informação passando parametro de atributo.

const p2 = criaPessoa('Jhenny', 'Silva', 1.70, 64);
console.log(p2);


