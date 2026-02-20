// Функция, которая принимает 2 параметра
function showTemperatureCity(city, grads) {
  return console.log(`Сейчас в ${city} - ${grads} градусов по Цельсию`);
}

// Функция сравнения со скоростью света
const lightSpeed = 299792458;
function speedCheck(speed) {
  if (speed > lightSpeed) console.log("Сверхсветовая скорость");
  else if (speed === lightSpeed) console.log("Световая скорость");
  else console.log("Субсветовая скорость");
}

// Покупка в магазине
const product = "Smartphone";
let price = 14000;
productStore(14000);
function productStore(budget) {
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
  if ((discount >= 90 && isPremium) || discount === 100) return 0;

  const totalDiscount = isPremium ? discount + 10 : discount;
  return Math.floor((price * (100 - totalDiscount)) / 100);
}
