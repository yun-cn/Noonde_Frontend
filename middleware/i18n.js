export default function ({ isHMR, app, store, route, params, error, redirect}) {
  console.log(isHMR)
  if (isHMR) return
  const locale = params.locale || 'zh-CN'
  console.log('params.locale', locale)
  // console.log('store.state.base.locale.locales', store.state.base.locale.locales.indexOf(locale))
  if (store.state.base.locale.locales.indexOf(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  store.commit('update', ['base.locale', { selected: locale }])
  app.i18n.locale = locale
  if (locale === 'zh-CN' && route.fullPath.indexOf('/zh-CN') === 0) {
    return redirect(route.fullPath.replace(/^\/zh-CN/, '/'))
  }
}
