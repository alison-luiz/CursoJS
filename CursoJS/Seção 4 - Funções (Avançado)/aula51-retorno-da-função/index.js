// return
// - Retorna um valor
// - Termina a função
function soma(a, b) {
    return a + b;
}

// Também posso ter uma função que "retorna" alguma coisa dependendo do seu contexto
// Como por exemplo:
try {
    document.addEventListener('click', function() {
        document.body.style.backgroundColor = 'red';
    });
} catch(erro){
};

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}
const pessoa = criaPessoa('Alison', 'Luiz');
console.log(pessoa);

// Função retonando outra função
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const olaMundo = falaFrase('Olá')
console.log(olaMundo);