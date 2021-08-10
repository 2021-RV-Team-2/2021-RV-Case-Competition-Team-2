<template>
 <div class='movieList container'>
    <div class="latestMovies row">
        <div v-for="movie in latestMovies" :key="movie.id" class="col-xl-2 col-lg-2 col-md-4 col-sm-4">
            <div class="movie">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="movieImage text-center">
                            <NuxtLink class="movieLink" :to="{path: '/movies/MovieListing', query: { movieId: movie.id }}">
                                <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path">
                                <span class="movieTitle text-truncate">{{movie.title}}</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>
<script>
import axios from 'axios'
// import Search from '@/components/Search'

export default {
 name: 'homeMovieList',
 components: {
    // Search
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
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=9d58e9e21ea356358536de769ffa2e06&language=en-US&vote_count.gte=20&page=1').then(response => { this.latestMovies = response.data.results })
    } catch {
        console.log("ERROR IN SEARCH");
    }
   }
 },
 mounted () {
    this.movieList();
 },
 layout: 'default'
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Roboto:wght@100;300;400;500;700&family=Montserrat:wght@500;700&display=swap');

html, body {
    background: #000!important;
    color: #fff!important;
}
img {
    max-width:100%;
}
.movie {
    /* max-height: 300px; */
    padding:10px;
    color:#000;
    background: #fff;
    border-radius: 8px;
    margin-bottom:10px;
    overflow-x: hidden;
    font-size: 12px;
}
.movieImage {
    text-align: center;
    width:100%;
}
.movieLink {
    width: calc(100% - 5px);
    background: #f2f2f2;
    color: #D1495B;
}
.movieLink span {
    width: 100%;
    display: block;
}
.movieLink:hover {
    cursor:pointer;
    text-decoration: underline;
}
</style>
