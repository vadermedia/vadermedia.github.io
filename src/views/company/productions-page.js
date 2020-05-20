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
        <guide-two-part-two></guide-two-part-two>
    </section>
    `,
}