//.2
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbersArray.filter(number => number >= 5);
console.log(filteredNumbers);
//.3
const stringArray = ["книга", "ручка", "тетрадь", "урок"];
console.log(stringArray.includes("книга"));
//.4
function reverseArray(array){
  return array.reverse();
};
reverseArray(numbersArray);
reverseArray(stringArray);

//.6
import { userComments } from "./comments.js";
//.7
userComments.filter(user => {
  if(user.email.includes('.com')) {
    console.log(user);
  }
});
//.8
const modifiedPostIDUsers = userComments.map(user => ({...user, postId: user.id <= 5 ? 2: 1}));
//.9
const userWithNameID = userComments.map(user => ({name: user.name, id: user.id}));
//.10
const validUserComments = userComments.map(user => ({...user, isInvalid: user.body.length > 180? true: false}));

console.log(modifiedPostIDUsers, userWithNameID, validUserComments);

//.11
const emailListByReduce = userComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailListByReduce);
const emailListByMap = userComments.map(comment => comment.email);

//.12
const emailToString = emailListByMap.toString();
const emailStringByJoin = emailListByMap.join(", ");