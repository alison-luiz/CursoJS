// Função que receba 2 numeros e retorne o maior deles;
function maiorNumero(x,y) {
    if (x > y) {
        return `${x} é o maior numero`;
    } else {
        return `${y} é o maior numero`
    }
}
console.log(maiorNumero(2,2));


// Outra maneira de se fazer a função: (Return)
function maiorNumero2(x,y) {
    if (x > y) return `${x} é o maior numero`;
    return `${y} é o maior numero`;
}
console.log(maiorNumero2(2,2));

// Outra maneira de se fazer a função: (Operação ternária)
function maiorNumero3(x,y) {
    return x > y ? `${x} é o maior numero` : `${y} é o maior numero`
}
console.log(maiorNumero3(3,2));

// Outra maneira de se fazer a função: (Arrow function + operação ternária)
const maiorNumero4 = (x,y) => x > y ? `${x} é o maior numero` : `${y} é o maior numero`
console.log(maiorNumero4(2,5));
