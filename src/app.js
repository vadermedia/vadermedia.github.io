const app = new Vue({
    data,
    computed,
    methods,
    router,
    created() {
        document.body.style.overflow = 'auto'
    },
    mounted() {
        this.toast(`Welcome to ${this.name}`)
    }
}).$mount('#app')