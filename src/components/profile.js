Vue.component('profile', {
    props : {
        image : String,
        title : String,
        bio : String,
        quote : String,
        quoted : String,
        location : String,
        roles : String,
        skills1 : Array,
        skills2 : Array,
    },
    template : `
<div class="card grey darken-3">
    <div class="card-action blue-text">
        <a href="#"><span class="iconify white-text" data-icon="mdi:facebook" data-inline="false"></span></a>
        <a href="#"><span class="iconify white-text" data-icon="mdi:instagram" data-inline="false"></span></a>
        <a href="#"><span class="iconify white-text" data-icon="mdi:twitter" data-inline="false"></span></a>
    </div>
    <img :src="image" class="responsive-img">
    <div class="card-content">
        <div class="container">
            <span class="card-title">{{title}}</span>
            <div class="divider"></div>   
            <br>
            <p>{{bio}}</p>
            <br>
            <div class="card grey darken-2 z-depth-2">
                <div class="card-content">
                    <blockquote class="center">"{{quote}}"</blockquote>
                    <h6 class="center">{{quoted}}</h6>
                </div>
            </div>
            <br>
            <ul class="collection with-header grey-text text-darken-3">
                <li class="collection-header"><h6>Location</h6></li>
                <li class="collection-item">{{location}}</li>
                <li class="collection-header"><h6>Team Roles</h6></li>
                <li class="collection-item">{{roles}}</li>
                <li class="collection-header"><h6>Primary Skills</h6></li>
                <li class="collection-item">{{skills1}}</li>
                <li class="collection-header"><h6>Secondary Skills</h6></li>
                <li class="collection-item">{{skills2}}</li>
            </ul>
        </div>
    </div>
</div>
`
})