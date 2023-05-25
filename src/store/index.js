import { createStore } from 'vuex';

import todoModule from './modules/todo/index';

const store = createStore({
  modules: {
    todo: todoModule,
  },
});

export default store;
