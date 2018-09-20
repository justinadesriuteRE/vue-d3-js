import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import InitialPage from './views/InitialPage.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/initialpage',
      name: 'initial',
      component: InitialPage,
    },
    {
      path: '/d3js',
      name: 'ddreiexample',
      // route level code-splitting
      // this generates a separate chunk (chart.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "chart" */ './views/D3js.vue'),
    },
    {
      path: '/highcharts',
      name: 'highcharts',
      // route level code-splitting
      // this generates a separate chunk (chart.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "chart" */ './views/HighCharts.vue'),
    },
  ],
});
