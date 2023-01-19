// Valor por referência
//                0        1        2
const nomes = ['Alison', 'Luiz', 'Silva'];
nomes[1] = 'Jhenny'; // Alterando valor do índice '1'
console.log(nomes);

delete nomes[0]; // Removo o elemento do array deixando um item vazio.
console.log(nomes);

const referencia = nomes; // variável de array declarada destas forma utiliza valor por referência.
referencia.pop(); // Removendo ultimo item do array

console.log(nomes);

nomes[0] = 'Alison' // Alterando valor do array índice '0'
console.log(nomes);

// Spread syntax (...)
const spread = [...nomes];
const removidoFinal = spread.pop(); // Remove o elemento do final
const removidoComeco = spread.shift(); // Remove o elemento do começo
console.log(nomes);
console.log(spread, removidoComeco, removidoFinal);

spread.push('Alison'); // Adiciona um elemento no final do array
spread.unshift('Jhenny'); // Adiciona um elemento no começo do array
console.log(spread);

//      0         1
// [ 'Jhenny', 'Alison' ]
// .slice(0, 1) = inicio no indice 0 até o 1 (1 não conta)
const spreadDividido = [...spread.slice(0, 1)];
console.log(spreadDividido);

const string = 'Alison Luiz da Silva';
console.log(string);
const stringToArray = string.split(" "); // .split() - Divide uma string em diversos elementos.
const arrayToString = stringToArray.join(" "); // .join() - Unifica em uma string os valores de um array
console.log(stringToArray);
console.log(arrayToString);