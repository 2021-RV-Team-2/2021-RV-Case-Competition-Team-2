<template>
 <div class='tvList container'>
    <!--<Search/>-->
    <h1 @click="genreList()" class="py-4 mx-auto text-center">FIND SOMETHING TO WATCH</h1>
        <div class="tv">
            <div class="tvTitle text-truncate">
                <h3>FIND ME A</h3>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="customSwitches">
                        <label class="custom-control-label" for="customSwitches">Movie</label>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="customSwitches2">
                        <label class="custom-control-label" for="customSwitches2">TV Show</label>
                    </div>
                </div>
            </div>
            <div class="tvTitle text-truncate">
                <h3>GENRES</h3>
            </div>
            <div class="row">
                <div v-for="genre in genres" :key="genre.id" class="col-sm">
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" :id="genre.id">
                        <label class="custom-control-label" :for="genre.id">{{genre.name}}</label>
                    </div>
                </div>
            </div>
            <div class="tvTitle text-truncate">
                <h3>STREAMING SERVICES</h3>
            </div>
            <div class="row">
                <div v-for="serv in services" :key="serv.provider_id" class="col-sm">
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" :id="serv.provider_id">
                        <label class="custom-control-label" :for="serv.provider_id">{{serv.provider_name}}</label>
                    </div>
                </div>
            </div>
        </div>
 </div>
</template>
<script>
import axios from 'axios'
import Default from '../layouts/default.vue'

// import Search from '@/components/Search'

export default {
 name: 'tvList',
 components: {
  Default
    // Search
 },
 data () {
  return {
   query: '',
   results: '',
   latestTV: '',
   genres: '',
   services: '',
  }
 },
 methods: {
   serviceList() {
    try {
        console.log("HI")
        axios.get('https://api.themoviedb.org/3/watch/providers/tv?api_key=9d58e9e21ea356358536de769ffa2e06&language=en-US&watch_region=US').then(response => { this.services = response.data.results.slice(0,8) })
    } catch {
        console.log("ERROR IN SEARCH");
    }
   },
   genreList() {
       console.log("HI")
       try {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=9d58e9e21ea356358536de769ffa2e06&language=en-US').then(response => { this.genres = response.data.genres })
    } catch {
        console.log("ERROR IN SEARCH");
    }
   },
   formatYear(value) {
        return String(value).substring(0,4)
    },
 },
 mounted () {
    this.genreList();
    this.serviceList();
 },
 beforeMount(){
    this.serviceList()
 },

 layout: 'default'
}
</script>
<style scope>
html, body {
    background: #000!important;
    color: #fff!important;
}
img {
    max-width:100%;
}
.tv {
    max-height: 800px;
    padding:10px;
    padding-bottom:20px;
    color:#000;
    background: #fff;
    border-radius: 8px;
    margin-bottom:10px;
    overflow-x: hidden;
    font-size: 12px;
}
/*sets the background color of
switch to violet when it is checked*/
.custom-control-input:checked ~ 
.custom-control-label::before {
    border-color: #D1495B !important;
    background-color: #D1495B !important;
}

/*sets the background color of
switch to violet when it is active*/
.custom-control-input:active ~ 
.custom-control-label::before {
    background-color: #D1495B !important;
    border-color: #D1495B !important;
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
</style>
