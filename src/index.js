import Vue from 'vue';
import App from './App';
import Router from 'vue-router'
import router from './router';
console.log(router)
Vue.use(router);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')