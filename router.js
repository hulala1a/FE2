import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Specialty from './components/Specialty.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/specialty', component: Specialty }
];
  

const router = new VueRouter({
    routes
});

export default router