import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4ea1f780 = () => interopDefault(import('../pages/findmovie/index.vue' /* webpackChunkName: "pages/findmovie/index" */))
const _14397550 = () => interopDefault(import('../pages/movies/index.vue' /* webpackChunkName: "pages/movies/index" */))
const _3723ed6a = () => interopDefault(import('../pages/providers/index.vue' /* webpackChunkName: "pages/providers/index" */))
const _41453975 = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _13a842cf = () => interopDefault(import('../pages/tv/index.vue' /* webpackChunkName: "pages/tv/index" */))
const _fdc57fd4 = () => interopDefault(import('../pages/findmovie/MovieListing.vue' /* webpackChunkName: "pages/findmovie/MovieListing" */))
const _42736161 = () => interopDefault(import('../pages/findmovie/TVShow.vue' /* webpackChunkName: "pages/findmovie/TVShow" */))
const _24f8cf74 = () => interopDefault(import('../pages/movies/MovieListing.vue' /* webpackChunkName: "pages/movies/MovieListing" */))
const _a775c11e = () => interopDefault(import('../pages/tv/TVShows.vue' /* webpackChunkName: "pages/tv/TVShows" */))
const _350187f8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4ea1f780,
    name: "findmovie"
  }, {
    path: "/movies",
    component: _14397550,
    name: "movies"
  }, {
    path: "/providers",
    component: _3723ed6a,
    name: "providers"
  }, {
    path: "/search",
    component: _41453975,
    name: "search"
  }, {
    path: "/tv",
    component: _13a842cf,
    name: "tv"
  }, {
    path: "/findmovie/MovieListing",
    component: _fdc57fd4,
    name: "findmovie-MovieListing"
  }, {
    path: "/findmovie/TVShow",
    component: _42736161,
    name: "findmovie-TVShow"
  }, {
    path: "/movies/MovieListing",
    component: _24f8cf74,
    name: "movies-MovieListing"
  }, {
    path: "/tv/TVShows",
    component: _a775c11e,
    name: "tv-TVShows"
  }, {
    path: "/",
    component: _350187f8,
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
