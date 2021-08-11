import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _56852665 = () => interopDefault(import('../pages/findmovie/index.vue' /* webpackChunkName: "pages/findmovie/index" */))
const _5796388b = () => interopDefault(import('../pages/movies/index.vue' /* webpackChunkName: "pages/movies/index" */))
const _f6bc06a0 = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _0545db8a = () => interopDefault(import('../pages/tv/index.vue' /* webpackChunkName: "pages/tv/index" */))
const _735114de = () => interopDefault(import('../pages/findmovie/MovieListing.vue' /* webpackChunkName: "pages/findmovie/MovieListing" */))
const _36f60f1c = () => interopDefault(import('../pages/findmovie/TVShow.vue' /* webpackChunkName: "pages/findmovie/TVShow" */))
const _3e8a66aa = () => interopDefault(import('../pages/movies/MovieListing.vue' /* webpackChunkName: "pages/movies/MovieListing" */))
const _a6411528 = () => interopDefault(import('../pages/tv/TVShows.vue' /* webpackChunkName: "pages/tv/TVShows" */))
const _0902211d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/findmovie",
    component: _56852665,
    name: "findmovie"
  }, {
    path: "/movies",
    component: _5796388b,
    name: "movies"
  }, {
    path: "/search",
    component: _f6bc06a0,
    name: "search"
  }, {
    path: "/tv",
    component: _0545db8a,
    name: "tv"
  }, {
    path: "/findmovie/MovieListing",
    component: _735114de,
    name: "findmovie-MovieListing"
  }, {
    path: "/findmovie/TVShow",
    component: _36f60f1c,
    name: "findmovie-TVShow"
  }, {
    path: "/movies/MovieListing",
    component: _3e8a66aa,
    name: "movies-MovieListing"
  }, {
    path: "/tv/TVShows",
    component: _a6411528,
    name: "tv-TVShows"
  }, {
    path: "/",
    component: _0902211d,
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
