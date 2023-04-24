import {createAppTitle, createTodoForm, createTodoItem, createTodoList} from './modules/createElements.js';
import {completeTodoItem, deleteTodoItem} from './modules/control.js';

function createTodoApp() {
  const userName = prompt('Представьтесь, пожалуйста');
  const key = 'tasks';
  let todoArray = [];

  localStorage.setItem('userName', userName);

  const appContainer = document.querySelector('.app-container');
  const appTitle = createAppTitle(userName);
  const appForm = createTodoForm();
  const appList = createTodoList();

  appContainer.append(appTitle, appForm.form, appList);

  if (localStorage.getItem(key)) {
    todoArray = JSON.parse(localStorage.getItem(key))
      .filter((todo) => todo.user === localStorage.getItem('userName'));

    for (const obj of todoArray) {
      const todoItem = createTodoItem(appForm.input.value);

      todoItem.todoItem.textContent = obj.name;
      todoItem.todoItem.id = obj.id;

      if (obj.done === true) {
        todoItem.todoItem.classList.add('list-group-item-success');
      } else {
        todoItem.todoItem.classList.remove('list-group-item-success');
      }

      completeTodoItem(todoItem.todoItem, todoItem.doneBtn);
      deleteTodoItem(todoItem.todoItem, todoItem.deleteBtn);

      appList.append(todoItem.todoItem);
      todoItem.todoItem.append(todoItem.btnWrapper);
    }
  }

  appForm.form.addEventListener('submit', e => {
    e.preventDefault();

    const todoItem = createTodoItem(appForm.input.value);

    if (!appForm.input.value) {
      return;
    }

    completeTodoItem(todoItem.todoItem, todoItem.doneBtn);
    deleteTodoItem(todoItem.todoItem, todoItem.deleteBtn);

    let localStorageData = localStorage.getItem(key);

    if (localStorageData == null) {
      todoArray = [];
    } else {
      todoArray = JSON.parse(localStorageData);
    }

    const createItemObj = (arr) => {
      const itemObj = {};
      itemObj.user = localStorage.getItem('userName');
      itemObj.name = appForm.input.value;
      itemObj.id = todoItem.todoItem.id;
      itemObj.done = false;

      arr.push(itemObj);
    };

    createItemObj(todoArray);
    localStorage.setItem(key, JSON.stringify(todoArray));

    appList.append(todoItem.todoItem);
    appForm.input.value = '';
    appForm.addButton.disabled = !appForm.addButton.disabled;
  });
}

createTodoApp();
