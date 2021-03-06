import { wrapFunctional } from './utils'

export { default as FindMovie } from '../../components/FindMovie.vue'
export { default as FindMovieHome } from '../../components/FindMovieHome.vue'
export { default as HomeBanner } from '../../components/HomeBanner.vue'
export { default as HomeCarousel } from '../../components/HomeCarousel.vue'
export { default as HomeMovieList } from '../../components/HomeMovieList.vue'
export { default as HomeTVList } from '../../components/HomeTVList.vue'
export { default as MovieList } from '../../components/MovieList.vue'
export { default as MovieReviews } from '../../components/MovieReviews.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as ProviderList } from '../../components/ProviderList.vue'
export { default as Search } from '../../components/Search.vue'
export { default as TVList } from '../../components/TVList.vue'
export { default as TVReviews } from '../../components/TVReviews.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'

export const LazyFindMovie = import('../../components/FindMovie.vue' /* webpackChunkName: "components/find-movie" */).then(c => wrapFunctional(c.default || c))
export const LazyFindMovieHome = import('../../components/FindMovieHome.vue' /* webpackChunkName: "components/find-movie-home" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeBanner = import('../../components/HomeBanner.vue' /* webpackChunkName: "components/home-banner" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeCarousel = import('../../components/HomeCarousel.vue' /* webpackChunkName: "components/home-carousel" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeMovieList = import('../../components/HomeMovieList.vue' /* webpackChunkName: "components/home-movie-list" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeTVList = import('../../components/HomeTVList.vue' /* webpackChunkName: "components/home-t-v-list" */).then(c => wrapFunctional(c.default || c))
export const LazyMovieList = import('../../components/MovieList.vue' /* webpackChunkName: "components/movie-list" */).then(c => wrapFunctional(c.default || c))
export const LazyMovieReviews = import('../../components/MovieReviews.vue' /* webpackChunkName: "components/movie-reviews" */).then(c => wrapFunctional(c.default || c))
export const LazyNuxtLogo = import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyProviderList = import('../../components/ProviderList.vue' /* webpackChunkName: "components/provider-list" */).then(c => wrapFunctional(c.default || c))
export const LazySearch = import('../../components/Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c))
export const LazyTVList = import('../../components/TVList.vue' /* webpackChunkName: "components/t-v-list" */).then(c => wrapFunctional(c.default || c))
export const LazyTVReviews = import('../../components/TVReviews.vue' /* webpackChunkName: "components/t-v-reviews" */).then(c => wrapFunctional(c.default || c))
export const LazyTutorial = import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
