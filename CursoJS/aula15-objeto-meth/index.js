let num1 = 9.54578;
let num2 = Math.floor(num1); // Arredonda para baixo
let num3 = Math.ceil(num1); // Arrendonda para cima
let num4 = Math.round(num1); // Arrendonda para o mais proximo

console.log(num2);
console.log(num3);
console.log(num4);

let numMax = (1, 2, 3);
let numMin = (-50, 1, 2, 3);

console.log(Math.max(numMax));
console.log(Math.min(numMin));


let aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Gera um numero aleatório "random" e inteiro "round" entre 10 e 5
console.log(aleatorio);