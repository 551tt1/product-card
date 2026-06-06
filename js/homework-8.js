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

  productCards.slice(0, countOfCards).forEach(productCard => {
    const compositionHTML = productCard.composition.map(element => `<li>${element}</li>`).join("")    

    const cardHTML = `
      <article class="product-card">

        <img
          class="product-card__img"
          src="images/${productCard.image}.png"
          alt="${productCard.alt}"
        >
        <h2 class="product-card__title">
          ${productCard.title}
        </h2>
        <p class="product-card__for-skin">
          ${productCard.skinType}
        </p>
        <p class="product-card__descr">
          ${productCard.description}
        </p>
        <ul class="product-card__components">
          ${compositionHTML}
        </ul>
        <div class="product-card__price-block">
          <span class="product-card__price">
            Цена
          </span>
          <span class="product-card__price-value">
            ${productCard.price} ₽
          </span>
        </div>
      </article>
    `;
    productCardsWrapper.insertAdjacentHTML("beforeend", cardHTML);
  });
}