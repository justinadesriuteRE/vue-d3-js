import Vue from 'vue';
import App from './App.vue';
import router from './router';

import HighchartsVue from 'highcharts-vue';
import Highcharts from 'highcharts';
import stockInit from 'highcharts/modules/stock';
import d3 from 'd3';

stockInit(Highcharts);

Vue.use(HighchartsVue);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
