// indices    012345678910
const nome = ['Alison', 'Luiz'];

// Usando for comum
// Usado com const iteráveis (arrays ou strings)
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

// Usando for in
// Usado para retornar índices ou chaves (strings, arrays ou objetos)
// Vai retornar o indice do array, usamos a variavel original + o for in pra puxar o valor
for (let x in nome) {
    console.log(nome[x]);
}

// Exemplo usando for of
// Usado oara retornar o valor em si
// Vai retornar o valor dos indices do array
for (let valor of nome) {
    console.log(valor);
}