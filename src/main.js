import Vue from 'vue'
import AuthUse from "./components/AuthUse";
import router from './router'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(AuthUse)
}).$mount('#app')