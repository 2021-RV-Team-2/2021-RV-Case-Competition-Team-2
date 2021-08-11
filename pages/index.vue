<template>
<div class="container">
  <div class="carousel">
    <div class="row">
        <div class="col-md-6">
          <HomeCarousel/>
        </div>
        <div class="col-md-6">
          <FindMovieHome/>
        </div>
      </div>
    
  </div>
  <div class="banner">
    <HomeBanner/>
  </div>
  <div class="latestMovies">
    <h2>Latest Movies</h2>
    <HomeMovieList/>
  </div>
    <div class="latestTv">
    <h2>Latest TV Shows</h2>
    <HomeTVList/>
  </div>
</div>
</template>

<script>
export default {

}
</script>
