// defineProperty e defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Retorna o valor da chave
        writable: false, // Controla se o valor pode ou não ser alterado
        configurable: false //
    });
}

const p1 = new Produto('Camiseta', 20, 3);