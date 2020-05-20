const CompanyPage = {
    data() {
        return {
            name : 'Vader Media'
        }
    },
    template : `
<section>
    <h6 class="center grey-text">{{name}}</h6>
    <guide-one></guide-one>
    <guide-two></guide-two>
    <guide-three></guide-three>
    <guide-four></guide-four>
    <br>
</section>
    `,
}