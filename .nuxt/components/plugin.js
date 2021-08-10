import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  FindMovie: () => import('../../components/FindMovie.vue' /* webpackChunkName: "components/find-movie" */).then(c => wrapFunctional(c.default || c)),
  HomeBanner: () => import('../../components/HomeBanner.vue' /* webpackChunkName: "components/home-banner" */).then(c => wrapFunctional(c.default || c)),
  HomeMovieList: () => import('../../components/HomeMovieList.vue' /* webpackChunkName: "components/home-movie-list" */).then(c => wrapFunctional(c.default || c)),
  HomeTVList: () => import('../../components/HomeTVList.vue' /* webpackChunkName: "components/home-t-v-list" */).then(c => wrapFunctional(c.default || c)),
  MovieList: () => import('../../components/MovieList.vue' /* webpackChunkName: "components/movie-list" */).then(c => wrapFunctional(c.default || c)),
  MovieReviews: () => import('../../components/MovieReviews.vue' /* webpackChunkName: "components/movie-reviews" */).then(c => wrapFunctional(c.default || c)),
  NuxtLogo: () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c)),
  Search: () => import('../../components/Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c)),
  TVList: () => import('../../components/TVList.vue' /* webpackChunkName: "components/t-v-list" */).then(c => wrapFunctional(c.default || c)),
  TVReviews: () => import('../../components/TVReviews.vue' /* webpackChunkName: "components/t-v-reviews" */).then(c => wrapFunctional(c.default || c)),
  Tutorial: () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
