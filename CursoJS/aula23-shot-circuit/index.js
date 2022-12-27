/* 
VALORES CONSIDERADOS **FALSY (Os que avaliam em false quando necessário)

0 "" '' `` null undefined NaN
&& - Precisa que todas retorne verdadeiro
|| - Apenas uma retornar verdadeiro

*/

function falaOi() {
    return 'Oi';
}

let executarFala = 'Olá' // Tenho aqui um valor que não é considerado falsy, então ele passa a função
let naoExeFala = 0 // Tenho aqui um valor considerado falsy, então ele da shot-circuit e retorna o valor falsy

console.log(executarFala && falaOi());
console.log(naoExeFala && falaOi());

const a = 0;
const b = false;
const c = 'false';
const d = null;
const e = NaN;

// COMSIÇÃO OU "||" VAI ME RETORNAR O PRIMEIRO TRUE QUE ENCONTRAR NO CASO A CONST "C" QUE TEM UMA STRING COM VALOR TRUE

console.log(a || b || c || d || e);
