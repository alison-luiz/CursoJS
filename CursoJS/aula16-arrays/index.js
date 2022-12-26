// Arrays tem a indexação diferente, para cada string ele aloca um numero

const alunos = ['Alison', 'Jhennyfer', 'Jose', 'Maria'];
console.log(alunos[0], `= alunos[0] - Retorna o index 0 do array alunos `);
alunos[0] = 'Eduardo'; // Index 0 do meu array passa a ser "Eduardo"

console.log(alunos[0]); // Retornando novo valor do array indice 0

// POSSO ADICIONAR UMA STRING NA ARRAY COM:
alunos[4] = 'Luiza';
console.log(alunos, `= Adicionando um novo "nome" na minha array usando o ultimo indice + 1`);

// OU TBM POSSO ADICIONAR DE FORMA AUTOMARICA COM:
alunos[alunos.length] = "Fabio"; //.lenght é referente o valor da tamanho da minha array
console.log(alunos);

// ADICIONANDO UM ELEMENTO AO FINAL DA ARRAY SEM PRECISAR SABER O TAMANHO - Usando .push
alunos.push('Luiza');
console.log(alunos);

// SE EU QUISER ADICIONAR NO COMEÇO AO INVEZ DO FINAL - Usando .unshift
alunos.unshift('Luiz'); 
console.log(alunos[0]); // Retorna apenas o indece 0 que agora passa a ser 'luiz'

alunos.pop(); // .pop REMOVE O ULTIMO INDICE DO ARRAY
console.log(alunos);
alunos.shift(); // .shift REMOVE O PRIMEIRO INDICE DO ARRAY
console.log(alunos);











