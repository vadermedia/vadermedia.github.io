Vue.component('side-bar', {
    template : `
<aside class="col s12 m6 l4 xl3">
    <div>
        <h6 class="center grey-text">Events</h6>
        <vdr-event
            name="Nappy Shower"
            img-link="https://raw.githubusercontent.com/vadermedia/logos/master/VM4.png"
        ></vdr-event>
        <br>
        <h6 class="center grey-text">Music</h6>
        <vdr-mix
            name="Pianic Feel #001"
            link-youtube="https://www.youtube.com/embed/QKhEv337ZHo"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, nihil!"
        ></vdr-mix>
        <vdr-mix-guest
            name="Its Vader Time"
            link-mixcloud="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FVADERMUSIC%2Fan-hour-with-soli-episode-1%2F"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, nihil!"
        ><vdr-mix-guest>
        <br>
        <h6 class="center grey-text">Advertisement</h6>

        <br>
    </div>
</aside>
    `
})