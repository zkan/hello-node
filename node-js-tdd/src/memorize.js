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
            this.cards.push(emoji)
            this.cards.push(emoji)
        }
    }
}