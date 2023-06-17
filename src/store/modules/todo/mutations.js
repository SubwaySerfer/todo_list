export default {
  registerTask(state, payload) {
    if (!state.tasks) {
      state.tasks = [];
    }
    state.tasks.push(payload);
  },
  setLocalStorage(state) {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  },
  getLocalStorage(state) {
    state.tasks = JSON.parse(localStorage.getItem('tasks'));
  },
  deleteTask(state, payload) {
    state.tasks = state.tasks.filter((el, idx) => idx != payload);
  },
};
