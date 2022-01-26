import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Menu from 'primevue/menu';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Password from 'primevue/password';
import Divider from 'primevue/divider';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import FileUpload from 'primevue/fileupload';
import Image from 'primevue/image';
import ProgressSpinner from 'primevue/progressspinner';
import BlockUI from 'primevue/blockui';
import store from './store';
//import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/themes/lara-dark-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './app.css';

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.use(store);
app.component('Menu', Menu);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Password', Password);
app.component('Divider', Divider);
app.component('Toast', Toast);
app.component('FileUpload', FileUpload);
app.component('Image', Image);
app.component('ProgressSpinner', ProgressSpinner);
app.component('BlockUI', BlockUI);
app.mount('#app');
