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
const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

// Função retonando outra função
function criaMultiplicador(m) {
    return function(n) {
        return n * m;
    }
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));