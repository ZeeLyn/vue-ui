import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueUI from '../packages/index';


const app = createApp(App);
app.use(vueUI).use(router).mount('#app');