<template>
 <div class='movieList container'>
    <h3>Latest Reviews</h3>
    <div class="movieListing row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div v-for="review in reviews" :key="review.id" class="review row">
                <div class="col-md-1">
                    <div class="avatar">
                        <img v-bind:src="formatImgPath(review.author_details.avatar_path)">
                    </div>
                </div>
                <div class="col-md-11">
                    <b>By: {{review.author_details.username}}</b> | <a :href="review.url" target="_blank">Full Review</a> | Rating: <b>{{review.author_details.rating}}</b>
                    <br> 
                    {{review.content}}
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
   reviews: ''
  }
 },
 mounted () {
    try {
        let movieId = this.$route.query.movieId;
        let movieString = 'https://api.themoviedb.org/3/movie/' + movieId + '/reviews?api_key=9d58e9e21ea356358536de769ffa2e06';
        axios.get(movieString).then(response => { this.reviews = response.data.results });
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
    formatImgPath (value) {
        console.log(value);
      const tmdbPath = 'http://image.tmdb.org/t/p/w500/'
      if (value.startsWith('/http')){
          return value.replace("/", "");
      } else {
          return tmdbPath + value;
      }
    }
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
.avatar img {
    border-radius: 50%;
    border: 1px solid #000;
}
.review {
    margin-bottom: 5px;
    border-bottom: 1px solid #000;
}
</style>
