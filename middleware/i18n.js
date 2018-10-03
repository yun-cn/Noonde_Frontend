export default function ({ app, store, route, params, error, redirect, hotReload }) {
  if (hotReload) return
  const locale = params.locale || 'zh-CN'
  if (store.state.base.locale.locales.indexOf(locale) === -1) {
    return redirect('/')
  }
  store.commit('update', ['base.locale', { selected: locale }])
  app.i18n.locale = locale
  if (locale === 'zh-CN' && route.fullPath.indexOf('/zh-CN') === 0) {
    return redirect(route.fullPath.replace(/^\/zh-CN/, '/'))
  }
}
