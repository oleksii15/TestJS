// const movies = ["a", "b", "c"];
// let kino = "";
// for (const movie of movies) {
//   kino += ` ${movie}`;
// }

// console.log(kino);

// const word = "ALEX LEO";
// console.log(word.slice());

// const subscribe = "free";
// let cost = 0;
// switch (subscribe) {
//   case "vip":
//     cost = 100;
//     break;
//   case "free":
//     cost = 0;
//     break;
//   default:
//     console.log("lack of money on your account");
// }

// console.log(subscribe);

// const fridge = "samsung";
// const cost = fridge === "samsung" ? 1000 : 5;
// console.log(fridge);

// let sick = 0;
// let room = 30;
// while (sick < room) {
//   console.log(sick);
//   sick += 1;
// }

// Задание
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка.
// не использовал оператор break
// не использовал переменную number

// function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }
// console.table(findNumber);
