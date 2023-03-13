import * as elements from './createElements.js';

const renderApp = () => {
  const container = document.querySelector('.app-container');
  const header = elements.createHeader();
  const { form } = elements.createTodoForm();
  console.log('form: ', form);
  const table = elements.createTodoTable();

  container.classList.add('vh-100', 'w-100', 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center');

  container.append(header, form, table);
};

const renderTask = () => {

};

export default renderApp;
