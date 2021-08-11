<template>
 <div class='tvList container'>
    <!--<Search/>-->
    <h1 @click="tvList()" class="py-4 mx-auto text-center">DISCOVER NEW TV SHOWS</h1>
    <div class="latestTV row">
        <div v-for="tv in latestTV" :key="tv.id" class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div class="tv">
                <div class="movieTitle text-truncate">
                    <h3>{{tv.name}}</h3>
                </div>
                <div class="row">
                    <div class="col-md-3 col-sm-12">
                        <div class="movieImage text-center">
                            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + tv.poster_path">
                        </div>
                    </div>
                    <div class="col-md-9 col-sm-12">
                        <div class="movieYear">
                            {{ formatYear(tv.first_air_date) }}
                        </div>
                        <div class="movieRating float-end">
                            {{ tv.vote_average }} ({{ tv.vote_count }} votes)
                        </div>
                        <div class="movieDescription">
                            {{ tv.overview }}
                        </div>
                        
                        <div>
                            <NuxtLink class="learnMore" :to="{path: '/tv/tvshows', query: { tvId: tv.id }}">Learn More</NuxtLink>
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
 name: 'tvList',
 components: {
    // Search
 },
 data () {
  return {
   query: '',
   results: '',
   latestTV: '',
   page: 1
  }
 },
 methods: {
   tvList() {
    try {
        let page = this.page;
        axios.get('https://api.themoviedb.org/3/discover/tv?api_key=9d58e9e21ea356358536de769ffa2e06&language=en-US&vote_count.gte=20&page='+page).then(response => { this.latestTV = response.data.results })
    } catch {
        console.log("ERROR IN SEARCH");
    }
   },
   formatYear(value) {
        return String(value).substring(0,4)
    },
   nextPage() {
       this.page++;
       this.tvList();
   },
   prevPage() {
       if (this.page > 1) {
        this.page--;
        this.tvList();
       }
   }
 },
 mounted () {
    this.tvList();
 },

 layout: 'default'
}
</script>
<style>
html, body {
    background: #000!important;
    color: #fff!important;
}
img {
    max-width:100%;
}
.tv {
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
