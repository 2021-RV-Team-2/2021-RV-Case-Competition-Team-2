<template>
 <div class='movieList container'>
    <!--<Search/>-->
    <h1>Movie</h1>
    <div class="movieListing row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div class="movie">
                <div class="movieTitle text-truncate">
                    <h3>{{ movie.title }}</h3>
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
                        <div class="runtime">
                            Runtime: {{ duration(movie.runtime) }}
                        </div>
                        <div class="budget">
                            Budget: {{ formatPrice(movie.budget) }}
                        </div>
                        <div class="boxOffice">
                            Box Office: {{ formatPrice(movie.revenue) }}
                        </div>
                        <h6>STREAM</h6>
                        <div v-for="provider in providers_fr" :key="provider.logo_path">
                            <img class="img-thumbnail service" v-bind:src="'http://image.tmdb.org/t/p/w200/' + provider.logo_path">
                        </div>
                        <h6>STREAM + BUY</h6>
                        <div v-for="provider in providers_fr_buy" :key="provider.logo_path">
                            <img class="img-thumbnail service" v-bind:src="'http://image.tmdb.org/t/p/w200/' + provider.logo_path">
                        </div>
                        <h6>RENT</h6>
                        <div v-for="provider in providers_rent" :key="provider.logo_path">
                            <img class="img-thumbnail service" v-bind:src="'http://image.tmdb.org/t/p/w200/' + provider.logo_path">
                        </div>

                        <iframe width="560" height="315" v-bind:src="findTrailer(videos)"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                    </div>
                    
                </div>
            </div>
        </div>
    </div>
 </div>
</template>
<script scope>
import axios from 'axios'
// import Search from '@/components/Search'
export default {
 name: 'movieListing',
 head: {
    title: 'Movies',
 },
 components: {
    // Search
 },
 props: [

 ],
 data () {
  return {
   query: '',
   results: '',
   movie: '',
   providers_fr: '',
   providers_fr_buy: '',
   providers_rent: '',
   videos: '',
  }
 },
 mounted () {
    try {
        let movieId = this.$route.query.movieId;
        let movieString = 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=9d58e9e21ea356358536de769ffa2e06';
        let providerString = 'https://api.themoviedb.org/3/movie/' + movieId + '/watch/providers?api_key=9d58e9e21ea356358536de769ffa2e06';
        let videosString = 'https://api.themoviedb.org/3/movie/' + movieId + '/videos?api_key=9d58e9e21ea356358536de769ffa2e06&language=en-US'
        axios.get(providerString).then(response => { this.providers_fr = response.data.results["US"]["flatrate"],  this.providers_fr_buy = response.data.results["US"]["flatrate_and_buy"], this.providers_rent = response.data.results["US"]["rent"]});
        axios.get(videosString).then(response => this.videos= response.data.results);
        console.log(movieId);
        axios.get(movieString).then(response => { this.movie = response.data });
    } catch {
        console.log("ERROR IN SEARCH");
    }
 },
 filters: {
    currency: function(value){
        return "$" + Number.parseFloat(value).toFixed(2);
    }
},
 methods: {
    findTrailer(results){
        for (let i = 0, len = results.length; i < len; i++) {
            let video = results[i];
            let type = video["type"];
            console.log(type);
            if( type == "Trailer" ){
                return "https://www.youtube.com/embed/" + video["key"];
            }
        }
        return results[0];
    },
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace(',', '.')
        return '$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    duration (value) {
      const totalMinutes = value;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes - (hours * 60);
      return hours + ' hr ' + minutes + ' mins';
    },
//    movieListing() {
//     try {
//         let movieId = this.$route.query.movieId;
//         let movieString = 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=9d58e9e21ea356358536de769ffa2e06';
//         console.log(movieId);
//         axios.get(movieString).then(response => { this.movie = response });
//     } catch {
//         console.log("ERROR IN SEARCH");
//     }
//    }
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
.movie {
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
    margin-top:10px;
}
.learnMore:hover {
    cursor:pointer;
}
.service{
    height: 60px;
}
</style>
