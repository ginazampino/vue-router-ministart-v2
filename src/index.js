import App from './App.vue';
import Vue from 'vue';
import Router from './router.js';

new Vue({
    components: { App },
    el: '#app',
    router: Router,
    template: '<App></App>'
});