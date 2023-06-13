import mutations from './mutations';
import getters from './getters';

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
    };
  },
  mutations,
  getters,
};
