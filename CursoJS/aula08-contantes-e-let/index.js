const nome = 'Alison Luiz';
const sobrenome = 'da Silva';
const idade = 23;
const peso = 98;
const alturaEmM = 1.8;
let indiceDeMassaCorporal; // peso / (alturaEmM * alturaEmM)
let anoNascimento; // idade - data atual

indiceDeMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2021 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('Tem', alturaEmM, 'de altura e seu IMC é de', indiceDeMassaCorporal);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);
console.log(' ');

