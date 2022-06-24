// Coloquei em uma const a section do HTML
const paragrafos = document.querySelector('.paragrafos');
// Da section do HTML eu seleciono todos os P's
const ps = paragrafos.querySelectorAll('p');


// Seleciono com "getComputedStyle" os estilos computados no body**
const stylesBack = getComputedStyle(document.body);
// Coloquei em uma const o estilo "backgroundColor" que esta selecionado na const anterior
const backColor = stylesBack.backgroundColor;


// A cada lasço do meu for of, ele vai alterar as propriedades dos P's com a cor do background
for (let p of ps) {
    p.style.backgroundColor = backColor;
    p.style.color = '#FFFFFF';
}
