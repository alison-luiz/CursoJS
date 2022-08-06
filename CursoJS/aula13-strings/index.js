//               0123456789   -> Indice = posições do caractere na string
let umaString = 'Uma String';
let duasString = 'Duas \\String'
console.log(duasString);

console.log(umaString[4]); // Vai me retornoar a letra que se encontra no Indice 4
console.log(umaString.charAt(4)); // Também vai me retornar a letra da posição 4
console.log(umaString.indexOf('String')); // Buscar uma palavra, exata, vai me rentornar onde começa o indice.
console.log(umaString.lastIndexOf('String')); // Busca de trás para frente, tambpem posso definir um indice de inicio ('String', 9)
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/[a-z]/));
console.log(umaString.search(/S/));
console.log(umaString.replace('String', 'Outra String')); // Substituir um texto da string
console.log(umaString.length); // Este me mostra o tamanho em caracteres da string
console.log(umaString.slice(4, 10)); // Me retorna o valor que esta dentro do indice
console.log(umaString.slice(-6)); // É a mesma coisa, retorna a string do tamanho menos (-) o valor escolhido 
console.log(umaString.split('a'))