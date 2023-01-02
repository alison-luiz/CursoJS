const inputTask = document.querySelector(".input-add-task"); // Selecionando o input
const btnTask = document.querySelector(".btn-task"); // Selecionando o botão
const task = document.querySelector(".task"); // Selecionando a <ul>

// Esta função tem objetivo de criar o elemento do html <li> e retornar
function createLi() {
  const li = document.createElement("li");
  return li;
}

// Esta função principal vai fazer o seguinte:
// - Salvar em uma const 'li' os valores da função createLi() - que no caso cria o elemento li do html
// - Salvar na constante  'li' - innetText - o valor passado para criar a task
// - Criar um filho na <ul> - passando os valores salvos na const 'li'
// - Chamar a função que limpa o input e o deixa em foco
// - Chamar a função para criar o botão Clear. - adicionado como filho do 'li'
// - Chamar a função saveTasks() para salvar a informação no Storage
function createTask(TaskValue) {
  const li = createLi();
  li.innerText = TaskValue;
  task.appendChild(li);
  clearInput();
  createBtnClear(li);
  saveTasks();
}

// Função para limpar o valor do input e o deixar em foco na pagina.
function clearInput() {
  inputTask.value = "";
  inputTask.focus();
}

// Função vai executar o seguinte:
// - Pegar o texto passado pelo argumento e adicionar um espaço em branco.
// - Criar uma const com elemento de botão do html.
// - Colocar um nome neste botão.
// - Setar atributos de classe e title neste botão.
// - Adicionar o botão como um filho do 'li' - este 'li' já foi adicionado a pagina anteriormente.
function createBtnClear(li) {
  li.innerText += " ";
  const btnClear = document.createElement("button");
  btnClear.innerText = "Clear";
  btnClear.setAttribute("class", "btn-clear");
  btnClear.setAttribute("title", "Clear task!");
  li.appendChild(btnClear);
}

// Toda vez que requisitada esta função vai executar:
// - Criar uma const onde ira salvar todos elementos 'li'
// - Criar uma const vazia de arrays
// - Laço de repetição na const dos elementos 'li' salvando no array..
// - Criar uma const JSON salvando informação desse array
function saveTasks() {
  const liTasks = task.querySelectorAll("li");
  const listTasks = [];

  for (let task of liTasks) {
    let TasksText = task.innerText;
    TasksText = TasksText.replace("Clear", "").trim();
    listTasks.push(TasksText);
  }
  const tasksJson = JSON.stringify(listTasks);
  localStorage.setItem("tasks", tasksJson);
}

// Ao clicar no botão 'Clear" ele faz a validação e remove todo elemento da pagina com .parentElement
document.addEventListener("click", function (e) {
  const element = e.target;
  if (element.classList.contains("btn-clear")) {
    element.parentElement.remove();
    saveTasks();
  }
});

// Ao clicar no botão faz a validação do conteudo e chama a função createTask() - passando o valor do input
btnTask.addEventListener("click", function () {
  if (!inputTask.value) return;
  createTask(inputTask.value);
});

// Ao clicar no botão faz a validação do conteudo e chama a função createTask() - passando o valor do input
inputTask.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTask.value) return;
    createTask(inputTask.value);
  }
});

// Toda vez que abrir a pagina esta função será a primeira a ser executada, puxando a informação salva
// e criando os elementos da pagina pela função createTask() - passando as informações salvas.
function addSavedTasks() {
  const tasks = localStorage.getItem("tasks");
  const listTasks = JSON.parse(tasks);

  for (let task of listTasks) {
    createTask(task);
  }
}

addSavedTasks();
