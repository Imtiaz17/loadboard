require('./bootstrap');
window.Vue = require('vue');
import store from './store';
import Vue from 'vue'
import Buefy from 'buefy'
import { getToken, setToken } from './store/auth';
import 'buefy/dist/buefy.css'
Vue.use(Buefy)
Vue.use(Buefy, {
  defaultIconPack: 'fas'
});
window.axios = require('axios');
const $axios = axios.create({
  baseURL: '/api',
 })
$axios.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + getToken(); // Set JWT token
    }
    return config;
  },
  error => {
    console.log(error); 
    Promise.reject(error);
  }
);
export default $axios;
Vue.prototype.$axios = $axios;

window.EventBus = new Vue();


import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

Vue.component('AppHome', require('./components/AppHome.vue').default);

import router from './components/router/router'
const app = new Vue({
  store,
    el: '#loadboard',
    router,
});