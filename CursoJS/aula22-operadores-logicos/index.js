/* 
OPERADORES LÓGICOS


&& -> AND/E (Todas as expressoes precisam ser verdadeiras para retornar true)
|| ->OR/OU
! -> NOT/NÃO

*/


const and = true && true && true && true;
console.log(and);

const or = true || false;


const user = 'Alison';
const password = '123456';

const vaiLogar = user === 'Alison' && password === '123456';
console.log(vaiLogar);
