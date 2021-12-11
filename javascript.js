  let cards = [];
  let filterArray = [];

  function deleteCard(id) {

    filterArray.push(id);
    let content = '';

    cards.filter(card => {
      if(!filterArray.includes(card.id)) {
        content += `<article class='card'> 
        <figure class='card-item' style='background-image: url(${card.imageUrl})'>
        </figure>
        <summary class='card-details card-item''>
        <h5>${card.header}</h5>
        <p>${card.details}</p>
        <p id="delete-${card.id}" style="color: darkred; text-decoration: underline" onClick="deleteCard(${card.id});"> Delete</p>
        </summary>
        </article>`;
        }
      });

    let contentSection = document.getElementById("stupid-section")

    contentSection.innerHTML = '';
    contentSection.innerHTML = content
    
  }
  
  function generateNewCardDeck(numCards = Math.floor(Math.random() * 9)) {
    cards = [];

    for (let i = numCards; i > 0; i--) {
      const card = new Card(i);
      cards.unshift(card);
    }
    let content = '';

    cards.forEach(card => {
      content += `<article class='card'> 
                    <figure class='card-item' style='background-image: url(${card.imageUrl})'>
                    </figure>
                    <summary class='card-details card-item''>
                      <h5>${card.header}</h5>
                      <p>${card.details}</p>
                      <p id="delete-${card.id}" style="color: darkred; text-decoration: underline" onClick="deleteCard(${card.id});"> Delete</p>
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