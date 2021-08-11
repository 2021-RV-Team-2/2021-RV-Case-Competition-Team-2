<template>
 <div class='movieList container'>
    <!--<Search/>-->
    <h1 @click="movieList()" class="py-4 mx-auto text-center">DISCOVER NEW MOVIES</h1>
    <div class="latestMovies row">
        <div v-for="movie in latestMovies" :key="movie.id" class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div class="movie">
                <div class="movieTitle text-truncate">
                    <h3>{{movie.title}}</h3>
                </div>
                <div class="row">
                    <div class="col-md-3 col-sm-12">
                        <div class="movieImage text-center">
                            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path">
                        </div>
                    </div>
                    <div class="col-md-9 col-sm-12">
                        <div class="movieYear">
                            {{ movie.release_date }}
                        </div>
                        <div class="movieRating float-end">
                            {{ movie.vote_average }} ({{ movie.vote_count }} votes)
                        </div>
                        <div class="movieDescription">
                            {{ movie.overview }}
                        </div>
                        <div>
                            <NuxtLink class="learnMore" :to="{path: '/movies/MovieListing', query: { movieId: movie.id }}">Learn More</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pagination">
        <div class="btnContainer">
            <button @click="prevPage()" class="learnMore">Prev.</button>
            <button @click="nextPage()" class="learnMore">Next.</button>
        </div>
    </div>
 </div>
</template>
<script>
import axios from 'axios'
// import Search from '@/components/Search'

export default {
 name: 'movieList',
 components: {
    // Search
 },
 data () {
  return {
   query: '',
   results: '',
   latestMovies: '',
   page: 1
  }
 },
 methods: {
   movieList() {
       let page = this.page;
    try {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=9d58e9e21ea356358536de769ffa2e06&language=en-US&vote_count.gte=20&page='+page).then(response => { this.latestMovies = response.data.results })
    } catch {
        console.log("ERROR IN SEARCH");
    }
   },
   nextPage() {
       this.page++;
       this.movieList();
   },
   prevPage() {
       if (this.page > 1) {
        this.page--;
        this.movieList();
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
    max-height: 300px;
    padding:10px;
    padding-bottom:20px;
    color:#000;
    background: #fff;
    border-radius: 8px;
    margin-bottom:10px;
    overflow-x: hidden;
    font-size: 12px;
}
.movieYear, .movieRating {
    color: #D1495B;
    font-weight: bold;
}
.movieYear {
    float: left;
}
.movieRating {
    float: right;
}
.movieDescription {
    height: 100px;
    overflow-y:scroll;
    width:100%;
    float: none;
}
.learnMore {
    background: #D1495B;
    color: white;
    padding: 5px;
    border-radius: 4px;
    margin-top:20px;
    display:block;
    width: 74px;
}
.learnMore:hover {
    cursor:pointer;
    color: #fff;
}
h1 {
    font-family: "Montserrat";
    letter-spacing: .1rem;
}
.pagination {
    width:100%;
    display:block;
}
.pagination button {
    display: inline-block;
}
.pagination .btnContainer {
    width:155px;
    display:block;
    margin:0 auto;
}
</style>
