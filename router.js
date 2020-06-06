import VueRouter from 'vue-router'
import Home from './components/Home.vue'
const Specialty = () => import(/* webpackChunkName: "specialty" */ './components/Specialty.vue')

const routes = [
    { path: '/', component: Home },
    { path: '/specialty', component: Specialty }
];
  

const router = new VueRouter({
    routes
});

/*router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    const targetPath = router.history.pending.fullPath;
    if(isChunkLoadFailed){
        router.replace(targetPath);
    }
});*/

export default router