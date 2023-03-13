const createLogo = (title) => {
  const logo = document.createElement('h1');
  logo.innerHTML = title;

  return logo;
};

export const createHeader = () => {
  const header = document.createElement('header');
  const logo = createLogo('ToDo App');

  header.append(logo);

  return header;
};

export const createTodoForm = () => {
  const form = document.createElement('form');
  const label = document.createElement('label');
  const inputTodo = document.createElement('input');
  const addTodoButton = document.createElement('button');
  const resetTodoButton = document.createElement('button');

  form.classList.add('d-flex', 'align-items-center', 'mb-3');

  label.classList.add('form-group', 'me-3', 'mb-0');

  inputTodo.classList.add('form-control');
  inputTodo.placeholder = 'Ввести задачу';

  addTodoButton.classList.add('btn', 'btn-primary', 'me-3');
  addTodoButton.type = 'submit';
  addTodoButton.textContent = 'Сохранить';
  addTodoButton.disabled = true;

  resetTodoButton.classList.add('btn', 'btn-warning');
  resetTodoButton.type = 'reset';
  resetTodoButton.textContent = 'Очистить';

  label.append(inputTodo);
  form.append(label, addTodoButton, resetTodoButton);

  return {
    form,
    inputTodo,
    addTodoButton,
  };
};

const createRow = (taskDiff, taskCount, taskTitle, taskStatus) => {
  const row = document.createElement('tr');

  row.insertAdjacentHTML('afterbegin', `
    <tr class="${taskDiff}">
      <td>${taskCount}</td>
      <td class="task">${taskTitle}</td>
      <td>${taskStatus}</td>
      <td>
        <button class="btn btn-danger">Удалить</button>
        <button class="btn btn-success">Завершить</button>
      </td>
    </tr>
  `);

  return row;
};

export const createTodoTable = () => {
  const wrapper = document.createElement('div');
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  // const tr = createRow('table-light', 1, 'Задача', 'Выполнено');

  wrapper.classList.add('table-wrapper');
  table.classList.add('table', 'table-hover', 'table-bordered');
  thead.insertAdjacentHTML('afterbegin', `
    <tr>
      <th>№</th>
      <th>Задача</th>
      <th>Статус</th>
      <th>Действия</th>
    </tr>
  `);
  // tbody.append(tr);

  table.append(thead, tbody);
  wrapper.append(table);

  return wrapper;
};

