<template>
 <div class='search'>
  <form class="form-inline mx-auto">
    <input class="form-control mx-auto" type='text' v-model='query' @keyup='getResult(query)' placeholder="Search...">
  </form>
  <div v-show="showResults" class="menu-item">
    <ul class="searchMenu">
        <li v-for='result in results' :key='result.id'>
            <!-- <a v-if="result.media_type === 'movie'" class="menu-item" :href="'/movies/MovieListing?movieId=' + result.id">{{result.title}}</a>
            <a v-else-if="result.media_type === 'tv'" class="menu-item" :href="'/tv/TVShows?tvId=' + result.id">{{result.original_name}}</a> -->
            <router-link v-if="result.media_type === 'movie'" class="menu-item" :to="{path: '/movies/MovieListing', query: { movieId: result.id }, force: true}" replace>{{result.title}}</router-link>
            <!-- <router-link v-else-if="result.media_type === 'tv'" class="menu-item" :to="{path: '/tv/TVshows', query: { tvId: result.id }, force: true}" replace>{{result.title}}</router-link> -->
        </li>
    </ul>
  </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
 name: 'search',
 data () {
  return {
   query: '',
   results: '',
   showResults: true
  }
 },
 mounted () {
    this.showResults = false;
 },
 methods: {
  getResult(query) {
    try {
        axios.get('https://api.themoviedb.org/3/search/multi?api_key=9d58e9e21ea356358536de769ffa2e06&query=' + query).then(response => { this.results = response.data.results })
        console.log(this.results);
    } catch {
        console.log("ERROR IN SEARCH");
    }
    if (query === ''){
        this.showResults = false;
    } else {
        this.showResults = true;
    }
   }
 },
 watchQuery: ['movieId', 'tvId']
}
</script>

<style scoped>
* {
    z-index: 0;
}
.form-control {
    border: 0px;
    border-radius: 15px;
    width: 30%;
    box-shadow: 0px 0px 0px 10px #F2F2F2;
}
.menu-item {
	width: 30%;
    position: relative;
    margin: 0 auto;
    z-index:1;
}

.menu-item a {
	padding: 5px 0 5px 0;
	text-decoration: none;
	margin: 0 15px 0 15px;
	font-weight: bold;
	display: block;
}

.menu-item ul {
	margin-top: 5px;
    margin-left: 0;
    padding-left: 0;
	list-style-type: none;
	max-height: 115px;
	overflow: hidden;
    overflow-y:scroll;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    background:#fff;
	-webkit-transition: height 1s ease;
    -moz-transition: height 1s ease;
    -o-transition: height 1s ease;
    -ms-transition: height 1s ease;
    transition: height 1s ease;
}

.menu-item:hover ul {
	height: 115px;
}
.menu-item ul li {
    margin-left: 0;
    padding-left: 0;
}
.menu-item ul li a {
    display:block;
	font-size: 20px;
	width: 100%;
	border-radius: 10px;
	margin-top: 5px;
    color: #D1495B !important;
}
.menu-item ul li a:hover {
    text-decoration: underline;
}
div.home-container {
	clear: left;
}


</style>