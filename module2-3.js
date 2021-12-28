// const add = function (a, b) {
//   console.log(a);
//   console.log(b);
//   console.log("gfasdgf");

//   console.log("a + b = ", result);

//   return a + b;
// };

// const r1 = add(5, 3);
// console.log("r1:", r1);
// add(5, 7);
// add(10, 15);

// const fn = function () {
//   console.log(1);
//   console.log(2);
//   console.log(3);
// };

// console.log(fn());

// const calculateTotalPrice = function (items) {
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

// ФУНКЦИЯ ЛОГИТЕМС ДЛЯ ПЕРЕБОРА И ЛОГИНИРОВАНИЯ
// const logitems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };
// logitems(["Mango", "Kiwi", "Poly", "Ajax"]);
// logitems([1, 2, 3, 4, 5]);
// logitems(["клавиатура", "наушники", "часы"]);

//ФУНКЦМЯ ЛОГИНФАЙНД ДЛЯ ПОИСКА ЛОГИНА
// const logins = ["m4ngoDoge", "kiwi"];
// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Пользователь ${loginToFind} найден`;
//     }
//   }
//   return `Пользователь ${loginToFind} не найден`;
// };
// console.log(findLogin(logins, "avocodr"));
// console.log(findLogin(logins, "kiwi"));
// console.log(findLogin(logins, "jam41"));

// ДРУГОЙ СПОСОБ
// const logins = ["m4ngoDoge", "kiwi"];
// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} не найден`;
// };
// console.log(findLogin(logins, "avocodr"));
// console.log(findLogin(logins, "kiwi"));
// console.log(findLogin(logins, "jam41"));

// НАЙТИ САМОЕ МАЛЕНЬКОЕ ЧИСЛО
// const findSmallestNumber = function (numbers) {
//   let smallestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// };
// console.log(findSmallestNumber([3, 8, 5, 1]))

// Поменять высоту букв
// const changeCase = function (string) {
//   const letters = string.split("");
//   let invedtring = " ";

//   for (const letter of letters) {
//     const isInUpperCase = letter === letter.toUpperCase();
//     invedtring += isInUpperCase ? letter.toLowerCase() : letter.toUpperCase();
//   }

//   return invedtring;
// };
// console.log(changeCase("qweRTY"));

//ЧЕРЕЗ ДЕФИС СЛИТНО СТРОКУ
// const slugify = function (string) {
//   return string.split(" ").join("-");
// };
// console.log(slugify("one more time"));

// const fn = function (a, b, c, ...args) {
//   console.log(a, b, c);
//   console.log(args);
// };
// fn("hello", 1, 2, 3);

// ПРОВЕРКА ЕСТЬ ЛИ ЭЛЕМЕНТ В СПИСКЕ
// const filternumbers = function (array, ...args) {
//   console.log("array", array);
//   console.log("args", args);
//   const uniqueElements = [];
//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push[element];
//       console.log("True");
//     }
//   }
//   return uniqueElements;
// };
// console.log(filternumbers([1, 5, 6, 7, 8], 10, 5, 4, 3, 8));
