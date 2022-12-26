const nome = 'Alison';
const sobrenome = 'Luiz da Silva';
const idade = 24;
const peso = 96;
const alturaEmM = 1.8;
let imc; // peso / (alturaEmM * alturaEmM)
let anoNascimento; // data atual - idade

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('Tem', alturaEmM, 'de altura e seu IMC é de', imc);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);
console.log(' ');
// Também posso utiliza o sinal de + para unir os valores
// Sinal de + em string une os valores - diferente do sinal de + em numbers que soma os valores

console.log(nome + ' ' + sobrenome);


// Template strings usando aspas invertida
// Para usar variavies dentro de uma string com `crazes` usa-se ${variavel}

console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${imc}`);