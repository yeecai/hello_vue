// document.getElementById('app').innerHTML='Hello vue';

import Vue from 'vue';
import App from './app.vue';
import './style.css';


new Vue({
    el: '#app',
    render: h => {
        return h(app)
    }
});