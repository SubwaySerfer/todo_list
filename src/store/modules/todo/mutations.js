export default {
  registerTask(state, payload) {
    state.tasks.push(payload);
  },
  setLocalStorage(state) {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  },
};
