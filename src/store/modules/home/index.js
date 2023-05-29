import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      weather: null,
      dailyRate: null,
      currentValute: null,
      currentValuteIdx: 0,
    };
  },
  mutations,
  actions,
  getters,
};
