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
function outputPropertyValue(objectName, objectProperty) {
  console.log(objectName[objectProperty]);
}
//6.7
const array = ["Bread", "Milk", "Meat", "Cheese"];
//6.8
const library = [
  {
    bookName: "1984",
    bookAuthor: "Джордж Оруэлл",
    bookPublicationYear: 1949,
    bookCoverColor: "серый",
    bookGenre: "антиутопия",
  },
  {
    bookName: "Гордость и предубеждение",
    bookAuthor: "Джейн Остин",
    bookPublicationYear: 1813,
    bookCoverColor: "светло-зелёный",
    bookGenre: "роман",
  },
  {
    bookName: "Война и мир",
    bookAuthor: "Лев Толстой",
    bookPublicationYear: 1869,
    bookCoverColor: "тёмно-зелёный",
    bookGenre: "исторический роман",
  },
  {
    bookName: "Преступление и наказание",
    bookAuthor: "Фёдор Достоевский",
    bookPublicationYear: 1866,
    bookCoverColor: "бордовый",
    bookGenre: "психологический роман",
  },
  {
    bookName: "451 градус по Фаренгейту",
    bookAuthor: "Рэй Брэдбери",
    bookPublicationYear: 1953,
    bookCoverColor: "оранжевый",
    bookGenre: "научная фантастика",
  },
];

library.push(
  {
    bookName: "Старик и море",
    bookAuthor: "Эрнест Хемингуэй",
    bookPublicationYear: 1952,
    bookCoverColor: "синий",
    bookGenre: "повесть",
  },
);
//6.9
const library2 = [
  {
    bookName: "Наследник Империи",
    bookAuthor: "Тимоти Захн",
    bookPublicationYear: 1991,
    bookCoverColor: "чёрный",
    bookGenre: "sci-fi",
  },
  {
    bookName: "Тёмная сила восстаёт",
    bookAuthor: "Тимоти Захн",
    bookPublicationYear: 1992,
    bookCoverColor: "тёмно-серый",
    bookGenre: "sci-fi",
  },
  {
    bookName: "Последний полёт «Звезды Смерти»",
    bookAuthor: "Тимоти Захн",
    bookPublicationYear: 1993,
    bookCoverColor: "красный",
    bookGenre: "sci-fi",
  },
];

const bigLibrary = library.concat(library2);

//6.10
const rareLibrary = bigLibrary.map(function (element, index, array) {
  if (array[index].bookPublicationYear <= 1950) {
    return array[index] = { ...element, isRare: true };
  } else {
    return array[index] = { ...element, isRare: false };
  }
});
