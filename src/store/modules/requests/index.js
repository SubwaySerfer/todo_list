import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
  namespaced: true,
  state() {
    return {
      requestsList: [
        {
          name: 'alex',
          tg: '@asdasd',
          message: 'my Text here',
          urlGitHub: 'https://github.com/SubwaySerfer',
        },
        { name: 'dmitro', tg: '@aaaa', message: 'Test text 2' },
      ],
    };
  },
  mutations,
  getters,
  actions,
};
