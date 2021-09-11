import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: require('./home.vue').default,
            children: [
                {
                    path: '/home/sample',
                    component: require('./sample.vue').default,
                    children: [
                        {
                            path: '/home/sample/test',
                            component: require('./test.vue').default
                        }
                    ]
                }
            ]
        },
        {
            path: '*',
            component: require('./404.vue').default
        }
    ]
});