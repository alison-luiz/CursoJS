/* 
OPERADORES DE COMPARAÇÃO
> Maior
>= Maior ou igual
< Menor
<= Menor ou igual

== Igualdade (Não utilizável - pois não verifica strings e numbers)
=== Igualdade estrita (Valor e tipo)

!= Diferente (Não utilizável - pois não verifica strings e numbers)
!== Diferente estrito (valor e tipo)
*/
console.log(10 > 5, `= Retorna verdadeiro porque 10 é maior que 5`);
console.log(5 > 10, `= Retorna false porque 5 não é maior que 10`);

const maiorQue = 10 > 5; // Salva o valor boolean na variavel const de acordo com a lógica
console.log(maiorQue);

const maiorOuIgual = 10 >= 5; // Salva o valor boolean na variavel const de acordo com a lógica
console.log(maiorOuIgual);

const igualdade = 10 === 10;
console.log(igualdade, `porque 10 é igual a 10`);

const diferente = 10 !== 11;
console.log(diferente, `porque 10 é diferente de 11`);