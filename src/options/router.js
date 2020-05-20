const router = new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            component : CompanyPage,
            children : [
                {
                    path : 'team',
                    component : TeamPage
                }
            ]
        },
        {
            path : '/music',
            component : MusicPage
        },
        {
            path : '/productions',
            component : ProductionsPage
        },
    ]
})