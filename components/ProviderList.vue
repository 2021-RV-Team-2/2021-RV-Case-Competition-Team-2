<template>
 <div class='ProviderList container'>
    <!--<Search/>-->
    <h1 @click="ProviderList()">Provider List</h1>
    <div class="latestProviders row">
        <div v-for="Provider in latestProviders" :key="Provider.id" class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div class="Provider">
                <div class="ProviderName text-truncate">
                    <h3>{{Provider.name}}</h3>
                </div>
                <div class="row">
                    <div class="col-md-3 col-sm-12">
                        <div class="ProviderImage text-center">
                            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + Provider.poster_path">
                        </div>
                    </div>
                    <div class="col-md-9 col-sm-12">
                        <div class="ProviderYear">
                            {{ Provider.release_date }}
                        </div>
                        <div class="ProviderDescription">
                            {{ Provider.overview }}
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
 name: 'ProviderList',
 components: {
    // Search
 },
 data () {
  return {
   query: '',
   results: '',
   latestProviders: ''
  }
 },
 methods: {
   ProviderList() {
    try {
        axios.get('https://api.themoviedb.org/3/watch/providers/tv?api_key=9d58e9e21ea356358536de769ffa2e06').then(response => { this.latestProviders = response.data.results })
    } catch {
        console.log("ERROR IN SEARCH");
    }
   }
 },
 mounted () {
    this.ProviderList();
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
.provider {
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
.providerYear, .providerRating {
    color: red;
    font-weight: bold;
}
.providerYear {
    float: left;
}
.providerRating {
    float: right;
}
.providerDescription {
    height: 100px;
    overflow-y:scroll;
    width:100%;
    float: none;
}

</style>