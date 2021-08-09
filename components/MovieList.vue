<template>
 <div class='movieList'>
    <Search/>
    <h1>Movie Search</h1>
    <div class="lastestMovies">
        <div v-for="movie in latestMovies" :key="movie.id">
            {{movie.title}}
            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path" width='100px'>
        </div>
    </div>
 </div>
</template>
<script>
import axios from 'axios'
import Search from '@/components/Search'

export default {
 name: 'movieSearch',
 components: {
    Search
 },
 data () {
  return {
   query: '',
   results: '',
   latestMovies: this.movieList()
  }
 },
 mounted(){
    this.latestMovies = this.movieList();
    console.log(this.latestMovies);
 },
 methods: {
  getResult(query) {
    try {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=9d58e9e21ea356358536de769ffa2e06&query=' + query).then(response => { this.results = response.data.results })
        console.log(this.results);
    } catch {
        console.log("ERROR IN SEARCH");
    }
   },
   movieList() {
    try {
        axios.get('https://api.themoviedb.org/3/movie/latest?api_key=9d58e9e21ea356358536de769ffa2e06').then(response => { this.latestMovies = response.data.latestMovies })
        // console.log(this.results);
    } catch {
        console.log("ERROR IN SEARCH");
    }
   }
 }
}
</script>
