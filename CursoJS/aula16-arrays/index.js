// Arrays tem a indexação diferente, para cada string ele aloca um numero

const alunos = ['Alison', 'Jhennyfer', 'Jose', 'Maria'];
console.log(alunos[0]);

alunos[0] = 'Eduardo';

console.log(alunos[0]);

// POSSO ADICIONAR UMA STRING NA ARRAY COM:

alunos[4] = 'Luiza';

console.log(alunos);

// OU TBM POSSO ADICIONAR DE FORMA AUTOMARICA COM:

alunos[alunos.length] = "Fabio";

console.log(alunos);

// ADICIONANDO UM ELEMENTO AO FINAL DA ARRAY SEM PRECISAR SABER O TAMANHO:

alunos.push('Luiza');

console.log(alunos);

// SE EU QUISER ADICIONAR NO COMEÇO AO INVEZ DO FINAL:

alunos.unshift('Luiz'); 

console.log(alunos[0]);


alunos.pop();
alunos.shift();

console.log(alunos);











