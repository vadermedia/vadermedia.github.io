Vue.component('nav-side',{
    template : `
<ul class="sidenav black white-text" id="main-nav">
    <li>
        <div class="user-view">
            <div class="background">
                <img class="responsive-img" src="https://raw.githubusercontent.com/vadermedia/logos/master/VM3.png">
            </div>
            <a href="#user"><img class="circle" src="https://raw.githubusercontent.com/vadermedia/logos/master/VM4.png"></a>
            <a href="#name"><span class="grey-text name">Vader Media (PTY) LTD</span></a>
            <a href="mailto:inquiries@vadermedia.co.za"><span class="grey-text email">inquiries@vadermedia.co.za</span></a>
        </div>
    </li>
    <li><router-link to="/music" class="white-text">Music</router-link></li>
    <li><router-link to="/productions" class="white-text">Productions</router-link></li>
</ul> 
    `
})