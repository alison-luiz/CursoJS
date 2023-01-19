//               -4       -3     -2      -1           
//                0        1      2       3 
const nomes = ['Alison', 'Luiz', 'da', 'Silva'];

// nomes.splice(índice atual, delete, elem1, elem2, elem3);

// nomes.splice(-1, 1); // Simulando o .pop()
// nomes.splice(nomes.lenght, 0, 'Elemento 1', 'Elemento 2'..); // Simulando o .push()
// nomes.splice(0, 1); // Simulando o .shift()
// nomes.splice(0, 0, 'Elemento 1', 'Elemento 2'..); // Simulando o .unshift()

const removidos = nomes.splice(3, 1, 'Null');
console.log(nomes, removidos);
