const inputTask = document.querySelector(".input-add-task");
const btnTask = document.querySelector(".btn-task");
const task = document.querySelector(".task");
let parentNodeEdit;
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
  createBtn(li, 'ClearEdit');
  saveTasks();
}

function clearInput() {
  inputTask.value = "";
  inputTask.focus();
}

function createBtn(element, typeBtn) {
  if (typeBtn === 'ClearEdit') {
    element.innerText += " ";
    const btnClear = document.createElement("button");
    const btnEdit = document.createElement("button");
    btnClear.innerText = "Clear";
    btnEdit.innerText = "Edit";
    btnClear.setAttribute("class", "btn-clear");
    btnEdit.setAttribute("class", "btn-edit");
    element.appendChild(btnClear);
    element.appendChild(btnEdit);
  }
  if (typeBtn === 'SaveCancel') {
    const btnSave = document.createElement('button');
    const btnCancel = document.createElement("button");
    btnSave.innerText = "Save";
    btnCancel.innerText = "Cancel";
    btnSave.setAttribute("class", "btn-save");
    btnCancel.setAttribute("class", "btn-cancel");
    inputTask.parentNode.appendChild(btnSave);
    inputTask.parentNode.appendChild(btnCancel);
  }
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
      parentNodeEdit = element.parentNode;
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
  createBtn(edit, 'SaveCancel');
}

document.addEventListener('click', function(e) {
  const element = e.target;
  if (element.classList.contains("btn-save")) {
    if (!inputTask.value) return;
    saveBtnClick(element);
  }
  if (element.classList.contains("btn-cancel")) {
    cancelBtnClick(element);
  }
});

function saveBtnClick(element) {
  taskEdit = inputTask.value;
  parentNodeEdit.innerText = taskEdit + ' ';
  createBtn(parentNodeEdit, 'ClearEdit')
  element.parentElement.querySelector('.btn-cancel').remove();
  element.remove();
  inputTask.parentNode.appendChild(btnTask);
  inputTask.value = '';
  inputTask.focus();
  controlEditing = false;
  saveTasks();
}

function cancelBtnClick(element) {
  createBtn(parentNodeEdit, 'ClearEdit')
  element.parentElement.querySelector('.btn-save').remove();
  element.remove(); 
  inputTask.parentNode.appendChild(btnTask);
  inputTask.value = '';
  inputTask.focus();
  controlEditing = false;
}

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
