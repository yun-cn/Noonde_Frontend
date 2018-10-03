export const state = () => ({
  base: {
   locale: {
     locales: ['ja', 'en-US', 'zh-CN'],
     selected: 'zh-CN'
   },
   layout: {
    current: null,
    fullPath: null
   },
  }
})


export const mutations = {
  // usage: this.$store.commit('update', ['some.path.to.data', value])
  // you can also use for array like this.$store.commit('update', ['some.path.1.to.data', value])
  // but the changes might not be detected by computed methods
  // update the whole array in that case
  update (state, array) {
    // keys: ['some', 'path', 'to', 'data']
    let keys = array[0].split('.')
    // lastKey: 'data'; keys: ['some', 'path', 'to']
    const lastKey = keys.pop()
    // data: value
    let data = array[1]
    // dig into state by keys
    // result: initialize by state at first
    const pointer = keys.reduce((result, key) => {
      // key: 'some'
      if (key.length === 0) return result || {}
      // '1' => formattedKey: 1; 'some' => formattedKey: 'some'
      const formattedKey = isNaN(key) ? key : parseInt(key)
      // if the key 'some' exists in result, next result: result['some']
      // if not, set result['some'] = {}
      return result[formattedKey] || {}
    }, state)

    const isObject = pointer[lastKey] instanceof Object && pointer[lastKey].constructor === Object
    // set value to the specified key
    pointer[lastKey] = isObject ? { ...pointer[lastKey], ...data } : data
  }
}
