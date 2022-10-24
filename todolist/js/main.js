import TodoList from './models/TodoList.js';

const todoList = new TodoList();

document.querySelector('#addItem').addEventListener('click', () => {
  todoList.addTodo();
  todoList.renderList();
});

window.handleMarkCompleted = (name) => {
  todoList.markCompleted(name);
  todoList.renderList();
};

window.handleDelete = (name) => {
  todoList.deleteTodo(name);
  todoList.renderList();
};

document.querySelector('#two').addEventListener('click', () => {
  todoList.sortAToZ();
  todoList.renderList();
});

document.querySelector('#three').addEventListener('click', () => {
  todoList.sortZToA();
  todoList.renderList();
});
