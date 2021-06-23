import Vue from 'vue'
import Router from 'vue-router'

import MyPage from '~/pages/index.vue'
import Content from '~/components/Content.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: MyPage,
        children: [
          {
            path: 'about',
            component: Content,
          },
          {
            path: 'works',
            component: Content,
          },
          {
            path: 'contact',
            component: Content,
          },
          {
            path: '',
            component: Content,
          },
        ],
      },
    ],
  })
}
