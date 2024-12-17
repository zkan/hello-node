// Card
// - emoji: string
// - isFaceUp: boolean
// - isMatched: boolean

export class Memorize {
    cards = []
    constructor(emojis) {
        if (!emojis) {
            throw new Error('empty string')
        }

        if (Array.from(emojis).length != Array.from(new Set(emojis)).length) {
            throw new Error('duplicate emojis')
        }

        for (let emoji of Array.from(emojis)) {
            this.cards.push({ emoji, isFaceUp: false })
            this.cards.push({ emoji, isFaceUp: false })
        }
    }

    choose(index) {
        const facedUpCardIndex = this.cards.findIndex((card) => card.isFaceUp)
        if (facedUpCardIndex != -1) {
            if (this.cards[facedUpCardIndex].emoji == this.cards[index].emoji) {
                this.cards[facedUpCardIndex].isMatched = true
                this.cards[index].isMatched = true
            } else {
                this.cards[facedUpCardIndex].isFaceUp = false
                this.cards[index].isFaceUp = false
            }
        }
        this.cards[index].isFaceUp = true
    }
}