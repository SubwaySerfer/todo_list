import { createStore } from 'vuex';

import todoModule from './modules/todo/index';
import homeModule from './modules/home/index';

const store = createStore({
  modules: {
    todo: todoModule,
    home: homeModule,
  },
});

export default store;
