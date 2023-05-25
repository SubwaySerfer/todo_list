import { createRouter, createWebHistory } from 'vue-router';

import NotFound from '../pages/NotFound';
import TodoRegister from '../pages/todo/TodoRegister';
import ContactMe from '../pages/contacts/ContactMe';
import HomeList from '../pages/home/HomeList';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeList,
    },
    {
      path: '/todo',
      name: 'todo',
      component: '',
      children: [
        {
          path: 'register',
          name: 'todoRegister',
          component: TodoRegister,
        },
      ],
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
