const pessoas = [
    {id: 2, nome: 'Luiz'},
    {id: 1, nome: 'Alison'},
    {id: 3, nome: 'Silva'}
];

// const novasPessoas = {};
// for ( const pessoa of pessoas ) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for ( const pessoa of pessoas ) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa });
}

console.log(novasPessoas);