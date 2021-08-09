<template>
 <div class="default-page">
     <nav class="navbar navbar-expand-lg navbar-light navbar-redreels py-5">
        <a class="navbar-brand" href="#">REDREELS</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <NuxtLink class="nav-link" to="/movies">MOVIES</NuxtLink>
            </li>
            <li class="nav-item text-secondary">
                <a class="nav-link" href="#">TV SHOWS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">PROVIDERS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">NEWS</a>
            </li>
            </ul>
        </div>
        
    </nav>
    <nuxt />
 </div>
</template>

<style scoped>
.navbar-redreels{
    background-color: #F2F2F2;
    height: 125;
}
.default-page{
    background-color: #272520;
}
.navbar-nav li a {
    color: #D1495B !important;
}
</style>