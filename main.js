import Vue from 'vue';
import App from './components/App.vue'
import store from './store'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter);

//Vue.prototype.$axios = axios;

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});