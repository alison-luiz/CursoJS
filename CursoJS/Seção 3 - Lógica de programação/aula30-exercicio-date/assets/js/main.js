const metodoUm = document.querySelector('#metodoUm');
const metodoDois = document.querySelector('#metodoDois');

const data = new Date();

const opcoes = {
    dateStyle: 'full',
    timeStuyle: 'short'
};

metodoUm.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
metodoDois.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});
