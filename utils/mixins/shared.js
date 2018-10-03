
export default {
  name: 'mixins',
  methods: {
    path (url) {
      let locale = this.$store.state.base.locale.selected
      return (locale === 'zh-CN' ? url : '/' + locale + url)
    },
    push (store, key, path, hash) {
      store.commit('update', [key, hash])
      let hash2 = {}
      for (let key in hash) {
        hash2[changeCase.snakeCase(key)] = hash[key]
      }
      let params = queryString.stringify(hash2)
      let selected = store.state.base.locale.selected
      let localePath = selected === 'zh-CN' ? path : `/${selected}${path}`
      window.history.pushState(null, null, `${localePath}?${params}`)
      store.commit('update', ['base.layout', {
        fullPath: `${localePath}?${params}`
      }])
    },
    changeLanguage(context, targetLang) {
      if (this.lang === targetLang) return;
      let newLocale = targetLang !== 'zh-CN' ? ('/' + targetLang) : ''
      console.log('newLocale', newLocale)
      if (this.lang === 'zh-CN') {
        context.$router.push(context.fullPath.replace(/^\/+/, newLocale + '/'))
      } else {
        context.$router.push(context.fullPath.replace(/^\/[^/]+/, newLocale))
      }
    }
  }
}
