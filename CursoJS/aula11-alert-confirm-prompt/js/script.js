// alert('Mensagem de alerta');

// confirm('Deseja realmente excluir?');

// prompt('Digite seu texto aqui');


// const confirma = confirm('Deseja realmente apagar?');

// let confirmando = confirm('Qualquer mensagem aqui');

let num1 = prompt('Digite o primeiro numero que deseja');
let num2 = prompt('Digite o valor que voce quer somar');

num1 = Number(num1);
num2 = parseInt(num2);

let soma = num1 + num2;

alert('Seu resultado é ' + soma);

// Ou também posso fazer assim:

const alerta = "Seu resultado é ";
const resultado = alerta + soma;

alert(resultado);

const verificar = confirm("Resultado está correto?");
console.log(verificar);