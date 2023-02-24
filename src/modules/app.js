/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
import { showTasks, saveTasks } from './main.js';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const clearAll = document.querySelector('.clear-todo');
function clearCompleted() {
  tasks = tasks.filter((task) => !task.completed);
  tasks.forEach((task, i) => task.index = i++);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showTasks();
  saveTasks();
}
clearAll.addEventListener('click', clearCompleted);
saveTasks();
