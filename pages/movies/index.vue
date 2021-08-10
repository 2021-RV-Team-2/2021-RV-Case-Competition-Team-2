<template>
 <div id='app'>
  <MovieList/>
 </div>
</template>
<script>
import MovieList from '@/components/MovieList'
export default {
 name: 'App',
 head: {
    title: 'Movies',
 },
 components: {
  MovieList
 }
}
</script>