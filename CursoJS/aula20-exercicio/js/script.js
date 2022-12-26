function meuEscopo () { // Todo corpo do meu código esta no escopo de função..

    const form = document.querySelector('.form'); // Selecionando o formulario para minha const form
    const result = document.querySelector('.result'); // Selecionando a class .result para minha const result

    const users = []; // Criando uma variavel constante array para salvar meus usuarios..

    function recevedEventForm (event) {
        event.preventDefault(); // Previnindo a ação padrão do submit, que seria o envio do form

        const nome = form.querySelector('.nome'); // Salvando as informações dos input nas variaveis
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        users.push({ // Criando um novo usuario para minha const users - .push adiciona novos valores no final do array
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(users);

        result.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recevedEventForm); // Observando submit do formulario e chamando o evento recevedEventForm
}
meuEscopo();
