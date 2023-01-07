const inputTask = document.querySelector(".input-add-task");
const btnTask = document.querySelector(".btn-task");
const task = document.querySelector(".task");
let positionArray;
let taskEdit;
let controlEditing = false

function createLi() {
  const li = document.createElement("li");
  return li;
}

function createTask(TaskValue) {
  const li = createLi();
  li.innerText = TaskValue;
  task.appendChild(li);
  clearInput();
  createBtn(li);
  saveTasks();
}

function clearInput() {
  inputTask.value = "";
  inputTask.focus();
}

function createBtn(li) {
  li.innerText += " ";
  const btnClear = document.createElement("button");
  const btnEdit = document.createElement("button");
  btnClear.innerText = "Clear";
  btnEdit.innerText = "Edit";
  btnClear.setAttribute("class", "btn-clear");
  btnClear.setAttribute("title", "Clear task!");
  btnEdit.setAttribute("class", "btn-edit");
  btnEdit.setAttribute("title", "Edit task!");
  li.appendChild(btnClear);
  li.appendChild(btnEdit);
}

function saveTasks() {
  const liTasks = task.querySelectorAll("li");
  const listTasks = [];
  for (let task of liTasks) {
    let TasksText = task.innerText;
    TasksText = TasksText.replace("Clear", "").trim();
    TasksText = TasksText.replace("Edit", "").trim();
    listTasks.push(TasksText);
  }
  const tasksJson = JSON.stringify(listTasks);
  localStorage.setItem("tasks", tasksJson);
}

document.addEventListener("click", function (e) {
  const element = e.target;
  if (element.classList.contains("btn-clear")) {
    if (controlEditing === false) {
      element.parentElement.remove();
      saveTasks();
    }
  }
});

document.addEventListener("click", function(e) {
  const element = e.target;
  if (controlEditing === false) {
    if (element.classList.contains("btn-edit")) {
      taskEdit = element.parentNode.textContent;
      taskEdit = taskEdit.replace(" ClearEdit", "");
      positionArray = element.parentNode
      buttonAddTask = document.querySelector('.btn-task');
      document.querySelector('.btn-task').remove();
      element.parentElement.querySelector('.btn-clear').remove();
      element.remove();
      controlEditing = true;
      editTaskInput(taskEdit);
    }
  }
});

function editTaskInput(edit) {
  inputTask.value = edit;
  inputTask.focus();
      const btnSave = document.createElement('button');
      const btnCancel = document.createElement("button");
      btnSave.innerText = "Save";
      btnCancel.innerText = "Cancel";
      btnSave.setAttribute("class", "btn-save");
      btnSave.setAttribute("title", "Save task!");
      btnCancel.setAttribute("class", "btn-cancel");
      btnCancel.setAttribute("title", "Cancel edit!");
      inputTask.parentNode.appendChild(btnSave);
      inputTask.parentNode.appendChild(btnCancel);
}

document.addEventListener('click', function(e) {
  const element = e.target;
  if (element.classList.contains("btn-save")) {
    if (!inputTask.value) return;
    taskEdit = inputTask.value;
    positionArray.innerText = taskEdit + ' ';
    const btnClear = document.createElement("button");
    const btnEdit = document.createElement("button");
    btnClear.innerText = "Clear";
    btnEdit.innerText = "Edit";
    btnClear.setAttribute("class", "btn-clear");
    btnClear.setAttribute("title", "Clear task!");
    btnEdit.setAttribute("class", "btn-edit");
    btnEdit.setAttribute("title", "Edit task!");
    positionArray.appendChild(btnClear);
    positionArray.appendChild(btnEdit);
    controlEditing = false;
    element.parentElement.querySelector('.btn-cancel').remove();
    element.remove();
    inputTask.parentNode.appendChild(btnTask);
    inputTask.value = '';
    inputTask.focus();
    saveTasks();
  }
  if (element.classList.contains("btn-cancel")) {
    element.parentElement.querySelector('.btn-save').remove();
    element.remove(); 
    inputTask.parentNode.appendChild(btnTask);
    inputTask.value = '';
    inputTask.focus();
    const btnClear = document.createElement("button");
    const btnEdit = document.createElement("button");
    btnClear.innerText = "Clear";
    btnEdit.innerText = "Edit";
    btnClear.setAttribute("class", "btn-clear");
    btnClear.setAttribute("title", "Clear task!");
    btnEdit.setAttribute("class", "btn-edit");
    btnEdit.setAttribute("title", "Edit task!");
    positionArray.appendChild(btnClear);
    positionArray.appendChild(btnEdit);
    controlEditing = false;
  }
});

btnTask.addEventListener("click", function () {
  if (!inputTask.value) return;
  createTask(inputTask.value);
});

inputTask.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (controlEditing === false) {
      if (!inputTask.value) return;
      createTask(inputTask.value);
    }
  }
});

function addSavedTasks() {
  const tasks = localStorage.getItem("tasks");
  const listTasks = JSON.parse(tasks);

  for (let task of listTasks) {
    createTask(task);
  }
}

addSavedTasks();
