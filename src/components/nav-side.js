Vue.component('nav-side',{
    template : `
        <ul class="sidenav grey darken-3 white-text" id="main-nav">
            <li><router-link to="/music" class="white-text">Music</router-link></li>
            <li><router-link to="/productions" class="white-text">Productions</router-link></li>
        </ul> 
    `
})