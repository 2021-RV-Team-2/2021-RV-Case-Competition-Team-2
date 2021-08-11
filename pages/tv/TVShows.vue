<template>
 <div class='tvList container'>
    <!--<Search/>-->

    <h1>TV</h1>
    <div class="tvListing row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div class="tv">
                <div class="tvTitle text-truncate">
                    <h3>{{ tv.name }}</h3>
                </div>
                <div class="row">
                    <div class="col-md-3 col-sm-12">
                        <div class="tvImage text-center">
                            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + tv.poster_path">
                        </div>
                        <h6><span v-if="providers_fr">STREAM</span></h6>
                        <div class="row">
                            <div v-for="provider in providers_fr" :key="provider.logo_path">
                                <div class="row">
                                    <div class="col-md col-md col-md">
                                        <a href="#" class="affiliateLink">
                                            <img class="img-thumbnail service" v-bind:src="'http://image.tmdb.org/t/p/w200/' + provider.logo_path">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6><span v-if="providers_rent">RENT</span></h6>
                        <div class="row">
                            <div v-for="provider in providers_rent" :key="provider.logo_path">
                                <div class="row">
                                    <div class="col-md">
                                        <a href="#" class="affiliateLink">
                                            <img class="img-thumbnail service" v-bind:src="'http://image.tmdb.org/t/p/w200/' + provider.logo_path">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6><span v-if="providers_fr_buy">STREAM + BUY</span></h6>
                        <div class="row">
                            <div v-for="provider in providers_fr_buy" :key="provider.logo_path">
                                <div class="row">
                                    <div class="col-md">
                                        <a href="#" class="affiliateLink">
                                            <img class="img-thumbnail service" v-bind:src="'http://image.tmdb.org/t/p/w200/' + provider.logo_path">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9 col-sm-12">
                        <div class="row">
                            <div class="col-md-8 col-sm-12">
                                <div class="tvYear">
                                    {{ formatYear(tv.first_air_date) }}
                                </div>
                                <div class="tvRating float-end">
                                    {{ tv.vote_average }} &starf; ({{ tv.vote_count }} votes)
                                </div>
                                <div class="tvDescription">
                                    {{ tv.overview }}
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <div class="seasons">
                                    Seasons: {{ tv.number_of_seasons }}
                                </div>
                                <div class="runtime">
                                    Episode Runtime: {{ duration(tv.episode_run_time) }}
                                </div>
                            </div>
                        </div>
                        <TVReviews/>
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
 name: 'tvShows',
 components: {
    // Search
 },
 props: [

 ],
 data () {
  return {
   query: '',
   results: '',
   tv: ''
  }
 },
 mounted () {
    try {
        let tvId = this.$route.query.tvId;
        let tvString = 'https://api.themoviedb.org/3/tv/' + tvId + '?api_key=9d58e9e21ea356358536de769ffa2e06';
        let providerString = 'https://api.themoviedb.org/3/tv/' + tvId + '/watch/providers?api_key=9d58e9e21ea356358536de769ffa2e06';
        let videosString = 'https://api.themoviedb.org/3/tv/' + tvId + '/videos?api_key=9d58e9e21ea356358536de769ffa2e06&language=en-US'
        console.log(tvId);
        axios.get(providerString).then(response => { this.providers_fr = response.data.results["US"]["flatrate"],  this.providers_fr_buy = response.data.results["US"]["flatrate_and_buy"], this.providers_rent = response.data.results["US"]["rent"]});
        axios.get(videosString).then(response => this.videos= response.data.results);
        axios.get(tvString).then(response => { this.tv = response.data });
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
      if ( Number.isNaN(hours) ) {
          return 'Not Released'
      }
      if ( hours > 0 ) {
        return hours + ' hr ' + minutes + ' mins';
      } else {
        return  minutes + ' mins';
      }
    },
    formatYear(value) {
        return String(value).substring(0,4)
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
.tv {
    max-height: 600px;
    padding:10px;
    padding-bottom:20px;
    color:#000;
    background: #fff;
    border-radius: 8px;
    margin-bottom:10px;
    overflow-x: hidden;
    font-size: 12px;
}
.tvYear, .tvRating {
    color: red;
    font-weight: bold;
}
.tvYear {
    float: left;
}
.tvRating {
    float: right;
}
.tvDescription {
    height: 150px;
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
.runtime, .seasons {
    background: #D1495B;
    color: white;
    padding: 5px;
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: block;
    width:100%;
    max-width: 205px;
}
.service{
    height: 60px;
}
</style>
