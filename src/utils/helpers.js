import { Card } from '@/utils/classes'

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

function createCardData (suitNum, valueNum) {
  const card = {
    suit: null,
    value: null
  }

  switch (suitNum) {
    case 0:
      card.suit = 'spades'
      break

    case 1:
      card.suit = 'hearts'
      break

    case 2:
      card.suit = 'clubs'
      break

    case 3:
      card.suit = 'diamonds'
      break
  }

  switch (valueNum) {
    case 0:
      card.value = 'A'
      break

    case 10:
      card.value = 'J'
      break

    case 11:
      card.value = 'Q'
      break

    case 12:
      card.value = 'K'
      break

    default:
      card.value = `${valueNum + 1}`
      break
  }

  return card
}

export function generateDeck () {
  const deck = []
  for (let suit = 0; suit < 4; suit++) {
    for (let value = 0; value < 13; value++) {
      const cardData = createCardData(suit, value)
      deck.push(new Card(cardData.suit, cardData.value))
    }
  }
  return deck
}
