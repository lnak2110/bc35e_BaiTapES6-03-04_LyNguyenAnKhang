import { generateListHtml } from '../controllers/todo.js';
import Todo from './Todo.js';

export default class TodoList {
  list = [];

  addTodo() {
    const todoName = document.querySelector('#newTask').value;
    const todo = new Todo(todoName);
    this.list.push(todo);
    document.querySelector('#newTask').value = '';
  }

  renderList() {
    const listCompleted = this.list.filter((todo) => todo.completed);
    const listNotCompleted = this.list.filter((todo) => !todo.completed);

    const listCompletedHtml = generateListHtml(listCompleted);
    const listNotCompletedHtml = generateListHtml(listNotCompleted);

    document.querySelector('#completed').innerHTML = listCompletedHtml;
    document.querySelector('#todo').innerHTML = listNotCompletedHtml;
  }

  markCompleted(name) {
    this.list = this.list.map((todo) =>
      todo.name === name ? { ...todo, completed: !todo.completed } : todo
    );
  }

  deleteTodo(name) {
    this.list = this.list.filter((todo) => todo.name !== name);
  }

  sortAToZ() {
    this.list.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }

  sortZToA() {
    this.list.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }
}
