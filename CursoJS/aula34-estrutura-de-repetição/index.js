/* 

For -> 

Precisa de 3 condições dentro da sua função () separadas por ; (1; 2; 3)
1º -> Criar uma variavel
2º -> Criar uma condição que vai parar o for
3º -> Criar um encremento ou decremento para o for

Não precisa fechar o objeto com ;

*/

const nomes = ['Alison', 'Luiz', 'Jhennyfer', 'Rafaela', 'José', 'Maria', 'João', 'Otávio', 'Miranda'];

for (let i = 0; i < nomes.length; i++) {
    console.log(`Índice ${i}`, nomes[i]);
}

// Também posso fazer for assim:

for (let index = 0; index <= 10; index++) {
    const par = index % 2 === 0 ? 'Par' : 'Ímpar';
    console.log(index, par);
}