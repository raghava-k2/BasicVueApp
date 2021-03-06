import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Registration from '../components/Registration.vue'
import store from '../store';
import { user as userApi } from '../api';

const canUserAccess = async (to, from, next) => {
  const { state } = store;
  const { user = null } = state;
  store.state.blockUserAppLevel = true;
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
  store.state.blockUserAppLevel = false;
}

const isUserSessionActive = async (to, from, next) => {
  const { state } = store;
  const { user = null } = state;
  store.state.blockUserAppLevel = true;
  if (user) next("/");
  else {
    try {
      const { data } = await userApi.isAlive();
      store.state.user = data;
      next("/");
    } catch (e) {
      next();
    }
  }
  store.state.blockUserAppLevel = false;
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
    beforeEnter: [isUserSessionActive]
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
  history: createWebHistory('/'),
  routes
});

export default router
