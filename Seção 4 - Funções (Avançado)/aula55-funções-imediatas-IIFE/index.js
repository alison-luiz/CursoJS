// IIFE - Immediately invoked function expression
// Funções que são auto-invocadas no código

// Exemplo da estrutura de uma função IIFE
(function(){
    console.log('Olá mundo!')
})();

// Nada que estive dentro da IIFE toca o escopo global do codigo.
(function(nome, sobrenome) {
    let pessoa = nome + ' ' + sobrenome;
    
    function falaNome() {
        return pessoa
    }

    let falarNome = falaNome();
    console.log(falarNome);

})('Alison', 'Luiz');