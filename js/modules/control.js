import * as elements from './createElements.js';

export const disabledForm = () => {
  const { inputTodo } = elements.createTodoForm();
  console.log('inputTodo: ', inputTodo);
  const inputTodo1 = document.querySelector('.form-control');
  console.log('inputTodo1: ', inputTodo1);
  const { addTodoButton } = elements.createTodoForm();

  inputTodo.addEventListener('input', e => {
    if (inputTodo.value !== '') {
      addTodoButton.disabled = false;
    } else {
      addTodoButton.disabled = true;
    }
  });
};
