// Tratando erros no JavaScript

function soma(x,y) {
    if (typeof(x) !== 'number' || typeof(y) !== 'number') {
        throw('X e Y precisam ser números.')
    }
    return x + y;
}

try {
    console.log(soma(1,'a'));
} catch(error) {
    console.log(error);
}