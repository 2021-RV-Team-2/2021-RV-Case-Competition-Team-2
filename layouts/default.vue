<template>
 <div class="default-page">
     <nav class="navbar navbar-expand-lg navbar-light navbar-redreels py-5">
        <NuxtLink class="navbar-brand position-absolute" to="/">
            <img src="@/assets/redreelslogo.png" width="200px" alt="">
        </NuxtLink>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
            <li class="nav-item px-4">
                <NuxtLink class="nav-link active" to="/movies">MOVIES</NuxtLink>
            </li>
            <li class="nav-item text-secondary px-4">
               <NuxtLink class="nav-link" to="/tv">TV SHOWS</NuxtLink>
            </li>
            <li class="nav-item px-4">
                <NuxtLink class="nav-link" to="/">PROVIDERS</NuxtLink>
            </li>
            <li class="nav-item px-4">
                <NuxtLink class="nav-link" to="/">NEWS</NuxtLink>
            </li>
            </ul>
        </div>
        
    </nav>
    <!-- SEARCH BAR -->
    <!-- <form class="form-inline mx-auto">
        <input class="form-control mx-auto" type="search" placeholder="Search" aria-label="Search">
    </form> -->

    <div id='app'>
    <Search/>
    </div>

    <nuxt />

    <!-- Footer -->
    <footer class="footer text-center bg-light text-muted">

    <!-- Section: Links  -->
    <section class="">
        <div class="container text-center text-md-start mt-5 pt-3">
        <!-- Grid row -->
        <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">Red/Reels</h6>
            <p>
                Red/Reels is a Red Ventures intern project created by Nick Santini, Nicole Colberg, Chiz Nnodu, and Luiza Wolf. 
            </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
                Useful links
            </h6>
            <p>
                <NuxtLink to="/movies">MOVIES</NuxtLink>
            </p>
            <p>
                <NuxtLink to="/tv">TV SHOWS</NuxtLink>
            </p>
            <p>
                <NuxtLink to="/">PROVIDERS</NuxtLink>
            </p>
            <p>
                <NuxtLink to="/watch">WHAT TO WATCH</NuxtLink>
            </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p>Charlotte, NC 29707, US</p>
            <p>redreels@fakeemail.com</p>
            <p> + 01 234 567 88</p>
            <p> + 01 234 567 89</p>
            </div>
            <!-- Grid column -->
        </div>
        <!-- Grid row -->
        </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="">Red/Reels</a>
    </div>
    <!-- Copyright -->
    </footer>
    <!-- Footer -->

    
 </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Roboto:wght@100;300;400;500;700&family=Montserrat:wght@700&display=swap');


.navbar-redreels{
    background-color: #F2F2F2;
    height: 125;
}
.default-page{
    background-color: #272520;
}
.navbar-nav li a {
    color: #D1495B !important;
    font-family: "Lato";
    letter-spacing: .1rem;
}

.nav-link .active {
    text-decoration: underline;
}

.navbar-brand{
    font-family: "Montserrat";
    font-size: 30px;
    color: #D1495B;
}

.navbar-header {
        position: absolute;
}

.form-inline {
    position: relative;
    top: -20px;
}

.form-control {
    border: 0px;
    border-radius: 15px;
    width: 30%;
    box-shadow: 0px 0px 0px 10px #F2F2F2;
}

#app {
    position: relative;
    top: -30px;
}

h6{
    font-family: "Montserrat";
    font-size: 17px;
    color: #D1495B;
}

.footer{
  position: relative;
  font-family: "Lato";
  clear:both;
  font-size: 15px;
}
</style>