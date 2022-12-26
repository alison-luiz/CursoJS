/* 
OPERADORES LÓGICOS

 && - And (Todas as expressões devem ser verdadeiras para retornar true)
 || - Or (Uma das expressões deve ser verdadeira para retornar true)
 ! - Not (Negação)

*/

const and = true && true && true && true; // Toda expressão esta verdadeira
console.log(and, `AND`); // Esta retornando true

const or = true || false; // Uma das expressões esta true
console.log(or, `OR`); // Vai retornar true

const user = 'Alison';
const password = '123456';
const vaiLogar = user === 'Alison' && password === '123456'; // Neste exemplo todas as expressões é verdadeira
console.log(vaiLogar, `User and Password`); // Vai retornar um valor true
