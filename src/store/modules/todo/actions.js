export default {
  getTasks(context) {
    let localTasks = localStorage.getItem('tasks');
    context.state.tasks = JSON.parse(localTasks);
  },
  getCurrentTasks(context, filterPriority) {
    let newArr = [];
    if (filterPriority.length > 0) {
      context.state.tasks.filter((el) => {
        if (filterPriority.includes(el.priority) == true) {
          newArr.push(el);
        }
      });

      return (context.state.currentTasks = newArr);
    } else {
      return (context.state.currentTasks = context.state.tasks);
    }
  },
};
