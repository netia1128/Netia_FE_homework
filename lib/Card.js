export class Card {
  constructor(id) {
    this.id = id;
    this.name = `card_${id}`;
    this.url = `https://picsum.photos/seed/${this.name}/800/800`
  }
}