import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import AppSpinner from "@/components/shared/AppSpinner.vue";


import VueMaterial from 'vue-material';
// import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css'
import moment from 'moment';



Vue.filter('capitalize', function (value) {
    if (value && typeof value === "string") {
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return ''
})

Vue.filter('formatDate', function (value, formatType = "LL") {
    if (!value) return ""

    return moment(value).format(formatType)
})


Vue.component('AppSpinner', AppSpinner);

Vue.use(VueMaterial)

// Vue.use(MdButton)
// Vue.use(MdContent)
// Vue.use(MdTabs)
