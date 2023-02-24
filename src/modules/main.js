/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
const taskList = document.querySelector('.todo-list');
const newTaskInput = document.querySelector('.data-input');
const addTaskButton = document.getElementById('add-task');
const inputField = document.querySelector('.data-input');
const clearAll = document.querySelector('.clear-todo');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function updateIndexes() {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  updateIndexes();
}
export { saveTasks };

function showTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('click', () => {
      task.completed = checkbox.checked;
      saveTasks();
    });

    const input = document.createElement('input');
    input.type = 'text';
    input.value = task.description;
    input.addEventListener('change', () => {
      task.description = input.value;
      saveTasks();
    });

    const deleteButton = document.createElement('a');
    deleteButton.innerHTML = '<i class="fa fa-trash-o"></i>';
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      saveTasks();
      showTasks();
    });

    const editButtons = document.createElement('a');
    editButtons.innerHTML = '<i class="far fa-edit"></i>';
    editButtons.addEventListener('click', () => {
      input.contentEditable = true;
      input.focus();
    });

    li.appendChild(checkbox);
    li.appendChild(input);
    li.appendChild(deleteButton);
    li.appendChild(editButtons);
    taskList.appendChild(li);
  });
}
export { showTasks };
function addTask() {
  const description = newTaskInput.value.trim();
  if (description) {
    const task = {
      description,
      completed: false,
      index: tasks.length + 1,
    };
    tasks.push(task);
    saveTasks();
    newTaskInput.value = '';
    showTasks();
  }
}

inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
    inputField.focus();
  }
});

addTaskButton.addEventListener('click', addTask);
showTasks();

function clearCompleted() {
  tasks = tasks.filter((task) => !task.completed);
  tasks.forEach((task, i) => task.index = i++);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showTasks();
  saveTasks();
}

clearAll.addEventListener('click', clearCompleted);
saveTasks();