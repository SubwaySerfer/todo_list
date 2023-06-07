export default {
  getTasks(context) {
    let localTasks = localStorage.getItem('tasks');
    context.state.tasks = JSON.parse(localTasks);
  },
  getCurrentTasks(context, filterPriority) {
    // console.log(context.state.tasks, filterPriority);
    // let newArr = context.state.tasks;
    let newArr = [];
    if (filterPriority.length > 0) {
      context.state.tasks.filter((el) => {
        // console.log(
        //   filterPriority,
        //   el.priority,
        //   filterPriority.includes(el.priority) == true
        // );
        // return filterPriority.includes(el.priority) == true;
        if (filterPriority.includes(el.priority) == true) {
          newArr.push(el);
        }

        // console.log(el, );
      });
      // console.log('newArr: ', newArr);

      // console.log(newArr);
    }

    return (context.state.currentTasks = newArr);
  },
};
