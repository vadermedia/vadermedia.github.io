Vue.component('nav-footer', {
    computed : {
        copyright() {
            let year = new Date().getFullYear()
            return `Vader Media (PTY) LTD © ${year}`
        }
    },
    template : `
    <footer class="animated fadeInUp page-footer black">
        <div class="container">
            <div class="row">
            <div class="col l6 s12">
                <h5 class="white-text">Vader Music</h5>
                <ul>
                <li><a class="grey-text text-lighten-3" href="#!">Podcast</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Mixes</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Twitter</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">YouTube</a></li>
                </ul>
            </div>
            <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Vader Productions</h5>
                <ul>
                <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Instagram</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Twitter</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">YouTube</a></li>
                </ul>
            </div>
            </div>
            <div class="row">
            <div class="col l6 s12">
                <h5 class="white-text">Connect With Us</h5>
                <ul>
                <li><a class="grey-text text-lighten-3" href="#!">Send us a message on Messenger</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Make an inquiry via emial</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Submit music or visual content</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">booking inquiries</a></li>
                </ul>
            </div>
            <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Socials</h5>
                <ul>
                <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Instagram</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Twitter</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">YouTube</a></li>
                </ul>
            </div>
            </div>
        </div>
        <div class="footer-copyright grey darken-4">
            <div class="container">
            {{copyright}}
            <a class="grey-text text-lighten-4 right" href="#!">Github</a>
            </div>
        </div>
    </footer>
    `
})