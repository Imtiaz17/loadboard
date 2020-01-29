import Vue from 'vue'
import store from '../../store'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import { getToken } from '../../utils/auth';

import root from "../Root.vue"
import dashboard from "../AppDashboard.vue"
import login from "../Auth/Login.vue"
import logout from "../Auth/Logout.vue"
import register from "../Auth/Register.vue"
import Read from "../Post/ReadShipment.vue"
import Profile from "../Profile/AppProfile.vue"
import myshipment from "../Post/MyShipment.vue"
const routes = [
    { path: '/', component: root, name: 'root' },
    { path: '/register', component: register, name: 'register' },
    { path: '/login', component: login, name: 'login' },
    { path: '/logout', component: logout, name: 'logout' },
    { path: '/dashboard', component: dashboard, name: 'dashboard' },
    { path: '/shipment/:shipment_id', component: Read, name: 'Read' },
    { path: '/myshipment', component: myshipment, name: 'Myshipment' },
    { path: '/profile/:username', component: Profile, name: 'profile' },
    
]
const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: 'history',
})
const whiteList = ['/','/login', '/register'];
router.beforeEach(async (to, from, next) => {
    // determine whether the user has logged in
    const hasToken = getToken();
    if (hasToken) {
        if (to.path=='/login' || to.path=='/register' ||to.path=='/') {
            // if is logged in, redirect to the home page
            next({ path: '/dashboard' });
        }
        await store.dispatch('getInfo');
        next();
    } else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
           next();
        }
        else
        {
            next('/');
        }
    }
});

// const whiteList = ['/','/login', '/register'];
// router.beforeEach(async (to, from, next) => {
//     // determine whether the user has logged in
//     const hasToken = getToken();
//     if (hasToken) {
//         if (to.path === '/login' || to.path === '/register') {
//             // if is logged in, redirect to the home page
//             next({ path: '/dashboard' });
//         }
//         await store.dispatch('getInfo');
//         next();
//     } else {
//         /* has no token*/
//         if (whiteList.indexOf(to.path) !== -1) {
//             // in the free login whitelist, go directly
//            next();
//         }
//         else
//         {
//             next('/');
//         }
//     }
// });
export default router
