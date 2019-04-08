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

export function getRandomNames (n) {
  const names = [
    'John',
    'Bob',
    'Barry',
    'William',
    'Jane',
    'Jennifer',
    'Michael',
    'Jose',
    'Mary',
    'Daisy',
    'Robert',
    'Emily',
    'Martha',
    'Clara',
    'Carlos',
    'Will',
    'Steve',
    'Olivia',
    'Franklin',
    'Anne',
    'Trevor',
    'Oliver',
    'Bryan',
    'Jeffrey'
  ]
  const selected = []
  for (let i = 0; i < n; i++) {
    const index = Math.floor(Math.random() * names.length)
    selected.push(names.splice(index, 1)[0])
  }
  return selected
}
