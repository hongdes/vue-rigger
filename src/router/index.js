import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: '/hello', //报告页
      name: 'hello',
      component: resolve => require(['@/pages/Hello.vue'], resolve),
      meta: {
        permission: false,
        allowBack: true,
        noCache: true
      }
    },
  ]
})