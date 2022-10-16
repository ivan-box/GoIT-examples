// type='module' строгий режим
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     let index = this.books.indexOf(oldName);
//     this.books.splice(index, 1, newName);
//   },
// };
// function highAndLow(numbers) {
//   let newArr = [];
//   const arrNumbers = numbers.split(" ").map((el) => +el);

//   console.log(arrNumbers, typeof arrNumbers[0]);

//   //   const maxNumber = Math.max(...arrNumbers);
//   //   const minNumber = Math.min(...arrNumbers);
//   //   newArr.push(maxNumber, minNumber);
//   //   console.log(newArr);
//   return newArr;
//   //   console.log(newArr, typeof newArr);
//   //   return (newArr = newArr.push(
//   //     Math.max(...arrNumbers),
//   //     Math.min(...arrNumbers)
//   //   ));
// }

// highAndLow("1 2 3 4 5");

// const number = function (busStops) {
//   let total = 0;
//   const res = busStops.map((el) => (total += el[0] - el[1]));
//   console.log(total);
//   return res;
// };

// number([
//   [10, 0],
//   [3, 5],
//   [5, 8],
// ]);

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach((el) => {
//     if (secondArray.includes(el)) {
//       commonElements.push(el);
//     }
//   });

//   console.log(commonElements);
//   return commonElements;
// }

// getCommonElements([1, 2, 3], [2, 4]);

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => (totalPrice += item));

//   console.log(totalPrice);
//   return totalPrice;
// };
// calculateTotalPrice([164, 48, 291]);

// const changeEven = (numbers, value) => {
//   const newNumbers = [];
//   numbers.forEach((el) => {
//     if (el % 2 === 0) {
//       newNumbers.push(el + value);
//     } else {
//       newNumbers.push(el);
//     }
//   });
//   console.log(newNumbers);
//   return newNumbers;
// };
// changeEven([1, 2, 3, 4, 5], 10);

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((el) => el % 2 === 0);
// const oddNumbers = numbers.filter((el) => el % 2 === 1);
// console.log(evenNumbers, oddNumbers);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];

// const allGenres = books.flatMap((el) => el.genres);
// const uniqueGenres = allGenres.filter(
//   (el, i, books) => books.indexOf(el) === i
// );

// console.log(allGenres);
// console.log(uniqueGenres);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// const getFriends = (users) => {
//   const allFriends = users.flatMap((el) => el.friends);
//   return (uniqueFriends = allFriends.filter(
//     (el, i, arr) => arr.indexOf(el) === i
//   ));
// };

// getFriends(users);
// console.table(getFriends(users));

// function check(a, x) {
//   return a.includes(x);
// }
// console.log(check);
// check([66, 101], 66);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((el) => el.title === BOOK_TITLE);
// const bookByAuthor = books.find((el) => el.author === AUTHOR);
// console.table(bookWithTitle, bookByAuthor);

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((total, number) => total + number, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(playtimes, typeof playtimes[0], totalPlayTime, averagePlayTime);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) =>
//   a.author.localeCompare(b.author)
// );

// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// console.log(
//   sortedByAuthorName,
//   sortedByReversedAuthorName,
//   sortedByAscendingRating,
//   sortedByDescentingRating
// );

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = [...books]
//   .filter((el) => el.rating > MIN_BOOK_RATING)
//   .map((el) => el.author)
//   .sort((a, b) => a.localeCompare(b));

// console.log(names);

// const getNamesSortedByFriendCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length).map(el => el.name)

// const getSortedFriends = (users) =>
//   [...users]
//     .flatMap((el) => el.friends)
//     .filter((el, i, arr) => arr.indexOf(el) === i)
//     .sort((a, b) => a.localeCompare(b));

// const getSortedFriends = (users) =>
//   [...users]
//     .flatMap((users) => users.friends)
//     .filter((friend, index, user) => user.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));

// const getTotalBalanceByGender = (users, gender) => {
//   [...users]
//     .filter((el) => el.gender === gender)
//     .reduce((total, el) => total + el.balance, 0);
// };

const counter = {
  value: 0,
  increment(value) {
    console.log("increment -> this", this);
    this.value += value;
  },
  decrement(value) {
    console.log("decrement -> this", this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};
updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));
console.log(counter, updateCounter(10, counter.increment));

// const obj = {
//   a: 5,
//   b: 10,
// };
// console.log(obj.a);
