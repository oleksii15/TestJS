// ПЕРЕДАЧА СЛОЖНЫХ ТИПОВ
// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// console.log(a);
// console.log(b);
// console.log(a[0] === b[0]);
// console.log(a === b);
// a[1].y = 1000;
// console.log(a);
// console.log(b);

// РАССПЫЛЕНИЕ ОБЪЕКТОВ
// const a = { x: 1, y: 2 };
// const b = { x: 5, z: 10 };
// const c = Object.assign({}, a, b);
// console.log(c);
// НОВЫЙ ВАРИАНТ
// const a = { x: 1, y: 2 };
// const b = { x: 5, z: 10 };
// const c = {
//   ...a,

//   ...b,

// };
// console.log(c);
// ПОЧИТАТЬ ИМПЕРАТИВНЫЙ МЕТОД

// const defaultSettings = {
//   theme: "light",
//   showNotofocations: true,
//   hideSidebar: false,
// };
// const userSettings = {
//   showNotofocations: false,
//   hideSidebar: true,
// };
// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,

// };
// console.log(finalSettings);

// ДЕСТРУКТАРИЗАЦИЯ ОБЬЕКТА
// const playlist = {
//   name: "dzdgf",
//   rating: 1,
// };
// const { rating, name: amen, authot = 5555 } = playlist;
// console.log(playlist);

// ДЕСТРУКТИРАЗАЦИЯ МАССИОВОВ
// const authors = {
//   ola: 5,
//   fhjsdfsj: 7,
//   fdavdv: 74,
// };
// const entries = Object.entries(authors);
// for (const [name, rating] of entries) {
//   console.log(`name: ${name}, rating ${rating}`);
// }

// ОПЕРАЦИЯ РЕСТ
// const user = {
//   named: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// const { named, tag, ...restlala } = user;
// console.log(named, tag, restlala);
// console.log(restlala);

// ПАТТЕРН
// const showProfileInfo = function (userProfile) {
//   const {
//     named,
//     tag,
//     stats: { followers, views, likes },
//   } = userProfile;
//   //   console.log(named.tag.followers, likes, views);
// };

// const profile = {
//   named: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// showProfileInfo(profile);
// console.log(profile);

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// clients.splice(0, 2, "fbdjns");
// console.log(clients);

// const obj = {
//   name: "Name",
//   showName() {
//     console.log(this.name);
//   },
// };

// const showName = obj.showName;
// // const showName = function() {
// //   console.log(this.name);
// // };
// console.log(showName);

// const mathOperation = function (sign, ...restValues) {
//   let result = 0;

//   if (sign === "+") {
//     for (const value of restValues) {
//       result += value;
//     }

//     return result;
//   }

//   if (sign === "-") {
//     for (const value of restValues) {
//       result -= value;
//     }

//     return result;
//   }
// };

// const result1 = mathOperation("-", 1, 2, 2, -5);
// const result2 = mathOperation("+", 1, 2, 2, -5);
// const result3 = mathOperation("+");
// console.log(result1);
// console.log(result2);
// console.log(result3);

// const firstUser = {
//   name: "Tom",
//   age: 20,
// };

// const secondUser = {
//   name: "Jerry",
//   age: 18,
// };

// const thirdUser = {
//   name: "Pikachu",
//   age: 22,
// };

// const findOldestUser = function (...users) {
//   if (users.length === 0) {
//     console.error("Users are not defined");
//     return;
//   }

//   // аналог получения первого
//   //let oldestUser = users[0];
//   let [oldestUser, ...restUsers] = users;
//   // console.log(oldestUser);

//   for (const user of restUsers) {
//     const { age: userAge } = user;
//     // аналог
//     // const userAge = user.age;
//     const { age: oldestUserAge } = oldestUser;

//     if (userAge > oldestUserAge) {
//       oldestUser = user;
//     }
//   }

//   return oldestUser;
// };

// const oldestUser = findOldestUser(firstUser, secondUser, thirdUser);
// console.log(oldestUser);

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const item = items[i];

//       if (productName === item.name) {
//         console.log("нашли такой продукт ", productName);
//         console.log("индекс: ", i);

//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }

//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({ name: "🍎", price: 50 });
// cart.add({ name: "🍇", price: 60 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍓", price: 110 });
// cart.add({ name: "🍓", price: 110 });
// cart.add({ name: "🍓", price: 110 });

// console.table(cart.getItems());

// console.log("Total: ", cart.countTotalPrice());

// cart.remove("🍇");
// console.table(cart.getItems());

// // cart.clear();
// // console.log(cart.getItems());

// console.log("Total: ", cart.countTotalPrice());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');

// console.table(cart.getItems());

// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг
// (свойство genres)
// из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

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
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genres, index, array) => array.indexOf(genres) === index
// );
// const calculateTotalBalance = (users) =>
//   users.reduce((total, user) => total + user);

// const sortByDescendingFriendCount = (users) => {
//   return [...users].sort((a, b) => b.friends.localCompare(a.friends));
// };

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
// // Change code below this line

// const names = books
//   .flatMap((book) => book.author)
//   .filter((author, index, array) => array.indexOf(author) === index)
//   .sort((a, b) => a.author.localeCompare(b.author));


