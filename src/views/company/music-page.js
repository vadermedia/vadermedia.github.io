const MusicPage = {
    data() {
        return {
            name : 'Vader Music'
        }
    },
    template : `
    <section>
        <h6 class="center grey-text">{{name}}</h6>
        <guide-three></guide-three>
        <vdr-mix
            name="Pianic Feel #001"
            link-youtube="https://www.youtube.com/embed/QKhEv337ZHo"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, nihil!"
        ></vdr-mix>  
        <guide-three-part-two></guide-three-part-two>
        <vdr-mix-guest
            name="Its Vader Time"
            link-mixcloud="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FVADERMUSIC%2Fan-hour-with-soli-episode-1%2F"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, nihil!"
        ><vdr-mix-guest>
    </section>
    `,
}

