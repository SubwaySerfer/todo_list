import { createStore } from 'vuex';

import todoModule from './modules/todo/index';
import homeModule from './modules/home/index';
import requestsModule from './modules/requests/index';

const store = createStore({
  modules: {
    todo: todoModule,
    home: homeModule,
    requests: requestsModule,
  },
});

export default store;
