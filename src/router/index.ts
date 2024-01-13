import type { App } from 'vue';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export function setupRouter(app: App) {
    app.use(router);
}
export default router
