<template>
 <div class='ProviderList container'>
    <!--<Search/>-->
    <h1 @click="ProviderList()">Provider List</h1>
    <div class="latestProviders row">
        <div v-for="serv in latestProviders" :key="serv.provider_name" class="switch" >
             <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" :id="serv.provider_name"  v-on:click="provClick(serv.provider_id)" >
                <label class="custom-control-label" :for="serv.provider_name">{{serv.provider_name}}</label>
             </div>
        </div>
    </div>
    <!--<Search/>-->
    <div class="latestMovies row">
        <div v-for="movie in movieList" :key="movie.id" class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
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
 </div>
</template>
<script>
import axios from 'axios'
// import Search from '@/components/Search'

export default {
 name: 'ProviderList',
 components: {
    // Search
 },
 data () {
  return {
   query: '',
   results: '',
   latestProviders: '',
   movieList: ''
  }
 },
 methods: {
   ProviderList() {
    try {
        axios.get('https://api.themoviedb.org/3/watch/providers/tv?api_key=9d58e9e21ea356358536de769ffa2e06&language=en-US&watch_region=US').then(response => { this.latestProviders = response.data.results.slice(0,8) })
    } catch {
        console.log("ERROR IN SEARCH");
    }
   },
   provClick(value) {
       try {
        var apiCall = 'https://api.themoviedb.org/3/discover/movie?api_key=9d58e9e21ea356358536de769ffa2e06&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate' + '&with_watch_providers=' + value
        console.log(apiCall)
        axios.get(apiCall).then(response => { this.movieList = response.data.results.slice(0,5) })
        console.log(this.movieList)
        
    } catch {
        console.log("ERROR IN SEARCH");
    }
   },
 },
 mounted () {
    this.ProviderList();
 },
 layout: 'default'
}
</script>

<style scoped>
html, body {
    background: #000!important;
    color: #fff!important;
}
img {
    max-width:100%;
}
.custom-control-label {
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
.providerYear, .providerRating {
    color: red;
    font-weight: bold;
}
.providerYear {
    float: left;
}
.providerRating {
    float: right;
}
.providerDescription {
    height: 100px;
    overflow-y:scroll;
    width:100%;
    float: none;
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
    color: red;
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
    background: red;
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
</style>