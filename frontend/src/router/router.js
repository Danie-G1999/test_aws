import { createRouter, createWebHistory } from 'vue-router';

import DashboardMaster from '@/pages/master/DashboardMaster.vue';
import homePage from '@/pages/homePage.vue';
import profilePage from '@/pages/profilePage.vue';
import SettingsPage from '@/pages/settingsPage.vue';
import addContact from '@/pages/addContact.vue';

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
            {
                name: 'Setting',
                path: '/setting',
                component: SettingsPage
            },
            {
                name: 'addContact',
                path : '/add-contact/:id?',
                component: addContact
            }
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