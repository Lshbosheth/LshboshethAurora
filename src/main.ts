import { createApp } from 'vue'
import App from './App.vue'

import { setupAssets } from "@/plugins";
import { setupRouter } from './router';
import { setupStore } from './store';

async function setupApp() {
    const app = createApp(App);
    setupAssets()
    setupStore(app);
    setupRouter(app)
    app.mount('#app');

}
setupApp()

