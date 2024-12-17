// Card
// - emoji: string
// - isFaceUp: boolean
// - isMatched: boolean

export const knuthShuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

export const noShuffle = (array) => array;

export class Memorize {
  cards = [];

  // Use dependency injection here so that we don't need to mock it
  // Think about the design first before use mock
  constructor(emojis, shuffleFunc) {
    if (!emojis) {
      throw new Error('empty string');
    }

    if (Array.from(emojis).length != Array.from(new Set(emojis)).length) {
      throw new Error('duplicate emojis');
    }

    for (let emoji of Array.from(emojis)) {
      this.cards.push({ emoji, isFaceUp: false });
      this.cards.push({ emoji, isFaceUp: false });
    }

    shuffleFunc(this.cards);
  }

  choose(index) {
    const facedUpCardIndex = this.cards.findIndex((card) => card.isFaceUp);
    if (facedUpCardIndex != -1) {
      if (this.cards[facedUpCardIndex].emoji == this.cards[index].emoji) {
        this.cards[facedUpCardIndex].isMatched = true;
        this.cards[index].isMatched = true;
      } else {
        this.cards[facedUpCardIndex].isFaceUp = false;
        this.cards[index].isFaceUp = false;
      }
    }
    this.cards[index].isFaceUp = true;
  }
}
