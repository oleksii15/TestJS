// const playlist = {
//   name: "xcjhvkdf",
//   rating: 5,
//   tracks: ["fdsfvd", "fcDVdf"],
//   trackCount: 3,
// };
// playlist.qwe = 5;
// playlist.rating = 10;
// const propertyName = "tracks";
// console.log(playlist.rating);
// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

// имя ключа совпадает с именем переменной
// const username = "mango";
// const email = "fhkds@gmail.com";
// const signupData = {
//   user,
//   email,
// };
// console.log(signupData);

// вычисляемые свойства
// const inputName = "color";
// const inputValue = "tomato";
// const colorPickerData = {
//   [inputName]: inputValue,
// };
// console.log(colorPickerData);

// МАССИВЫ И ФУНКЦИИ ЭТО ОБЬЕКТЫ
// const a = [1, 2, 3];
// a.hello = "))))";
// console.log(a);

// const fn -function () {
//     console.log('hello');
// }
// fn.hello = '))))';
// console.dir(fn.hello);

// ИЗМЕНЕНИЕ СОДЕРЖИМОГО
// const playlist = {
//   name: "xcjhvkdf",
//   rating: 5,
//   tracks: ["fdsfvd", "fcDVdf"],
//   trackCount: 3,
//   changeName(newName) {
//     console.log("this inside changename:", this);
//     this.nam = newName;
//   },
// };
// playlist.changeName("Новое имя");
// console.log(playlist);

// ДоБАВЛЯЕМ ТРЕК
// const playlist = {
//   name: "xcjhvkdf",
//   rating: 5,
//   tracks: ["fdsfvd", "fcDVdf"],
//   trackCount: 3,
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   gettrackCount() {
//     return this.tracks.length;
//   },
// };
// console.log(playlist.gettrackCount());
// playlist.addTrack("New Track");
// console.log(playlist);

// UPDATErATING
// const playlist = {
//   name: "xcjhvkdf",
//   rating: 5,
//   tracks: ["fdsfvd", "fcDVdf"],
//   trackCount: 3,
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
// };
// playlist.updateRating(4);
// console.log(playlist);

// ПЕРЕБЩР ЧЕРЕЗ ФОР
const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};
const keys = Object.keys(feedback);
let totalFeedaback;
console.log(keys);
for (const key of keys) {
  console.log(feedback[key]);
  totalFeedaback += feedback[key];
}
console.log(totalFeedaback);
// ВТОРОЙ СПОСОБ
const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};
let totalFeedaback;
console.log(values);
for (const value of values) {
  console.log(value);
  totalFeedaback += value;
}
console.log(totalFeedaback);

//РАБОТА С КОЛЛЕКЦИЕЙ
// const friends = [
//   { name: "manfo", online: online },
//   { name: "manfo", online: false },
//   { name: "manfo", online: false },
//   { name: "manfo", online: online },
// ];
// console.table(friends);
// for (const friend of friends) {
//   console.log(friend);
//   friend.newprop = 555;
// }
// console.table(friends);

// ИЩУМ ДРУГА ПО ИМЕНИ
// const friends = [
//   { name: "poly", online: online },
//   { name: "manffggfd", online: false },
//   { name: "manfdfsdfv", online: false },
//   { name: "manfo", online: online },
// ];
// const findFriendbyName = function (allFriends, name) {
//   console.log(friend);
//   for (const friend of friends) {
//     if (friend.name === name) {
//       return "hooorey";
//     }
//   }
//   return "not";
// };
// console.log(findFriendbyName(friends, "poly"));
// console.log(findFriendbyName(friends, "chelsy"));

// ПОЛУЧАЕМ ИМЕНА ВСЕХ ДРУЗЕЙ
// const friends = [
//   { name: "poly", online: online },
//   { name: "manffggfd", online: false },
//   { name: "manfdfsdfv", online: false },
//   { name: "manfo", online: online },
// ];
// const getAllNames = function (allFriends) {
//     const names = [],
//     for (const friend of allFriends) {
//         console.log(friend.name);
//         names.push(friend.name);
//     }
//     return names;
// }
// console.log(getAllNames(friends));

// ПОЛУЧАЕМ ВСЕХ ДРУЗЕЙ ИМЕННО ОНЛАЙН
// const friends = [
//   { name: "poly", online: online },
//   { name: "manffggfd", online: false },
//   { name: "manfdfsdfv", online: false },
//   { name: "manfo", online: online },
// ];
// const getOnlineFriends = function (allfriends) {
//     const onlineFriends = []:
//     for (const friend of allfriends) {
//         console.log(friend);
//         console.log(friend.online);
//         if (friend.online) {
//             onlineFriends.push(friend);
//         }
//     }
//     return onlineFriends;
// }
// console.log(getOnlineFriends(friends));

// СОЗДАТЬ 2 МАССИВА ОНЛАЙН И ОФЛАЙН
// ЕСЛИ ТРУ В ПЕРВЫЙ, В ПРОТИВНОМ ВО ВТОРОЙ
// const getFriendsByOnlineStatus = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };
//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//       continue;
//     }
//     friendsByStatus.offline.push(friend);
//   }
//   return friendsByStatus;
// };
// console.log(getFriendsByOnlineStatus(friends));
// УЗНАТЬ ДЛИНУ ОБЬЕКТА
// const x = {
//   a: 5,
//   b: 4,
//   d: 6,
// };
// console.log(Object.keys(x).length);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// const keys = Object.keys(salaries);
//   const (for key of keys){
//     totalSalary += key};
//   // Change code above this line
//   return totalSalary;
// }