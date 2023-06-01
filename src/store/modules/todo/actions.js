export default {
  getTasks(context) {
    let localTasks = localStorage.getItem('tasks');
    context.state.tasks = JSON.parse(localTasks);
  },
  getCurrentTasks(context, filterPriority) {
    console.log(context.state.tasks, filterPriority);
    let newArr = context.state.tasks;
    if (filterPriority.length > 0) {
      newArr = newArr.filter((el) => {
        console.log(filterPriority, el.priority);
        return filterPriority.includes(el.priority) == true;

        // console.log(el, );
      });
      console.log('newArr: ', newArr);
      // console.log(newArr);
    }
    return (context.state.currentTasks = newArr);
  },
};
