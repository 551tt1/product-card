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
car.ownerName = person.name;

//6.5
function setMaxSpeed(objectName) {
  if (!objectName.maxSpeed) {
    objectName.maxSpeed = 160;
  }
}
setMaxSpeed(car);

//6.6
function propertyValueOutput(objectName, objectProperty) {
  console.log(this.objectProperty);
}
//6.7
const array = ["Bread", "Milk", "Meat", "Cheese"];
//6.8
const library = [
  (firstBook = {
    bookName: "1984",
    bookAuthor: "Джордж Оруэлл",
    bookPublicationYear: 1949,
    bookCoverColor: "серый",
    bookGenre: "антиутопия",
  }),
  (secondBook = {
    bookName: "Гордость и предубеждение",
    bookAuthor: "Джейн Остин",
    bookPublicationYear: 1813,
    bookCoverColor: "светло-зелёный",
    bookGenre: "роман",
  }),
  (thirdBook = {
    bookName: "Война и мир",
    bookAuthor: "Лев Толстой",
    bookPublicationYear: 1869,
    bookCoverColor: "тёмно-зелёный",
    bookGenre: "исторический роман",
  }),
  (forhBook = {
    bookName: "Преступление и наказание",
    bookAuthor: "Фёдор Достоевский",
    bookPublicationYear: 1866,
    bookCoverColor: "бордовый",
    bookGenre: "психологический роман",
  }),
  (fifthBook = {
    bookName: "451 градус по Фаренгейту",
    bookAuthor: "Рэй Брэдбери",
    bookPublicationYear: 1953,
    bookCoverColor: "оранжевый",
    bookGenre: "научная фантастика",
  }),
];

library.push(
  (sixthBook = {
    bookName: "Старик и море",
    bookAuthor: "Эрнест Хемингуэй",
    bookPublicationYear: 1952,
    bookCoverColor: "синий",
    bookGenre: "повесть",
  }),
);
//6.9
const library2 = [
  (firstStarBook = {
    bookName: "Наследник Империи",
    bookAuthor: "Тимоти Захн",
    bookPublicationYear: 1991,
    bookCoverColor: "чёрный",
    bookGenre: "sci-fi",
  }),
  (secondStarBook = {
    bookName: "Тёмная сила восстаёт",
    bookAuthor: "Тимоти Захн",
    bookPublicationYear: 1992,
    bookCoverColor: "тёмно-серый",
    bookGenre: "sci-fi",
  }),
  (thirdStarBook = {
    bookName: "Последний полёт «Звезды Смерти»",
    bookAuthor: "Тимоти Захн",
    bookPublicationYear: 1993,
    bookCoverColor: "красный",
    bookGenre: "sci-fi",
  }),
];

const bigLibrary = library.concat(library2);

//6.10
const rareLibrary = bigLibrary.map(function (element, index, array) {
  if (array[index].bookPublicationYear <= 1950) {
    return (array[index] = { ...array[index], isRare: true });
  } else {
    return (array[index] = { ...array[index], isRare: false });
  }
});
