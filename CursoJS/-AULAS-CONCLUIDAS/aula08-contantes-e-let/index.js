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
// Também posso utiliza o sinal de + para unir os valores
console.log(nome + ' ' + sobrenome);

// Template strings
// Para usar variavies dentro de uma string com `crazes` usa-se ${variavel}

console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${indiceDeMassaCorporal}`);