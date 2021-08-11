<template>
<div>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="3000"
        controls
        indicators
        background="#272520"
        img-width="512"
        img-height="240"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >
        <div v-for="movie in popularMovies" :key="movie.id">
            <NuxtLink :to="{path: '/movies/MovieListing', query: { movieId: movie.id }}">
            <b-carousel-slide :caption="movie.title" :img-src="'http://image.tmdb.org/t/p/w500' + movie.backdrop_path">
            </b-carousel-slide>
            </NuxtLink>
        </div>
    </b-carousel>
</div>
</template>

<script>
import axios from 'axios'
import VueSlickCarousel from 'vue-slick-carousel'

export default {
 name: 'homeCarousel',
 components: {
    VueSlickCarousel 
 },
 data () {
  return {
   query: '',
   results: '',
   popularMovies: '',
   trailers: '',
  }
 },
 methods: {
   movieList() {
    try {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9d58e9e21ea356358536de769ffa2e06&language=en-US&page=1').then(response => { this.popularMovies = response.data.results.slice(0,5) })
    } catch {
        console.log("ERROR IN SEARCH");
    }
   },
   movieTrailers(){
       let movies = this.movies;
    //    let trailers = [];
    //    for (let i = 0, len = movies.len; i < len; i++) {
    //        let movie = movies[i];
    //     //    let movieId = movie.id;
    //     //    let videosString = 'https://api.themoviedb.org/3/movie/' + movieId + '/videos?api_key=9d58e9e21ea356358536de769ffa2e06&language=en-US';
    //     //    let movie_videos = [];
    //     //    try {
    //     //        axios.get(videosString).then(response => {movie_videos = response.data.results})
    //     //    } catch {
    //     //        console.log("ERROR IN SEARCH");
    //     //    }
    //        let movie_trailer = "b"; //findTrailer(movie_videos);
    //        trailers.push({url: movie_trailer});
    //    }
    // //    trailers = [{url: "blabla"}, {url: "hehe"}]
    //    this.trailers = trailers;
   },
   findTrailer(videos){
        for (let i = 0, len = videos.length; i < len; i++) {
            let video = results[i];
            let type = video["type"];
            console.log(type);
            if( type == "Trailer" ){
                return "https://www.youtube.com/embed/" + video["key"];
            }
        }
        return videos[0];
    }
 },
 mounted () {
    this.movieList();
    // this.movieTrailers();
 },
 layout: 'default'
}
// <div v-for="movie in movies" :key="movie.id">
//             <!-- <p>{{movie.poster_path}}</p> -->
//             <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path" v-bind:alt="movie.title">
//         </div>
</script>

<style scoped>
.findMovieForm {
    height: 350px;
    padding-bottom:20px;
    color:#000;
    background: #F2F2F2;
    border-radius: 8px;
    margin-bottom:10px;
    overflow-x: hidden;
    font-size: 12px;
}
</style>