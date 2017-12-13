module.exports = {
    head: {
        link: [
            { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
        ]
    },
    build: {
        vendor: ['vuetify'],
        extractCSS: true,
        extend (config) {
            config.devtool = false
        }
    },
    plugins: ['~/plugins/vuetify'],
    css: ['~/assets/app.styl'],
    router: {
        middleware: 'test'
    }
};