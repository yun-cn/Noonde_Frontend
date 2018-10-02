import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.base.locale.selected,
    fallbackLocale: 'zh-CN',
    messages: {
      'ja': require('json-loader!yaml-loader!~/assets/locales/ja.yaml'),
      'en': require('json-loader!yaml-loader!~/assets/locales/en.yaml'),
      'zh-CN': require('json-loader!yaml-loader!~/assets/locales/zh-CN.yaml')
    }
  })
}
