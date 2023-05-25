export default {
  registerTask(state, payload) {
    state.tasks.push(payload);
  },
};
