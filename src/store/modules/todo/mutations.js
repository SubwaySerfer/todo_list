export default {
  registerTask(state, payload) {
    state.tasks.push(payload);
  },
  setLocalStorage(state) {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  },
  deleteTask(state, payload) {
    state.tasks = state.tasks.filter((el, idx) => idx != payload);
  },
};
