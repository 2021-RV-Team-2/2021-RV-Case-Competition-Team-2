<template>
 <div class='tvList container'>
        <div class="findMovieForm">
            <div class="row">
                <div class="col-md-10 col-sm-12">
                    <div class="findMe text-truncate mb-2">
                        <h5>FIND ME A</h5>
                    </div>
                    <div class="switch">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="movie" v-on:click="movTVclick(1)">
                            <label class="custom-control-label" for="movie">Movie</label>
                        </div>
                    </div>
                    <div class="switch">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="tv" v-on:click="movTVclick(2)">
                            <label class="custom-control-label" for="tv">TV Show</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 col-sm-12">
                    <div class="genre text-truncate mb-2">
                        <h5>GENRES</h5>
                    </div>
                    <div v-for="genre in genres" :key="genre.id" class="switch">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" :id="genre.id" v-on:click="genreClick(genre.id)">
                            <label class="custom-control-label" :for="genre.id">{{genre.name}}</label>
                        </div>
                    </div>
                </div>
             </div>
             <div class="row">
                <div class="col-md-10 col-sm-12">
                    <div class="stream text-truncate mb-2">
                        <h5>STREAMING SERVICES</h5>
                    </div>
                    <div v-for="serv in services" :key="serv.provider_name" class="switch" >
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" :id="serv.provider_name"  v-on:click="serverClick(serv.provider_id)" >
                            <label class="custom-control-label" :for="serv.provider_name">{{serv.provider_name}}</label>
                        </div>
                    </div>
                </div>
           </div>
           <div class="row" >
               <div class="col-md-6 col-sm-12">
                    <div class="year text-truncate mb-2">
                        <h5>YEAR</h5>
                    </div>
                
                    <div class="">
                        <input v-model="year1" @keypress="isNumber($event)">
                        <h8> TO </h8>
                        <input v-model="year2" @keypress="isNumber($event)">
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="runtime text-truncate mb-2">
                        <h5>MAX RUNTIME</h5>
                    </div>
                    <div class="">
                        <input v-model="runtime" @keypress="isNumber($event)"> Minutes
                    </div>
                </div>
            </div>
        </div>
        <call-button-container class="searchButton" id="search">
            <h3 v-on:click="search">Search</h3>
        </call-button-container>
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
   checkedServices: [],
   checkedGenres: [],
   movTV: [],
   pickedMovies: [],
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
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    },
    search: function (event) {
        var lengths = this.checkedGenres.length;
        var genresVals = ""
        if (lengths > 0 ) {
            genresVals = genresVals + "&with_genres="
            for(var i = 0; i < lengths; i++) {
                genresVals = genresVals + this.checkedGenres[i] 
                if(i != lengths - 1) {
                    genresVals = genresVals + "|"
                }
            }
        }

        lengths = this.checkedServices.length;
        if (lengths > 0 ) {
            genresVals = genresVals + "&with_watch_providers=" 
            for(var i = 0; i < lengths; i++) {
                genresVals = genresVals + this.checkedServices[i] 
                if(i != lengths - 1) {
                    genresVals = genresVals + "|"
                }
            }
        }
        if (this.runtime != null && this.runtime != "")  {
            genresVals = genresVals + "&with_runtime.lte=" + this.runtime
        }
        
        var lengths = this.movTV.length;
        var movTv = 0
        console.log(this.movTV)
        if (lengths == 0 || lengths == 2) {
            movTv = Math.floor(Math.random() * 2 + 1);     
        } else if (lengths == 1 && this.movTV[0] == 1) {
            movTv = 1
        } else {
            movTv = 2
        }
        if (movTv == 1) {
            if (this.year2 != null && this.year2 != "")  {
                genresVals = genresVals + "&release_date.lte=" + this.year2 + "-12-31"
            }
            if (this.year1 != null && this.year1 != "")  {
                genresVals = genresVals + "&release_date.gte=" + this.year1 + "-01-01"
            }
            var apiCall = "https://api.themoviedb.org/3/discover/movie?api_key=9d58e9e21ea356358536de769ffa2e06&language=en-US&vote_count.gte=20&include_adult=false&include_video=false&page=1" + genresVals  
        } else {
            if (this.year2 != null && this.year2 != "")  {
                genresVals = genresVals + "&air_date.lte=" + this.year2 + "-12-31"
            }
            if (this.year1 != null && this.year1 != "")  {
                genresVals = genresVals + "&air_date.gte=" + this.year1 + "-01-01"
            }
            var apiCall = "https://api.themoviedb.org/3/discover/tv?api_key=9d58e9e21ea356358536de769ffa2e06&language=en-US&vote_count.gte=20&include_adult=false&include_video=false&page=1" + genresVals  
        }

        console.log(apiCall)
        try {
            axios.get(apiCall).then(
                (response) => {
                    console.log(apiCall)
                    var ran = Math.floor(Math.random() * response.data.results.length);
                    this.pickedMovies = response.data.results[ran];
                    // alert('Hello ' + this.pickedMovies.id + '! ' + this.pickedMovies.name + this.pickedMovies.title);
                    if (movTv == 2 ) {
                       window.location.href = "/findmovie/tvshow?tvId=" + this.pickedMovies.id 
                    } else if (movTv == 1 ) {
                       window.location.href = "/findmovie/MovieListing?movieId=" + this.pickedMovies.id
                    } 
                },
            )
        } catch {
            console.log("ERROR IN SEARCH");
        }  
        

    },

    serverClick: function (value) {
      var lengths = this.checkedServices.length;
      for(var i = 0; i < lengths; i++) {
        if(this.checkedServices[i] == value) {
            var a = this.checkedServices.slice(0,i)
            var b = this.checkedServices.slice(i + 1, lengths)
            this.checkedServices = [].concat(a, b);
            return
        }
      }
      this.checkedServices.push(value) 
    },
    genreClick: function (value) {
      var lengths = this.checkedGenres.length;
      for(var i = 0; i < lengths; i++) {
        if(this.checkedGenres[i] == value) {
            var a = this.checkedGenres.slice(0,i)
            var b = this.checkedGenres.slice(i + 1, lengths)
            this.checkedGenres = [].concat(a, b);
            return
        }
      }
      this.checkedGenres.push(value) 
    },
    movTVclick: function (value) {
      var lengths = this.movTV.length;
      for(var i = 0; i < lengths; i++) {
        if(this.movTV[i] == value) {
            var a = this.movTV.slice(0,i)
            var b = this.movTV.slice(i + 1, lengths)
            this.movTV = [].concat(a, b);
            console.log(this.movTV)
            return
        }

      }
    
      this.movTV.push(value) 
      console.log(this.movTV)
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
* {
    outline: none;
}
.switch {
    display:inline-block;
    width: 33%;
}
html, body {
    background: #000!important;
    color: #fff!important;
}
img {
    max-width:100%;
}
.findMovieForm {
    max-height: 800px;
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

.row {
     padding:10px;
}
.movieYear, .movieRating {
    color: #D1495B;
    font-weight: bold;
}
.findMe {
    background: #D1495B;
    color: white;
    padding: 5px;
    height: 35px;
    border-radius: 4px;
    /* display:block; */
    width: 105px;
}
.genre {
    background: #D1495B;
    color: white;
    padding: 5px;
    border-radius: 4px;
    display:block;
    width: 90px;
    height: 35px;
}
.stream {
    background: #D1495B;
    color: white;
    padding: 5px;
    border-radius: 4px;
    display:block;
    width: 224px;
    height: 35px;
}
.year {
    background: #D1495B;
    color: white;
    padding: 5px;
    border-radius: 4px;
    display:block;
    width: 70px;
    height: 35px;
}
.runtime {
    background: #D1495B;
    color: white;
    padding: 5px;
    border-radius: 4px;
    display:block;
    width: 150px;
    height: 35px;
}
.searchButton {
    background: #D1495B;
    color: white;
    padding: 5px;
    border-radius: 4px;
    margin-top:20px;
    margin-bottom:5px;
    display:block;
    width: 120px;
}

h1 {
    font-family: "Montserrat";
    letter-spacing: .1rem;
}

label {
    margin-right: 5px;
    vertical-align: baseline;
    width: 100%;
}
label::before, label::after {
    margin-top:-3px;
}
</style>
