import auth from './modules/auth.js';
import renderApp from './modules/render.js';
import { disabledForm } from './modules/control.js';

const init = () => {
  // auth();
  renderApp();
  disabledForm();
};

init();
