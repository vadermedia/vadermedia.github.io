Vue.component('vdr-event', {
    props : {
        'img-link' : String,
        'name' : String,
    },
    template : `
<div class="card black white-text">
    <div class="card-image">
        <img :src="imgLink">
        <span class="card-title">{{name}}</span>
        <a class="btn-floating halfway-fab waves-effect waves-light grey darken-3 center"><i class="iconify" data-icon="mdi:calendar" data-inline="true"></i></a>
    </div>
    <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
    </div>
</div>
    `
})

Vue.component('vdr-mix', {
    props : {
        'description' : String,
        'link-youtube' : String,
        'name' : String,
        'track-list' : Array,
    },
    template : `
<div class="card black">
    <div class="card-content">
        <span class="card-title activator">{{name}}<i class="iconify right" data-icon="mdi:more-vert" data-inline="true"></i></span>
        <br>
        <div class="video-container z-depth-1">
            <iframe width="560" height="315" :src="linkYoutube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <br>
        <p>{{description}}</p>
    </div>
    <div class="card-action">
        <a href="#"><i class="iconify center" data-icon="mdi:facebook" data-inline="true"></i> Listen</a>
        <a href="#"><i class="iconify center" data-icon="mdi:youtube" data-inline="true"></i> Watch</a>
        <a href="#"><i class="iconify center" data-icon="mdi:google-drive" data-inline="true"></i> Download</a>
        <a href="#"><i class="iconify center" data-icon="mdi:mixcloud" data-inline="true"></i> Stream</a>
    </div>
    <div class="card-reveal grey darken-3">
        <span class="card-title activator">Information<i class="iconify right" data-icon="mdi:close" data-inline="true"></i></span>
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Artist</th>
                <th>Song</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="track in trackList" v-key="track.time">
                <td>{{track.time}}</td>
                <td>{{track.artist}}</td>
                <td>{{track.title}}</td> 
            </tr>
        </tbody>
    </table>
    </div>
</div>
    `
})

Vue.component('vdr-mix-guest', {
    props : {
        'description' : String,
        'link-mixcloud' : String,
        'name' : String,
        'track-list' : Array,
    },
    template : `
<div class="card black">
    <div class="card-content">
        <span class="card-title activator">{{name}}<i class="iconify right" data-icon="mdi:more-vert" data-inline="true"></i></span>
        <br>
        <iframe width="100%" height="60" :src="linkMixcloud" frameborder="0" ></iframe>
        <br>
        <p>{{description}}</p>
    </div>

    <div class="card-action">
        <a href="#"><i class="iconify center" data-icon="mdi:google-drive" data-inline="true"></i> Download</a>
        <a href="#"><i class="iconify center" data-icon="mdi:mixcloud" data-inline="true"></i> Stream</a>
    </div>

    <div class="card-reveal grey darken-4">
        <span class="card-title activator">Information<i class="iconify right" data-icon="mdi:close" data-inline="true"></i></span>
        <p>No copyright infringement is intended in this content. Please support the artists by buying their music.</p>
        <p>For bookings contact: <a href="mailto:bookings@vadermedia.co.za">Vader Media Bookings</a></p>
        <p>For inquiries contact: <a href="mailto:inquiries@vadermedia.co.za">Vader Media Inquiries</a></p>
    </div>
</div>
    `
})