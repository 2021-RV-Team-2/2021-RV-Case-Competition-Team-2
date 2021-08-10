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


</style>