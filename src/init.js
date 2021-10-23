import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import VueMaterial from 'vue-material';
// import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css'


Vue.filter('capitalize', function (value) {
    if (value && typeof value === "string") {
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return ''
})

Vue.use(VueMaterial)
// Vue.use(MdButton)
// Vue.use(MdContent)
// Vue.use(MdTabs)
