export class Player {
  constructor (id, name, turn, money) {
    this.id = id
    this.name = name
    this.turn = turn
    this.money = money
    this.cards = []
  }

  addCard (card) {
    if (this.cards.length <= 2) {
      this.cards.push(card)
    } else {
      console.error('The player already has 2 cards')
    }
  }
}
