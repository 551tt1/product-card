// Функция, которая принимает 2 параметра
function showTemperatureCity(city, grads) {
  console.log(`Сейчас в ${city} - ${grads} градусов по Цельсию`);
}

// Функция сравнения со скоростью света
const LIGHT_SPEED = 299792458;
function compareLightSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log("Сверхсветовая скорость");
  } else if (speed === LIGHT_SPEED) {
    console.log("Световая скорость");
  } else {
    console.log("Субсветовая скорость");
  }
}

// Покупка в магазине
const product = "Smartphone";
let price = 14000;
buyStoreProduct(14000);
function buyStoreProduct(budget) {
  if (budget < 0) {
    console.log("Бюджет не может быть отрицательным");
    return;
  }
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    let tempDifference = price - budget;
    console.log(`Вам не хватает ${tempDifference} $, пополните баланс`);
  }
}

//5.6/5.7
function calculateFinalPrice(price, discount, isPremium) {
  if ((discount >= 90 && isPremium) || discount === 100) {
    return 0;
  }

  const totalDiscount = isPremium ? discount + 10 : discount;
  return Math.floor((price * (100 - totalDiscount)) / 100);
}
