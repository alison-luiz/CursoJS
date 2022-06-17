/* const date = new Date('2022-06-12 14:30:59');

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia-semana', data.getDay());

console.log(data.toString()); */

function zeroAEsqueda (num) {
    return num >= 10 ? num : `0${num}`;
}


function formataData (data) {
    const dia = zeroAEsqueda(data.getDate());
    const mes = zeroAEsqueda(data.getMonth() +1);
    const ano = zeroAEsqueda(data.getFullYear());
    const hora = zeroAEsqueda(data.getHours());
    const min = zeroAEsqueda(data.getMinutes());
    const seg = zeroAEsqueda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBr = formataData(data);

console.log(dataBr);