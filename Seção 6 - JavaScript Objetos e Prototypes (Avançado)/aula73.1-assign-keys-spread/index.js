const produto = { nome: 'Caneca', preco: 1.8 };
const outroProduto = produto;

console.log(outroProduto);
produto.nome = 'Alison'; // Alterando o valor da chave do produto
console.log(outroProduto);
outroProduto.nome = 'Luiz'; // Alterando o valor alterando outra variavel apontando para mesma chave
console.log(outroProduto);

// Copiar o objeito para outra variavel
const outroProduto2 = { 
    ...produto, // ...spread -> espalhar o objeto original
    material: 'porcelana'
};

outroProduto2.nome = 'Caneca'
console.log(outroProduto2);

//        Criando objeto vazio {}, passando a referencia
//const outroProduto3 = Object.assign({}, outroProduto2);
const outroProduto3 = Object.assign({}, outroProduto2, { newObjeto: 'posso passar objeto' });
console.log(outroProduto3);

// Posso criar um novo utilizando somente as chavez que eu quero
const outroProduto4 = { nome: outroProduto2.nome, material: outroProduto2.material};
console.log(outroProduto4);
console.log(Object.keys(outroProduto4));

