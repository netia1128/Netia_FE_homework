  let cards = [];
  
  function generateNewCardDeck() {
    const numCards = Math.floor(Math.random() * 9);
    for (let i = numCards; i > 0; i--) {
      const card = new Card(i);
      cards.push(card);
    }

    let content = '';

    cards.forEach(card => {
      content += `<article class='card'> 
                    <figure class='card-item' style='background-image: url(${card.imageUrl})'>
                    </figure>
                    <summary class='card-details card-item''>
                      <h5>${card.header}</h5>
                      <p>${card.details}</p>
                    </summary>
                  </article>`;
      });

    let contentSection = document.getElementById("stupid-section")
    contentSection.innerHTML = content
     
  }

class Card {
  constructor(id) {
    this.id = id;
    this.name = `card_${id}`;
    this.imageUrl = `https://picsum.photos/seed/${this.name}/800/800`
    this.header = this.generateCardText(1);
    this.details = this.generateCardText(6);
  }

  generateCardText(length) {
    let text = ''
    for (let i = length; i > 0; i--) {
       text += `${Math.random().toString(36).substring(2, 15)} `;
    }
    return text;
  }
}