import 'bootstrap.js';
import 'bootstrap.css';

import Vue from 'vue';

import root from './components/app.vue';

const app = new Vue
(
    {
        el: '#app',
        template: '<root></root>',
        components:
            {
                root: root
            }
    }
);