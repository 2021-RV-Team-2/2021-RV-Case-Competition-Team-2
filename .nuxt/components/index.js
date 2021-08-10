import { wrapFunctional } from './utils'

export { default as MovieList } from '../../components/MovieList.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Search } from '../../components/Search.vue'
export { default as TVList } from '../../components/TVList.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'

export const LazyMovieList = import('../../components/MovieList.vue' /* webpackChunkName: "components/movie-list" */).then(c => wrapFunctional(c.default || c))
export const LazyNuxtLogo = import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const LazySearch = import('../../components/Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c))
export const LazyTVList = import('../../components/TVList.vue' /* webpackChunkName: "components/t-v-list" */).then(c => wrapFunctional(c.default || c))
export const LazyTutorial = import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
