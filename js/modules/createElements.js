import { createElement } from '../helper/createElement.js';

export const createAppTitle = (userName) => {
  return createElement('h1', {
    className: 'text-center',
    innerHTML: `Todo App - ${userName}`,
  });
};

export const createTodoForm = () => {
  const form = createElement('form', {
    className: 'input-group mb-3',
  });
  const wrapper = createElement('div', {
    className: 'input-group-append',
  });
  const input = createElement('input', {
    className: 'form-control',
    placeholder: 'Введите название дела',
    autofocus: true,
  });
  const addButton = createElement('button', {
    className: 'btn btn-primary',
    textContent: 'Добавить дело',
    disabled: !input.value.length,
  });

  input.addEventListener('input', () => {
    addButton.disabled = !input.value.length;
  });

  wrapper.append(addButton);
  form.append(input, wrapper);

  return {
    form,
    input,
    addButton,
  };
};

export const createTodoList = () => {
  return createElement('ul', {
    className: 'list-group',
  });
};

export const createTodoItem = (name) => {
  const todoItem = createElement('li', {
    className: 'list-group-item d-flex justify-content-between align-items-center',
    textContent: name,
    id: Math.floor(Math.random() * 100),
  });
  const btnWrapper = document.createElement('div');
  const doneBtn = createElement('button', {
    className: 'btn btn-success',
    textContent: 'Готово',
  });
  const deleteBtn = createElement('button', {
    className: 'btn btn-danger',
    textContent: 'Удалить',
  });

  btnWrapper.append(doneBtn, deleteBtn);
  todoItem.append(btnWrapper);

  return {
    todoItem,
    doneBtn,
    deleteBtn,
    btnWrapper,
  };
};
