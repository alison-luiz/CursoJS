// Polomorfismo - Quando manipulo um método de uma função "pai" para agir de diferentes maneiras no código.

// Superclasse
function Conta(agencia, conta, saldo) {
    this.agencia = agencia,
    this.conta = conta,
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if ( valor > this.saldo ) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    };
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function() {
    console.log(
        `Ag/c: ${this.agencia} / ${this.conta} | ` +
        `Saldo: R$ ${this.saldo.toFixed(2)}`
    );
}

function ContaCorrete(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrete.prototype = Object.create(Conta.prototype);
ContaCorrete.prototype.constructor = ContaCorrete;

ContaCorrete.prototype.sacar = function(valor) {
    if ( valor > (this.saldo + this.limite) ) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    };
    this.saldo -= valor;
    this.verSaldo();
}

function ContaPoupanca(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cc = new ContaCorrete(11, 22, 10, 100);
cc.depositar(90);
cc.sacar(200);

const cp = new ContaPoupanca(11, 22, 20);
cp.depositar(30);
cp.verSaldo();