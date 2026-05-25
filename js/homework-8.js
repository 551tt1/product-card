import { productCards } from "./product-cards.js";

const reducedProductCards = productCards.reduce((acc, card) => {
  acc.push({
    title: card.title,
    desc: card.desc
  })
  return acc;
}, []);
console.log(reducedProductCards);

showProductCards();
function showProductCards() {
  const countOfCards = Number(prompt("Сколько карточек отобразить? От 1 до 5")) || 0;
  if(0 <= countOfCards && countOfCards <= 5) {
    renderProductCards(countOfCards, productCards);
  }
  else showProductCards();
}

function renderProductCards(countOfCards, productCards) {
  const productCardsTemplate = document.querySelector("#product-card-template");
  const productCardsWrapper = document.querySelector(".product-card-wrapper");

  
  productCards.slice(0,countOfCards).forEach( productCard => {
    const cloneProductCards = productCardsTemplate.content.cloneNode(true); 
    const img = cloneProductCards.querySelector('.product-card__img');
    img.src = `images/${productCard.image}.png`;
    img.alt = productCard.alt;
    cloneProductCards.querySelector('.product-card__title').textContent = productCard.title; 
    cloneProductCards.querySelector('.product-card__for-skin').textContent = productCard.skinType; 
    cloneProductCards.querySelector('.product-card__descr').textContent = productCard.description; 
    const componentsList = cloneProductCards.querySelector(".product-card__components");
    productCard.composition.forEach( element => {
      const li = document.createElement('li');
      li.textContent = element;
      componentsList.appendChild(li);
    });
    cloneProductCards.querySelector('.product-card__price').textContent = "Цена";
    cloneProductCards.querySelector('.product-card__price-value').textContent = `${productCard.price} \u20BD`;
    productCardsWrapper.appendChild(cloneProductCards);
    console.log(productCardsWrapper);
  })
}