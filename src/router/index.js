import { createRouter, createWebHistory } from 'vue-router';

import NotFound from '../pages/NotFound';
import TodoList from '../pages/todo/TodoList';
import ContactMe from '../pages/contacts/ContactMe';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/todo',
    },
    {
      path: '/todo',
      name: 'home',
      component: TodoList,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactMe,
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

export default router;
