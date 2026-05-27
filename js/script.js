// Покраска первой карточки

const recolorFirstCardButton = document.getElementById(
  "recolor-first-card-button",
);
const firstCatalogCard = document.querySelector(".product-card");
const greyHashColor = "#cfcfdc";

recolorFirstCardButton.addEventListener("click", () => {
  firstCatalogCard.style.backgroundColor = greyHashColor;
});

// Покраска всех карточек

const lightGreenHashColor = "#d4eae6";

const catalogCards = document.querySelectorAll(".product-card");
const recolorAllCardButton = document.getElementById("recolor-cards-button");

recolorAllCardButton.addEventListener("click", () => {
  catalogCards.forEach(
    (card) => (card.style.backgroundColor = lightGreenHashColor),
  );
});

// Переход на страницу Google

const googleOpenButton = document.getElementById("open-google-button");
googleOpenButton.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы действительно хотите перейти на сайт Google?");
  if (answer == true) {
    window.open("https://google.com");
  } else {
    console.log("Пользователь отменил переход на Google");
  }
}

// выведение контента в консоль
const selectionTitle = document.querySelector(".product-selection__title");
selectionTitle.addEventListener("mouseover", () => {
  console.log(selectionTitle.textContent);
});

// Покраска кнопки, на которую нажимаешь

const selfRecolorButton = document.getElementById("self-recolor-button");
let clickCounter = 0;

selfRecolorButton.addEventListener("click", () => {
  if (clickCounter % 2 === 0) {
    selfRecolorButton.style.backgroundColor = "#c07abb";
    selfRecolorButton.style.color = "#000000";
  } else {
    selfRecolorButton.style.backgroundColor = "#000";
    selfRecolorButton.style.color = "#fff";
  }
  clickCounter++;
});
