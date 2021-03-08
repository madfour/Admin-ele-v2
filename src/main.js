import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入全局样式
import '@/styles/global.less';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
