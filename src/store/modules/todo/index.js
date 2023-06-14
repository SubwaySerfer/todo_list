import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      tasks: [],
      currentTasks: [],
    };
  },
  mutations,
  actions,
  getters,
};

//TODO:Cannot read properties of null (reading 'push')   at et.registerTask (mutations.js:3:17)
