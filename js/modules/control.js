export const changeItemDone = (arr, item) => {
  arr.map(obj => {
    if (obj.id === item.id && obj.done === false) {
      obj.done = true;
    } else if (obj.id === item.id && obj.done === true) {
      obj.done = false;
    }
  });
};

export const completeTodoItem = (item, btn) => {
  btn.addEventListener('click', () => {
    const todoArray = JSON.parse(localStorage.getItem('tasks'));
    item.classList.toggle('list-group-item-success');
    changeItemDone(todoArray, item);
    localStorage.setItem('tasks', JSON.stringify(todoArray));
  });
};

export const deleteTodoItem = (item, btn) => {
  btn.addEventListener('click', () => {
    if (confirm('Удалить дело?')) {
      const todoArray = JSON.parse(localStorage.getItem('tasks'));
      const newList = todoArray.filter(obj => obj.id !== item.id);
      localStorage.setItem('tasks', JSON.stringify(newList));
      item.remove();
    }
  });
};
