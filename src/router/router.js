import { createRouter, createWebHistory } from 'vue-router';

import DashboardMaster from '@/pages/master/DashboardMaster.vue';
import homePage from '@/pages/homePage.vue';
import profilePage from '@/pages/profilePage.vue';

const routes = [
    {
        name: 'Dashboard',
        path: '/',
        component: DashboardMaster,
        children: [
            {
                name: 'Home',
                path: '/home',
                component: homePage
            },
            {
                name: 'Profile',
                path: '/profile',
                component: profilePage
            },
        ]
    }
    
];

const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}