import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.base.locale.selected,
    fallbackLocale: 'en',
    messages: {
      'ja': require('json-loader!yaml-loader!~/assets/locales/ja.yaml'),
      'en-US': require('json-loader!yaml-loader!~/assets/locales/en-US.yaml'),
      'zh-CN': require('json-loader!yaml-loader!~/assets/locales/zh-CN.yaml'),
    }
  });
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }
    return `/${app.i18n.locale}/${link}`;
  }
}

