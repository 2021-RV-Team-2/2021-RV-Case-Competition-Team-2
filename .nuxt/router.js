import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _26d31f18 = () => interopDefault(import('../pages/findmovie/index.vue' /* webpackChunkName: "pages/findmovie/index" */))
const _f4867e48 = () => interopDefault(import('../pages/movies/index.vue' /* webpackChunkName: "pages/movies/index" */))
const _fb3afb82 = () => interopDefault(import('../pages/providers/index.vue' /* webpackChunkName: "pages/providers/index" */))
const _9a6ef5fe = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _4057345b = () => interopDefault(import('../pages/tv/index.vue' /* webpackChunkName: "pages/tv/index" */))
const _cf5ee6bc = () => interopDefault(import('../pages/findmovie/MovieListing.vue' /* webpackChunkName: "pages/findmovie/MovieListing" */))
const _630e06ed = () => interopDefault(import('../pages/findmovie/TVShow.vue' /* webpackChunkName: "pages/findmovie/TVShow" */))
const _19ea773a = () => interopDefault(import('../pages/movies/MovieListing.vue' /* webpackChunkName: "pages/movies/MovieListing" */))
const _68fdddfd = () => interopDefault(import('../pages/tv/TVShows.vue' /* webpackChunkName: "pages/tv/TVShows" */))
const _85d23c28 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _26d31f18,
    name: "findmovie"
  }, {
    path: "/movies",
    component: _f4867e48,
    name: "movies"
  }, {
    path: "/providers",
    component: _fb3afb82,
    name: "providers"
  }, {
    path: "/search",
    component: _9a6ef5fe,
    name: "search"
  }, {
    path: "/tv",
    component: _4057345b,
    name: "tv"
  }, {
    path: "/findmovie/MovieListing",
    component: _cf5ee6bc,
    name: "findmovie-MovieListing"
  }, {
    path: "/findmovie/TVShow",
    component: _630e06ed,
    name: "findmovie-TVShow"
  }, {
    path: "/movies/MovieListing",
    component: _19ea773a,
    name: "movies-MovieListing"
  }, {
    path: "/tv/TVShows",
    component: _68fdddfd,
    name: "tv-TVShows"
  }, {
    path: "/",
    component: _85d23c28,
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
