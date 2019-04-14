export class Player {
  constructor (id, name, pNumber, turn, money) {
    this.id = id
    this.name = name
    this.pNumber = pNumber
    this.turn = turn
    this.money = money
    this.cards = []
  }

  addCard (card) {
    if (this.cards.length <= 2) {
      this.cards.push(card)
    } else {
      console.error(`${this.name} already has 2 cards`)
    }
  }
}

export class Card {
  constructor (suit, value) {
    this.suit = suit
    this.value = value
  }
}
