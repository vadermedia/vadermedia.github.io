const ProductionsPage = {
    data() {
        return {
            name : 'Vader Productions'
        }
    },
    template : `
    <section>
        <h6 class="center grey-text">{{name}}</h6>
        <guide-two></guide-two>
        <vdr-event
            name="Nappy Shower"
            img-link="https://raw.githubusercontent.com/vadermedia/logos/master/VM4.png"
        ></vdr-event>
        <br>
        <guide-two-part-two></guide-two-part-two>
    </section>
    `,
}