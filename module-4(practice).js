// =================MODULE-4(practice)======================

// ===callback===

// const greeting = function (callback) {
//   let name = "Johny";
//   callback(name);
// };

// const sayHiToUser = function (name) {
//   console.log(name);
// };

// greeting(sayHiToUser);

// ===callback без callback ===

// const greeting = function () {
//   let name = "Johny";
//   sayHiToUser(name);
// };

// const sayHiToUser = function (name) {
//   console.log(name);
// };

// greeting();

// const countDinosaurs = function (n, dinosaurs) {
//   for (let i = 1; i < n; i += 1) console.log(`${i} ${dinosaurs} going high`);
// };

// countDinosaurs(51, "dinosaurs");

// ==========2. Абстрагирование повторения=======

// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log("Logging value: ", value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// =======3.Фильтрация массива========

// #1

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, (fruit) => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, (fruit) => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes

// #1(2)

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const bananas = test(element);

//     if (bananas) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, (fruit) => fruit.name === "bananas");
// console.log(freshFruits); // массив с объектами apples и bananas

// // const fruitsWithQuantity = filter(fruits, (fruit) => fruit.quantity >= 120);
// // console.log(fruitsWithQuantity); // массив с объектами apples и grapes

// ============================================
// Удалить сотрудника , который много зарабатывает и не активен

// const filter = function (array, test) {
//   const filteredWorkers = [];

//   for (let worker of array) {
//     // const passed = test(worker);

//     if (!test(worker)) {
//       filteredWorkers.push(worker);
//     }
//   }
//   return filteredWorkers;
// };

// const community = [
//   { name: "John", salary: 200, isActiveWorker: true },
//   { name: "Derek", salary: 150, isActiveWorker: false },
//   { name: "Anna", salary: 100, isActiveWorker: true },
//   { name: "Mariia", salary: 50, isActiveWorker: false },
//   { name: "Tony", salary: 100, isActiveWorker: true },
// ];

// const firedWorker = filter(
//   community,
//   (employee) => employee.salary > 100 && employee.isActiveWorker === false
// );

// console.log(firedWorker);

// ============================================

// ============================================

// ===================Счетчик==================

// const counter = function () {
//   let count = 0;

//   const onIncremet = function () {
//     count++;
//     console.log(count);
//   };

//   const onDecremet = function () {
//     count--;
//     console.log(count);
//   };

//   return { onIncremet, onDecremet };
// };

// let counter1 = counter();

// counter1.onIncremet();
// counter1.onIncremet();
// counter1.onDecremet();
// counter1.onDecremet();

// let counter2 = counter();

// counter1.onIncremet();
// counter1.onIncremet();

// counter1.onDecremet();

// ============================================

// ====================calculator=================

// function sum(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }
// function div(a, b) {
//   return a / b;
// }
// function mult(a, b) {
//   return a * b;
// }

// function calc(a, b, callback) {
//   return callback(a, b);
// }

// let result = calc(3, 4, mult);

// console.log(result);

// ============================================

// task-2.js

// const inventory = {
//     items: ["Knife", "Gas mask"],
//     add(itemName) {
//         console.log(`Adding ${itemName} to inventory`);

//         this.items.push(itemName);
//     },
//     remove(itemName) {
//         console.log(`Removing ${itemName} from inventory`);

//         this.items = this.items.filter((item) => item !== itemName);
//     },
// };

// const invokeInventoryAction = function (itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action(itemName);
// };

// invokeInventoryAction("Medkit", inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction("Gas mask", inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// const Mark = {
//     items: [],
// };

// invokeInventoryAction("fullstack", inventory.add.bind(Mark));
// console.log(Mark.items);

// const Ilya = {
//     items: ["timeManagment", "wisdom"],
// };

// invokeInventoryAction("timeManagment", inventory.remove.bind(Ilya));

// console.log(Ilya.items);

// ============================================

//             ============PRACTICE===========

// ===================== ADDITIONAL ========================== //

// == task-1 == //
// Написати метод every який приймає масив і ф-ю callback (в якій ми будемо робити різні перевірки) Цей метод повертає true якщо кожен елемент масиву пройшов перевірку з callback. Якщо хоча б один елемент не проходить перевірку то повертає false, callback приймає елемент масиву

// const every = function (arr, callback) {
//   console.log(callback(arr));
// };

// every([1, 2, 3, 4, 5], callback); // true (перевіряємо чи елементи < 10)
// every([2, 45, 67, 34], callback); // false (перевіряємо чи елементи > 10)

// function callback(item) {
//   for (let elem of item) {
//     if (elem < 10) {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return true;

//   //   const a = item < 10 ? true : false;
// }

// == task-2 == //
// Написати метод some який приймає масив і ф-ю callback. Цей метод поверне true якщо хоча б один елемент масиву пройже перевірку з callback callback приймає елемент масиву

// const some = function (arr, callback) {
//   console.log(callback(arr));
// };

// some([1, 2, 3, 23, 5], callback); // true (перевіряємо чи елементи > 10)
// some([12, 45, 67, 34], callback); // false (перевіряємо чи елементи < 10)

// function callback(item) {
//   for (let elem of item) {
//     return elem < 10 ? true : false;
//   }
// }
