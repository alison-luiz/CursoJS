// defineProperty e defineProperties
function Produto1(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Retorna o valor da chave
        writable: false, // Controla se o valor pode ou não ser alterado
        configurable: false // Configurável 
    });
}

const p1 = new Produto1('Camiseta', 20, 3);
console.log(Object.keys(p1));



function Produto2(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra a chave
            value: nome, // Retorna o valor da chave
            writable: false, // Controla se o valor pode ou não ser alterado
            configurable: false // Configurável
        },
        preco: {
            enumerable: true, // Mostra a chave
            value: preco, // Retorna o valor da chave
            writable: false, // Controla se o valor pode ou não ser alterado
            configurable: false // Configurável
        },
        estoque: {
            enumerable: true, // Mostra a chave
            value: estoque, // Retorna o valor da chave
            writable: false, // Controla se o valor pode ou não ser alterado
            configurable: false // Configurável
        }
    })
}