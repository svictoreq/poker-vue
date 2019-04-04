function containsAll (base, keys) {
  let flag = false
  for (let key of keys) {
    if (!base.includes(key)) {
      flag = false
      console.error(`${key} is not included`)
      break
    }
    flag = true
  }
  return flag
}

const store = {
  debug: true,
  state: {},
  setState (data) {
    if (!containsAll(Object.keys(this.state), Object.keys(data))) return
    Object.assign(this.state, data)
    if (this.debug) console.info('setState triggered with', data)
  }
}

Object.freeze(store)

export default store
