// defineProperty e defineProperties
function Produto1(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        configurable: false, // Configurável 

        get: function() {
            return estoquePrivado;
        },

        set: function(valor) {
            if (typeof valor !== 'number'){
                console.log('Valor inválido!')
                return;
            }
            estoquePrivado = valor
        }

    });
}

const p1 = new Produto1('Camiseta', 20, 3);
p1.estoque = '1'
console.log(p1);
console.log(p1.estoque);

function criaProduto(nome) {
    return {
        get nome() { // Getter obtem o valor
            return nome;
        },
        set nome(valor) { // Setter define o valor
            nome = valor;
        }
    }
}

const criaP = criaProduto('Camiseta');
criaP.nome = 'Bermuda';
console.log(criaP.nome);