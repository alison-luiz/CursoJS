// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};
const objB = {
    chaveB: 'B'
    // __proto__: Object.prototype
};

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}

// Manipulando meus metodos pelo Object.prototype
Produto.prototype.desconto = function(percent) {
    this.preco = this.preco - (this.preco * percent / 100);
}
Produto.prototype.aumento = function(percent) {
    this.preco = this.preco + (this.preco * percent / 100);
}

const p1 = new Produto('Camiseta', 1000);
console.log(p1);
// Aplicando o desconto, pele prototype
p1.desconto(50);
console.log(p1);
// Aplicando o aumento, pele prototype
p1.aumento(100);
console.log(p1);

const p2 = new Produto('Bermuda', 500);
// Atribuindo o Object.prototype do p1 para o p2
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(20);
console.log(p2);

const p3 = Object.create(Object.prototype, {
    preco: {
        value: 42,
    }
});
console.log(p3);