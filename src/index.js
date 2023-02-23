import './style.css';

const task = [
  {
    taskText: 'Wash the dishes',
    completed: false,
    index: 1,
  },
  {
    taskText: 'Complete To Do list project',
    completed: false,
    index: 2,
  },
  {
    taskText: 'Submit the project by night',
    completed: false,
    index: 3,
  },
];

const listTask = document.querySelector('.todo-list');

for (let i = 0; i < task.length; i += 1) {
  const join = document.querySelector('.todo-list').innerHTML;
  listTask.innerHTML = `
<li class="listTask">
  <div class="text-data">
    <input type="checkbox" required />
    <p class="toDoText">${task[i].taskText}</p>
  </div>
  <a class="ellipsisBtn">
  <i style="font-size:24px" class="fa">&#xf142;</i></a>
</li>
${join}`;
}
