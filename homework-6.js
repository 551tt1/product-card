// 6.2
const person = {
  name: "Ali",
  age: 25,
  email: "example@gmail.ru",
  job: "building",
  "job position": "worker",
  country: "Russia",
  city: "Moscow",
  isMarried: true,
};
//6.3
const car = {
  mark: "BWM",
  model: "X3",
  "year manufacture": 2003,
  color: "black",
  transmission: "Manual transmission",
};
car.owner = person.name;

//6.5
function setMaxSpeed(objectName) {
  if (!objectName.maxSpeed) {
    objectName.maxSpeed = 160;
  }
}
setMaxSpeed(car);

//6.6
function getObectPropertyValue(object, objectProperty) {
  return object[objectProperty];
}
//6.7
const array = ["Bread", "Milk", "Meat", "Cheese"];
//6.8
const bookLibrary = [
  {
    name: "1984",
    author: "Джордж Оруэлл",
    publicationYear: 1949,
    coverColor: "серый",
    genre: "антиутопия",
  },
  {
    name: "Гордость и предубеждение",
    author: "Джейн Остин",
    publicationYear: 1813,
    coverColor: "светло-зелёный",
    genre: "роман",
  },
  {
    name: "Война и мир",
    author: "Лев Толстой",
    publicationYear: 1869,
    coverColor: "тёмно-зелёный",
    genre: "исторический роман",
  },
  {
    name: "Преступление и наказание",
    author: "Фёдор Достоевский",
    publicationYear: 1866,
    coverColor: "бордовый",
    genre: "психологический роман",
  },
  {
    name: "451 градус по Фаренгейту",
    author: "Рэй Брэдбери",
    publicationYear: 1953,
    coverColor: "оранжевый",
    genre: "научная фантастика",
  },
];

library.push(
  {
    name: "Старик и море",
    author: "Эрнест Хемингуэй",
    publicationYear: 1952,
    coverColor: "синий",
    genre: "повесть",
  },
);
//6.9
const libraryStarWarsBook = [
  {
    name: "Наследник Империи",
    author: "Тимоти Захн",
    publicationYear: 1991,
    coverColor: "чёрный",
    genre: "sci-fi",
  },
  {
    name: "Тёмная сила восстаёт",
    author: "Тимоти Захн",
    publicationYear: 1992,
    coverColor: "тёмно-серый",
    genre: "sci-fi",
  },
  {
    name: "Последний полёт «Звезды Смерти»",
    author: "Тимоти Захн",
    publicationYear: 1993,
    coverColor: "красный",
    genre: "sci-fi",
  },
];

const bigLibrary = bookLibrary.concat(libraryStarWarsBook);

//6.10
const rareLibrary = bigLibrary.map(book => ({
  ...book,
  isRare: book.publicationYear <= 1950
}));
