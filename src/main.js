import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Menu from 'primevue/menu';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import './app.css';
//import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/themes/lara-dark-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

createApp(App)
    .use(router)
    .use(PrimeVue)
    .component('Menu', Menu)
    .component('InputText', InputText)
    .component('Button', Button)
    .mount('#app')
