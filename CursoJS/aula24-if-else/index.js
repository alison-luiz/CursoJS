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


const hora = 15;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}