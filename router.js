import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '~/pages/index.vue'
import Content from '~/components/Content.vue'

Vue.use(Router)

export function createRouter(
  ssrContext,
  createDefaultRouter,
  routerOptions,
  config
) {
  const options =
    routerOptions || createDefaultRouter(ssrContext, config).options

  return new Router({
    ...options,
    routes: [
      {
        path: '/',
        component: HomePage,
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
      ...fixRoutes(options.routes),
    ],
  })
}

function fixRoutes(defaultRoutes) {
  // default routes that come from `pages/`
  return defaultRoutes.filter((route) => !(route.path === '/'))
}
