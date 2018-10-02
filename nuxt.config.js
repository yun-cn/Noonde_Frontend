module.exports = {

  build: {
    vendor: [
      'element-ui',
      'vue-i18n'
    ],
    extend (config, { isDev }) {
      if (isDev &&  process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/i18n'
  ],
  router: {
    middleware: [
      'i18n'
    ]
  },
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  head: {
    title: 'Noonde',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Inn search engine' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css' }
    ]
  },
  loading: { color: '#3B8070' }
}
