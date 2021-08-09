<template>
 <div class='movieList container'>
    <Search/>
    <h1 @click="movieList()">Movie List</h1>
    <div class="latestMovies row">
        <div v-for="movie in latestMovies" :key="movie.id" class="col-md-2">
            <div class="movieTitle text-truncate">
                {{movie.title}}
            </div>
            <div class="movieImage text-center">
                <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path" width='100px'>
            </div>
        </div>
    </div>
 </div>
</template>
<script>
import axios from 'axios'
import Search from '@/components/Search'

export default {
 name: 'movieList',
 components: {
    Search
 },
 data () {
  return {
   query: '',
   results: '',
   latestMovies: ''
  }
 },
 methods: {
   movieList() {
    try {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=9d58e9e21ea356358536de769ffa2e06').then(response => { this.latestMovies = response.data.results })
    } catch {
        console.log("ERROR IN SEARCH");
    }
   }
 },
 fetch () {
    this.movieList();
 }
}
</script>
<style scoped>
</style>
