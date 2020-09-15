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

// =========call , bind=======

// const hotel1 = {
//   name: "Rixos",
//   stars: "5",
//   capacity: 300,
// };

// const hotel2 = {
//   name: "Jazz",
//   stars: "5",
//   capacity: 200,
// };

// const hotel3 = {
//   name: "Dnepr",
//   stars: "2+",
//   capacity: 5000,
// };

// const greetGuests = function (guest) {
//   console.log(`${guest} , welcome to our incredible ${this.name} hotel`);
// };

// greetGuests.call(hotel1, "Armen");

// const greetInJazz = greetGuests.bind(hotel2);
// greetInJazz("Donald Trump");

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // показывает текущую ступеньку
//     console.log(this.step);
//     return this;
//   },
// };
// // Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep(); // 1
// // Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().up().down().showStep(); // 1

// const arrayFilms = [];
// let morePictures = {};

// const actor = function (name) {
//   morePictures[name] = [];

//   return function film(pictures) {
//     arrayFilms.push(pictures);

//     morePictures[name].push(pictures);

//     console.log(`${name} act at ${pictures}`);
//   };
// };

// const keanuReevs = actor("Keanu Reevs");
// keanuReevs("Matrix");
// keanuReevs("John Vick");
// keanuReevs("KOLBASA");

// console.log(arrayFilms);

// const jasonStatham = actor("Jason Statham");
// jasonStatham("Transorter");
// jasonStatham("Bla-bla");
// jasonStatham("LaLa");

// console.log(morePictures);

// ===============================================
// const userName = prompt("Tell your name");
// // console.log(userName);
// const greeting = "Hello";

// console.log(`${greeting} , ${userName}`);
// ===============================================

// Create own bind function

// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }

// items = [];

// let person1 = {
//   name: "Vova",
//   age: 30,
//   job: "PHP Developer",
// };

// let person2 = {
//   name: "Sara",
//   age: 30,
//   job: "Project manager",
// };

// bind(person1, logPerson)();
// bind(person2, logPerson)();

// ==========================================

// const user = {
//   name: "Mark",
//   age: 27,
//   phone: +30677777777,
//   email: "e-mail@gmail.com",

//   toShowprops() {
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.phone);
//     console.log(this.email);
//   },
// };

// const user2 = {
//   name: "Andrew",
// };

// const user3 = {
//   name: "Zacharia",
//   age: 102,

//   toUpdateAge(value) {
//     this.age = value;
//     return (this.age = value);
//   },
// };

// const example = function (callback, value) {
//   return callback(value);
// };

// example(user.toShowprops.bind(user));
// example(user.toShowprops.bind(user2));
// console.log(example(user3.toUpdateAge.bind(user), 20));

// ==========================================
// callback

// const toGetResult = function (callback, ...value) {
//   return callback(...value);
// };

// function toGetSum(a, b, c) {
//   return a + b + c;
// }

// function toGetMultiplay(x, y) {
//   return x * y;
// }

// // toGetResult((val) => {
// //   console.log(val % 2);
// // }, 20);

// console.log(toGetResult(toGetSum, 21, 12, 2));

//  ==========================================
// let arrayName = [];
// let arrayPhone = [];
// let arrayEmail = [];

// const toGetForm = function (name, phone, email, ...arr) {
//     console.log(arr);

//   arrayName.push(name);
//   arrayPhone.push(phone);
//   arrayEmail.push(email);
// };

// toGetForm("name", "phone", "email", 1, 2, 3, 4, 5);
// toGetForm("Mark", "1111111", "email@gmail.com", 1, 2, 3, 4, 5);

// console.log(arrayName);
// console.log(arrayPhone);
// console.log(arrayEmail);
// ==========================================

// const product = [
//   {
//     name: "Volvo",
//     price: 50000,
//     quantity: 4,
//     premium: true,
//   },
//   {
//     name: "BMW",
//     price: 70000,
//     quantity: 2,
//     premium: true,
//   },
//   {
//     name: "Audi",
//     price: 80000,
//     quantity: 3,
//     premium: true,
//   },
// ];

// const totalSum = (value, arr) => {
//   //   console.log(arr);
//   for (let obj of arr) {
//     if (obj.name === value) return obj.quantity * obj.price;
//   }
//   return "There's no product you've search";
// };

// console.log(totalSum("Volvo", product));
// console.log(totalSum("MAzda", product));
// console.log(totalSum("Audi", product));
