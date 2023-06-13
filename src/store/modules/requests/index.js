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
          text: 'my Text here',
          urlGitHub: 'https://github.com/SubwaySerfer',
        },
        { name: 'dmitro', tg: '@aaaa', text: 'Test text 2' },
      ],
      // isValidRequest: false,
    };
  },
  mutations,
  getters,
  actions,
};
