Vue.component('fab', {
    methods : {
        initFAB() {
            M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'), {
                direction : 'left'
            })
        }
    },
    created() {
        this.initFAB()
    },
    template : `
    <div class="fixed-action-btn">
        <a @click="initFAB()"class="btn-floating btn-large black">
            <div class="container">
            <img src="https://raw.githubusercontent.com/vadermedia/logos/master/VM2.png"
            height="64px" 
            alt="Vader Media"
            class="circle responsive-img">
            </div>
        </a>
        <ul>
            <li><a class="btn-floating red"><i class="iconify" data-icon="mdi:hexagon-multiple" data-inline="true"></i></a></li>
            <li><a class="btn-floating yellow darken-1"><i class="iconify" data-icon="mdi:hexagon-multiple" data-inline="false"></i></a></li>
            <li><a class="btn-floating green"><i class="iconify" data-icon="mdi:hexagon-multiple" data-inline="true"></i></a></li>
            <li><a class="btn-floating blue"><i class="iconify" data-icon="mdi:hexagon-multiple" data-inline="true"></i></a></li>
        </ul>
    </div>
    `
})