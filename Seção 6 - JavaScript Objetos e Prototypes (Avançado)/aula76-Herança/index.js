function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}
Produto.prototype.aumento = function(valor) {
    this.preco += valor;
}
Produto.prototype.desconto = function(valor) {
    this.preco += valor;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

const produto = new Produto('Genérico', 123);
console.log(produto);

const camiseta = new Camiseta('Regata', 7.50, 'Preta');
console.log(camiseta);

// Posso definir um novo prototype para minha função construtora, editando um já existente.
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

camiseta.aumento(100);
console.log(camiseta);