Vue.component('vdr-event', {
    props : {
        'img-link' : String,
        'name' : String,
        'name' : String,
    },
    template : `
<div class="card grey darken-2 white-text">
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