import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Menu from 'primevue/menu';
import './app.css';

createApp(App)
    .use(router)
    .use(PrimeVue)
    .component('Menu', Menu)
    .mount('#app')
