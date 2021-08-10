<template>
 <div class='tvList container'>
    <!--<Search/>-->
    <h1>TV</h1>
    <div class="tvListing row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div class="tv">
                <div class="tvTitle text-truncate">
                    <h3>{{ tv.title }}</h3>
                </div>
                <div class="row">
                    <div class="col-md-3 col-sm-12">
                        <div class="tvImage text-center">
                            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + tv.poster_path">
                        </div>
                    </div>
                    <div class="col-md-9 col-sm-12">
                        <div class="tvYear">
                            {{ tv.release_date }}
                        </div>
                        <div class="tvRating float-end">
                            {{ tv.vote_average }} ({{ tv.vote_count }} votes)
                        </div>
                        <div class="tvDescription">
                            {{ tv.overview }}
                        </div>
                        <div class="runtime">
                            Runtime: {{ duration(tv.runtime) }}
                        </div>
                        <div class="budget">
                            Budget: {{ formatPrice(tv.budget) }}
                        </div>
                        <div class="boxOffice">
                            Box Office: {{ formatPrice(tv.revenue) }}
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
 name: 'tvListing',
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
        console.log(tvId);
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
      return hours + ' hr ' + minutes + ' mins';
    },
//    tvListing() {
//     try {
//         let tvId = this.$route.query.tvId;
//         let tvString = 'https://api.themoviedb.org/3/tv/' + tvId + '?api_key=9d58e9e21ea356358536de769ffa2e06';
//         console.log(tvId);
//         axios.get(tvString).then(response => { this.tv = response });
//     } catch {
//         console.log("ERROR IN SEARCH");
//     }
//    }
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
