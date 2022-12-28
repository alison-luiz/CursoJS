function getTimer(seg) {
    const data = new Date(seg * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function startTimer() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimer(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(e) {
    relogio.classList.remove('pause');
    relogio.classList.add('start');
    clearInterval(timer);
    startTimer();
});

pausar.addEventListener('click', function(e) {
    relogio.classList.add('pause');
    relogio.classList.remove('start');
    clearInterval(timer);
});

zerar.addEventListener('click', function(e) {
    relogio.classList.remove('pause');
    relogio.classList.remove('start');
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00'
});
