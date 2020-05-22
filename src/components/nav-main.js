Vue.component('nav-main',{
    methods : {
        initNavigation() {
            M.Sidenav.init(document.querySelectorAll('.sidenav'), {
                
            })
        },
    },
    template : `
    <div>
        <nav class="animated fadeInDown black">
            <div class="nav-wrapper">
                <router-link to="/">
                    <img 
                        src="https://raw.githubusercontent.com/vadermedia/logos/master/VM2.png"
                        height="64px" 
                        alt="Vader Media" 
                        class="brand-logo center tooltipped" data-position="bottom" data-tooltip="Home Page">
                </router-link>
                <a @click="initNavigation()" data-target="main-nav" class="sidenav-trigger"><i class="iconify center" data-icon="mdi:menu" data-inline="false"></i></a>
                <ul class="right hide-on-med-and-down">
                    <li><router-link to="/music">Music</router-link></li>
                    <li><router-link to="/productions">Productions</router-link></li>                    
                </ul>
            </div>
        </nav>
        <nav-side></nav-side>
    </div>
    `
})