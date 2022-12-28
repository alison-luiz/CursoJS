const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (numero of numeros) {

    if (numero === 2) { // if = se - numero for igual === 2 - continue volta a repetição do laço para proxima iteração.
        continue;
    }

    if (numero === 8) { // break - quebrar - se o numero for === 8 ele para a repetição do laço.
        break;
    }

    console.log(numero);
}