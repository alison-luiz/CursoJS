const nomes = ['Alison', 'Luiz'];

// Usando for comum
// Usado com const iteráveis (arrays ou strings)
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// Usando for in
// --> Usado para retornar índices ou chaves (strings, arrays ou objetos)
// Vai retornar o indice do array, usamos a variavel original + o for in pra puxar o valor
for (let x in nomes) {
    console.log(nomes[x]);
    console.log(x);
}

// Exemplo usando for of
// --> Usado para retornar o valor em si
// Vai retornar o valor dos indices do array
for (let valor of nomes) {
    console.log(valor);
}

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

const pessoa = {
    nome: 'Alison',
    sobrenome: 'Luiz'
}

for (let i in pessoa) {
    console.log(i, pessoa[i])
}