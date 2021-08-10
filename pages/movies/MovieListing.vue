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
 components: {
    // Search
 },
 props: [

 ],
 data () {
  return {
   query: '',
   results: '',
   movie: ''
  }
 },
 mounted () {
    try {
        let movieId = this.$route.query.movieId;
        let movieString = 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=9d58e9e21ea356358536de769ffa2e06';
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
</style>
