const calculadora = document.querySelector('#calculadora');
const getResultado = document.querySelector('#resultado');

calculadora.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputNum1 = e.target.querySelector('#input-number-1');
  const inputNum2 = e.target.querySelector('#input-number-2');

  const num1 = Number(inputNum1.value);
  const num2 = Number(inputNum2.value);

  if (!num1) {
    setResultado('Numero 1 inválido', false);
    return;
  }

  if (!num2) {
    setResultado('Numero 2 inválido', false);
    return;
  }

  return calculo(num1, num2, estaMarcado), setResultado(calculoFinal);

})

function marcaDesmarca(id) {
  if (id == "operador-somar") {
    document.getElementById('operador-subtrair').checked = false;
    document.getElementById('operador-dividir').checked = false;
    document.getElementById('operador-multiplicar').checked = false;
    return marcado('somar');
  } else if (id == "operador-subtrair") {
    document.getElementById('operador-somar').checked = false;
    document.getElementById('operador-dividir').checked = false;
    document.getElementById('operador-multiplicar').checked = false;
    return marcado('subtrair');
  } else if (id == "operador-dividir") {
    document.getElementById('operador-somar').checked = false;
    document.getElementById('operador-subtrair').checked = false;
    document.getElementById('operador-multiplicar').checked = false;
    return marcado('dividir');
  } else if (id == "operador-multiplicar") {
    document.getElementById('operador-somar').checked = false;
    document.getElementById('operador-subtrair').checked = false;
    document.getElementById('operador-dividir').checked = false;
    return marcado('multiplicar');
  }
}

let estaMarcado;

function marcado(x) {
  return estaMarcado = `${x}`
}

let calculoFinal;

function calculo(num1, num2, operador) {
  switch (operador) {
    case 'somar':
      return calculoFinal = num1 + num2;
    case 'subtrair':
      return calculoFinal = num1 - num2;
    case 'dividir':
      return calculoFinal = num1 / num2;
    case 'multiplicar':
      return calculoFinal = num1 * num2;
  }
}

function setResultado(resultado) {
  getResultado.innerHTML = `O valor calculado é: ${resultado}`;
}
