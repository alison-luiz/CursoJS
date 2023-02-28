// getOwnPropertyDescriptor()
// Vai me retornar as propriedades da chave
const produto = { nome: 'Produto', preco: 5 };
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Outro produto 2'
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

produto.nome = 'Outro produto';
console.log(produto);
