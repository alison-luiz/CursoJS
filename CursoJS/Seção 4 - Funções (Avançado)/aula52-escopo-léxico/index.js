// Escopo léxico
const nome = 'Alison';
function falaNome() {
    console.log(nome); //Função acessou a variavel fora do seu escopo.
}

falaNome();

function usaFalaNome() {
    const nome = 'Luiz';
    falaNome();
}

usaFalaNome();