import { Card } from './Card.js'
import { Cards } from './Cards.js'

export const CardGenerator = {
  generateNewCardDeck: () => {
    const cards = new Cards();
    const numCards = Math.floor(Math.random() * 9);
    for (let i = numCards; i > 0; i--) {
      const card = new Card(i);
      cards.addCard(card);
    }
    return cards;
  }
};