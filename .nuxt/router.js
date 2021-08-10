import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _713be8cc = () => interopDefault(import('../pages/movies/index.vue' /* webpackChunkName: "pages/movies/index" */))
const _c370a61e = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _93f0576a = () => interopDefault(import('../pages/tv/index.vue' /* webpackChunkName: "pages/tv/index" */))
const _7b08fd6c = () => interopDefault(import('../pages/movies/MovieListing.vue' /* webpackChunkName: "pages/movies/MovieListing" */))
const _350641ed = () => interopDefault(import('../pages/tv/TVShows.vue' /* webpackChunkName: "pages/tv/TVShows" */))
const _257bc7fc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/movies",
    component: _713be8cc,
    name: "movies"
  }, {
    path: "/search",
    component: _c370a61e,
    name: "search"
  }, {
    path: "/tv",
    component: _93f0576a,
    name: "tv"
  }, {
    path: "/movies/MovieListing",
    component: _7b08fd6c,
    name: "movies-MovieListing"
  }, {
    path: "/tv/TVShows",
    component: _350641ed,
    name: "tv-TVShows"
  }, {
    path: "/",
    component: _257bc7fc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
