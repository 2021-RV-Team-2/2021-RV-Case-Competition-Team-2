<template>
 <div class='tvList container'>
    <div class="latesttv row">
        <div v-for="tv in latesttv" :key="tv.id" class="col-xl-2 col-lg-2 col-md-4 col-sm-4">
            <div class="tv">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="tvImage text-center">
                            <NuxtLink class="tvLink" :to="{path: '/tv/tvshows', query: { tvId: tv.id }}">
                                <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + tv.poster_path">
                                <span class="tvTitle text-truncate">{{tv.name}}</span>
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
 name: 'hometvList',
 components: {
    // Search
 },
 data () {
  return {
   query: '',
   results: '',
   latesttv: ''
  }
 },
 methods: {
   tvList() {
    try {
        axios.get('https://api.themoviedb.org/3/discover/tv?api_key=9d58e9e21ea356358536de769ffa2e06&language=en-US&vote_count.gte=20&page=1').then(response => { this.latesttv = response.data.results })
    } catch {
        console.log("ERROR IN SEARCH");
    }
   }
 },
 mounted () {
    this.tvList();
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
.tv {
    /* max-height: 300px; */
    padding:10px;
    color:#000;
    background: #fff;
    border-radius: 8px;
    margin-bottom:10px;
    overflow-x: hidden;
    font-size: 12px;
}
.tvImage {
    text-align: center;
    width:100%;
}
.tvLink {
    width: calc(100% - 5px);
    background: #f2f2f2;
    color: #D1495B;
}
.tvLink span {
    width: 100%;
    display: block;
}
.tvLink:hover {
    cursor:pointer;
    text-decoration: underline;
}
</style>
