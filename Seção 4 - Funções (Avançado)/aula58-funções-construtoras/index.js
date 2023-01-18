// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Inicia com Maiuscula, e usamos a palavra 'new'
// Construtora -> Sigo a sintaxe do JS normalmente, utilizando (;)
function Pessoa(nome, sobrenome) {
    // Atributos ou metodos privados
    const metodoInterno = () => {
        console.log('Sou um método privado!')
    };

    // Atributos ou métodos públicos
    // this. é atribuido para a variável que esta chamando a função.
    this.nome = nome;
    this.sobrenome = sobrenome;   
    this.metodo = () => {
        console.log('Sou um método público!')
    };
}

// Sempre que precisar usar a função construtora, utilizar 'new'
const p1 = new Pessoa('Alison', 'Luiz');