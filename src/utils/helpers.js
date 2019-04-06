export function containsAllKeys (base, comp) {
  let flag = false
  for (let key of comp) {
    if (!base.includes(key)) {
      flag = false
      console.error(`${key} is not included`)
      break
    }
    flag = true
  }
  return flag
}
