import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import Feed from '../components/Feed';
import Player from '../components/Player';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Feed',
      component: Feed,
    },
    {
      path: '/:id',
      name: 'Player',
      component: Player,
    },
  ],
});
