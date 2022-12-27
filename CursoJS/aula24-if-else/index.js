/* 
0 -> 11 - Bom dia
12 -> 17 - Boa tarde
18 - 23 - Boa noite
*/

/* 
if - Pode ser usado sozinho
else - Precisa ser usado com um "if" antes - e eu só posso ter um unico "else" na checagem
else if - Posso ter quantos quiser na checagem da condição "if"
*/

const hora = 18;
const userName = 'Alison'

if (hora >= 0 && hora <= 11) {
    console.log(`Bom dia ${userName}`);
} else if (hora >= 12 && hora <= 17) {
    console.log(`Bom tarde ${userName}`);
} else if (hora >= 18 && hora <= 23) {
    console.log(`Bom noite ${userName}`);
} else {
    console.log(`Olá ${userName}`);
}

if (userName === 'Alison') { // Igualdade
    console.log(`Sim`);
} else {
    console.log(`Não`);
}

if (userName !== 'Alison') { // Diferença
    console.log(`Sim`);
} else {
    console.log(`Não`);
}