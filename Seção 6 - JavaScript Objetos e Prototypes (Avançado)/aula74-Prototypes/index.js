// Todos os objetos tem uma referência interna para um protótipo (__proto__)
// que vem da propriedade prototype da função construtora que foi usada para
// cria-lo. Quando tentamos acessar um membro de objeto, primeiro o motor do
// JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de
// protótipos é usada até o topo (null) até encontrar (ou não) tal membro. 

// Função construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

// Instância - função construtora
const pessoa1 = new Pessoa('Alison', 'Luiz');
const pessoa2 = new Pessoa('Alison', 'Luiz');

console.dir(pessoa1);
console.dir(pessoa2);