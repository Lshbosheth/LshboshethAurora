import {createApp} from 'vue'
import '@/style/style.css'
import { setupRouter } from './router';
import { setupStore } from './store';
import App from './App.vue'

const app = createApp(App);
setupStore(app);
setupRouter(app)
app.mount('#app');
