const minhaData = new Date();
console.log('Dia', minhaData.getDate()); // Dia
console.log('Mês', minhaData.getMonth() + 1); // Mês
console.log('Ano', minhaData.getFullYear()); // Ano
console.log('Hora', minhaData.getHours()); // Hora
console.log('Min', minhaData.getMinutes()); // Minutos
console.log('Seg', minhaData.getSeconds()); // Segundos
console.log('ms', minhaData.getMilliseconds()); // Milesegundos
console.log('Dia-semana', minhaData.getDay()); // Dia da semana 0-6
console.log(minhaData.toString());

// Gerando uma nova hora e formatando os valores
const data = new Date();
const dataBr = formataData(data);
console.log(dataBr);

function formataData (data) {
    const dia = zeroAEsqueda(data.getDate());
    const mes = zeroAEsqueda(data.getMonth() +1);
    const ano = zeroAEsqueda(data.getFullYear());
    const hora = zeroAEsqueda(data.getHours());
    const min = zeroAEsqueda(data.getMinutes());
    const seg = zeroAEsqueda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

function zeroAEsqueda (num) {
    return num >= 10 ? num : `0${num}`;
}
