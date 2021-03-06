import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './style/app.scss'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
