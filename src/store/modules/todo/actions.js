export default {
  getTasks(context) {
    let localTasks = localStorage.getItem('tasks');
    context.state.tasks = JSON.parse(localTasks);
  },
};
