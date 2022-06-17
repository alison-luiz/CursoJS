const dataAtual = new Date();

const diaSemana = dataAtual.getDay();
const mesDoAno = dataAtual.getMonth() + 1;

const diaSemanaTexto = fDiaSemana(diaSemana);
const mesDoAnoTexto = fMesDoAno(mesDoAno);

function fMesDoAno(mes) {
    let mesDoAnoTexto;

    switch (mes) {
        case 1:
            return mesDoAnoTexto = 'Janeiro'
        case 2:
            return mesDoAnoTexto = 'Fevereiro'
        case 3:
            return mesDoAnoTexto = 'Março'
        case 4:
            return mesDoAnoTexto = 'Abril'
        case 5:
            return mesDoAnoTexto = 'Maio'
        case 6:
            return mesDoAnoTexto = 'Junho'
        case 7:
            return mesDoAnoTexto = 'Julho'
        case 8:
            return mesDoAnoTexto = 'Agosto'
        case 9:
            return mesDoAnoTexto = 'Setembro'
        case 10:
            return mesDoAnoTexto = 'Outubro'
        case 11:
            return mesDoAnoTexto = 'Novembro'
        case 12:
            return mesDoAnoTexto = 'Dezembro'
    }
}

function fDiaSemana(dia) {
    let diaSemanaTexto;

    switch (dia) {
        case 0:
            return diaSemanaTexto = 'Domingo';
        case 1:
            return diaSemanaTexto = 'Segunda-feira';
        case 2:
            return diaSemanaTexto = 'Terça-feira';
        case 3:
            return diaSemanaTexto = 'Quarta-feira';
        case 4:
            return diaSemanaTexto = 'Quinta-feira';
        case 5:
            return diaSemanaTexto = 'Sexta-feira';
        case 6:
            return diaSemanaTexto = 'Sabado';
    }
}

const dataFormatada = dataFormatadaTexto(dataAtual, diaSemanaTexto, mesDoAnoTexto);

function dataFormatadaTexto(data, semana, mes) {
    const dia = data.getDate();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();

    const diaSemana = diaSemanaTexto;
    const mesAno = mesDoAnoTexto;

    return `${diaSemana}, ${dia} de ${mesAno} de ${ano} - ${hora}:${min}`
}

const h1 = document.querySelector('.container h1');
h1.innerHTML = dataFormatada.toString();