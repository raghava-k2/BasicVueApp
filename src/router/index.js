import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/components/Login.vue'
import Registration from '@/components/Registration.vue'
import store from '@/store';
import { user as userApi } from '@/api';

const canUserAccess = async (to, from, next) => {
  const { state } = store;
  const { user = null } = state;
  if (user) next();
  else {
    try {
      const { data } = await userApi.isAlive();
      store.state.user = data;
      next();
    } catch (e) {
      next("/login");
    }
  }
}

const hasUserAccess = (to, from, next) => {
  const { state } = store;
  const { user = null } = state;
  if (user) next("/");
  else next();
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: [canUserAccess]
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: [hasUserAccess]
  }, {
    path: '/signup',
    name: 'Signup',
    component: Registration
  }, {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
