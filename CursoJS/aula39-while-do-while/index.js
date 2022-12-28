let i = 0; // Inicializando minha variavel de controle com valor 0

while (i <= 10) {
    console.log(i);
    i++; // Fazendo incremento na variavel de controle para finalizar o laço
}

console.log('##########')

const min = 1;
const max = 50;

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random(min,max); // Variavel de controle do laço

while (rand !== 10) { // Enquanto for diferente de 10 ele continua no laço
    rand = random(min,max);
    console.log(rand)
}

console.log('##########')

do {
    rand = random(min,max); // do while - executa ao menos uma vez o laço - pois sua validação e no final 
    console.log(rand)
} while (rand !== 10);