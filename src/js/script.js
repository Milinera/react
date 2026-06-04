'use strict';
//try\catch

try {
    console.log(xx)
    console.log('normal')
} catch(e) {
    console.log(e.name);
    console.log(e.massage);
} finally {
    console.log('ever')

}
console.log('last')

const err = new Error('dddd');
console.log(err.message)

//модули
// let number = 4;
// (function(){ //функция с самовызовом
//     let number = 2;
//     console.log(number)
// }());
// const user = (function() {
//     const privat = function() {
//         console.log('aaa')
//     }
//     return {
//         sayhel: privat
//     }
// }())
// user.sayhel()


//инкапсуляция
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }
//     say() {
//         console.log(`имя ${this.name} возраст ${this._age}`)
//     }
//     get age() {
//         return this._age;
//     }
//     set age(age) {
//         this._age  = age * 2;
//     }
// }
// const ivan = new User('ivan', 27);
// console.log(ivan.age);
// ivan.age = 35;
// console.log(ivan.age);
// ivan.say();

// Упражнение 21
// const funds = [
//     {amount: -1400},
//     {amount: 2400},
//     {amount: -1000},
//     {amount: 500},
//     {amount: 10400},
//     {amount: -11400}
// ];

// const getPositiveIncomeAmount = (data) => {
//     return data.filter((item) => item.amount > 0).reduce((container, item) => container + item.amount, 0)
// };
// const getTotalIncomeAmount = (data) => {
//     if (data.some(data => data.amount < 0)) {
//         return data.reduce((container, item) => container + item.amount, 0)
//     } else {
//         getPositiveIncomeAmount(data)
//     }
// };

// Упражнение 20
// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];
// function showGoodFilms(arr) {
//     return arr.filter(item => item.rating >= 8)
// }
// function showListOfFilms(arr) {
//     return arr.reduce((container, item) => {
//         if (container.length === 0) {
//             return item.name
//         }
//         return container += `, ${item.name}`
//     }, '')
// }
// function setFilmsIds(arr) {
//     return arr.map((item, index) => {
//         item.id = index
//         return item
//     })
// }
// const tranformedArray = setFilmsIds(films);
// function checkFilms(arr) {
//     return arr.every((item => {
//         if (item.id || item.id === 0) {
//             return true
//         } 
//     }))
// }




//reduce, map , filter, every, some 
// const somet = [1,2,3,4,5];
// console.log(somet.every(item => item > 0))


// const somet2 = [1,2,3,4,5];
// console.log(somet2.some(item => item > 5))

// const [first, ...d] = ['red', 'green', 'blue', 'yellow'];
// console.log(first); // 'red'
// console.log(d);  // ['green', 'blue', 'yellow']

// const user = {
//     name: 'ddd0'
// }
// const { name = 'Russia' } = user;
// console.log(name);

// const orders = [
//     { id: 1, customer: "Alice", amount: 150, status: "delivered", category: "electronics" },
//     { id: 2, customer: "Bob", amount: 80, status: "pending", category: "books" },
//     { id: 3, customer: "Alice", amount: 200, status: "delivered", category: "clothing" },
//     { id: 4, customer: "Charlie", amount: 50, status: "cancelled", category: "books" },
//     { id: 5, customer: "Bob", amount: 300, status: "delivered", category: "electronics" },
//     { id: 6, customer: "Alice", amount: 90, status: "pending", category: "books" },
//     { id: 7, customer: "Charlie", amount: 120, status: "delivered", category: "clothing" },
//     { id: 8, customer: "David", amount: 450, status: "delivered", category: "electronics" }
// ];

// function onlyDiliveredMore100(shop) {
//     return orders.filter((item) => {
//         if (item.status === "delivered" && item.amount > 100) {
//             return item
//         }
//     })
// }
// console.log(onlyDiliveredMore100(orders))

// function transformForString(shop) {
//     return shop.map((item) => {
//         return `Клиент ${item.customer} купил ${item.category} на ${item.amount} руб.,`
//     })
// }
// console.log(transformForString(onlyDiliveredMore100(orders)))

// function allAmount(shop) {
//     return shop.reduce((container, item) => {
//         return container + item.amount
//     }, 0)
// }
// console.log(allAmount(orders))

// function groupClientAmmout(shop) {
//     return shop.reduce((container, item) => {
//         if (!container[item.customer]) {
//             container[item.customer] = 0;
//         }
//         container[item.customer] += item.amount;
//         return container
//     }, {})
// }
// console.log(groupClientAmmout(orders))

// function moreValueCategory(shop) {
//     return shop.filter(item => item.status === "delivered").reduce((container, item) => {
//         if (!container[item.category]) {
//             container[item.category] = 0
//         }
//         container[item.category] += item.amount
//         return container
//     }, {})
// }
// console.log(moreValueCategory(orders))

// function moreValueCategory2(shop) {
//     let newshop = Object.entries(shop);
//     return newshop.reduce((container, item) => {
//         if (item[1] > container[1]) {
//             return item
//         }
//         return container
//     })
// }
// console.log(moreValueCategory2(moreValueCategory(orders)))

// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve()
//         }, time)
//     })
// }

// test(1000).then(() => console.log(1000))
// test(2000).then(() => console.log(2000))
// test(3000).then(() => console.log(3000))


// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('all');
// })

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('first');
// })

// const req = new Promise(function(resolve, reject){
//     console.log('загрузка 1');
//     setTimeout(() => {
//         console.log('загрузка 2');

//         const data1 = {
//             item: 1
//         }
//         resolve(data1);
//     }, 2000)

// })
// req.then((data) => {
//     const req2 = new Promise((resolve, reject) => {
//         console.log(data);
//         resolve(data);
//     });

//     req2.then(da => {
//         da.mod = true;
//         return da;
//         console.log(da)
//     }).then
// })

// const numbers = [2, 3, 4, 5];
// const sum = numbers.reduce((container, item) => {
//     return container * item
// })
// console.log(sum)

// const text = "Hello world";
// const res = text.split('').reduce((re, item) => {
//     if (!re[item]) {
//         re[item] = 0
//     };
//     re[item]++
//     return re
// }, {})
// console.log(res)

// const words = ["cat", "table", "elephant", "dog", "giraffe"];
// function moreThe(mass) {
//     return mass.filter(item => item.length > 3).reduce((res, item) => {
//         return res += `,${item}`
//     })
// }
// console.log(moreThe(words))

// const strings = ["short", "medium length", "very long string here", "tiny"];
// const longer = strings.reduce((res, item) => {
//     if (item.length > res.length) {
//         return item
//     }
//     return res
// })
// console.log(longer)


// const nested = [[1, 2], [3, 4], [5, 6]];


// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// // Считаем количество каждого фрукта
// const count = fruits.reduce((acc, fruit) => {
//     if (!acc[fruit]) {
//         acc[fruit] = 0;
//     }
//     acc[fruit]++;
//     return acc;
// }, {});

// console.log(count); // { apple: 3, banana: 2, orange: 1 }



// const books = [
//   { id: 1, title: "1984", author: "Orwell", year: 1949, genres: ["dystopian", "classic"], rating: 4.8 },
//   { id: 2, title: "Brave New World", author: "Huxley", year: 1932, genres: ["dystopian", "sci-fi"], rating: 4.5 },
//   { id: 3, title: "The Great Gatsby", author: "Fitzgerald", year: 1925, genres: ["classic", "romance"], rating: 4.2 },
//   { id: 4, title: "Dune", author: "Herbert", year: 1965, genres: ["sci-fi", "adventure"], rating: 4.9 },
//   { id: 5, title: "The Catcher in the Rye", author: "Salinger", year: 1951, genres: ["classic"], rating: 3.9 },
//   { id: 6, title: "Foundation", author: "Asimov", year: 1951, genres: ["sci-fi"], rating: 4.7 }
// ];


// function filterMoreThen1950andRateMore45(shop) {
//     return shop.filter((item) => {
//         if (item.year > 1950 && item.rating > 4.5) {
//             return true
//         }
//     })
// }
// console.log(filterMoreThen1950andRateMore45(books));

// function filterNoClassic(shop) {
//     return shop.filter((item) => {
//         return !item.genres.some(genre => genre === "classic");
//     })
// }
// console.log(filterNoClassic(books))

// function mapCart(shop) {
//     return shop.map((item) => {
//         return `${item.title} (${item.year}) - ${item.rating}`
//     })
// }
// console.log(mapCart(books))

// function addAge(shop) {
//     return shop.map((item) => {
//         return {
//             ...item,
//             age: 2026 - item.year
//         };
//     })
// }
// console.log(addAge(books))

// function sciMap(shop) {
//     return shop.filter((item) => {
//         if (item.rating > 4.6) {
//             if (item.genres.includes("sci-fi")) {
//                 return true
//             }
//         }
//     }).map((item) => {
//         return item.title
//     })
// }
// console.log(sciMap(books))

// function moreOneGeners(shop) {
//     return shop.filter((item) => {
//         if (item.genres.length > 1) {
//             return true
//         }
//     }).map((item) => {
//         return {
//             title: item.title, rating: item.rating
//         }
//     })
// }
// console.log(moreOneGeners(books))

// function searhMidd(shop) {
//     let newMass = shop.filter(item => item.genres.includes('dystopian')).map(item => item.rating);
//     let res = 0;
//     newMass.forEach(element => {
//         res += element
//     });
//      return res = res / newMass.length
// }
// console.log(searhMidd(books))

// function groupBooksByGenre(shop) {
//     return shop.reduce((acc, book) => {
//         // acc = аккумулятор (наш объект с жанрами)
//         // book = текущая книга
        
//         // Проходим по каждому жанру текущей книги
//         book.genres.forEach(genre => {
//             // Если жанра еще нет в аккумуляторе — создаем пустой массив
//             if (!acc[genre]) {
//                 acc[genre] = [];
//             }
//             // Добавляем название книги в массив этого жанра
//             acc[genre].push(book.title);
//         });
        
//         return acc; // обязательно возвращаем аккумулятор
//     }, {}); // пустой объект — начальное значение
// }

// console.log(groupBooksByGenre(books));





//ajax
// const reques = new XMLHttpRequest();  //создание конекта к файлу
// reques.open('GET', 'js/файл.json');   //создание настроек (метод, ссылка, синхронность, логин, пароль)
// reques.setRequestHeader('Content-type', 'application/json; charset=utf-8');  //заголовок
// reques.send();  //прием

// reques.addEventListener('readystatechange', () =>{   //контроль за движение запроса
//     if (reques.readyState === 4 && reques.status === 200) {
//         console.log(reques.response);   //вывод ответа в консоль
//         const data = JSON.parse(reques.response);
//     }
// })
// reques.addEventListener('load', () =>{   //запрос готов
//     if (reques.status === 200) {
//         console.log(reques.response);   //вывод ответа в консоль
//         const data = JSON.parse(reques.response);
//     }
// })



//глубокое копирование с помощью json
// const person = {
//     name: 'alex',
//     let: '+222',
//     petents: {
//         name: 'all',
//         let: 'ddd',
        
//     }
// };
// const clone = JSON.parse(JSON.stringify(person));


//rest оператор
// const lock = function(a, b, ...x) {
//     console.log(a, b, ...x);
// }
// function calc(number, basis = 3) {
//     // basis = basis || 2; //замена параметра по умолчанию
//     console.log(number* basis)
// }
// lock(1,2,3,4,5,6,1,3,5,1);
// calc(1)

//class
// class Hz {
//     constructor (height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }
// const squere = new Hz(100,100);
// const squere2 = new Hz(200,100);
// console.log(squere.calcArea());
// console.log(squere2.calcArea());


// class Hz2 extends Hz {  //новый класс на основе главного с теми же методами 
//     constructor (height, width, text, bgColor) {
//         super(height, width);  //вызывает конструктор родителя
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showInfo() {
//         console.log(`текст: ${this.text}, ${this.bgColor}`)
//     }
// }
// const div = new Hz2(100, 200, 'test', '#fff');
// div.showInfo()


//this   обычная функция this - window, елси strict то undefined
// function show() {
//     console.log(this);
// }
// show(); 
// const obj = {
//     a: 10,
//     b: 12,
//     sum: function() {
//         console.log(this);
//     }
// }
// obj.sum();  //контекст obj и его значения
// const box = document.querySelector('.box');
// const width = box.clientWidth;
// const width2 = box.offsetWidth;
// console.log(width);
// console.log(width2);
// function say(last) {
//     console.log(this);
//     console.log(this.name + last);
// };
// const user = {
//     name: 'fff'
// };
// say.call(user, 'ddd');  // привязка функциии к контексту user 
// say.apply(user, ['adada']);
// function count(num) {
//     return this*num;
// }
// const doudle = count.bind(2); //создание новой функции с контекстом 
// console.log(doudle(12))

// const btn = document.querySelector('button');
// btn.addEventListener('click', function(){
//     console.log(this);
//     this.style.background = 'red'
// })






//data
// const now = new Date(2026, 0, 17, 20);   //указание даны
// const now = new Date(0);  //1970 год
// const now = new Date();
// console.log(now.getFullYear());   //год
// console.log(now.getDate());
// console.log(now.getMonth());
// console.log(now.getTime());  //в миллисекундах с 1970
// console.log(now.setHours(5, 30));
// console.log(now);
// let start = new Date();
// for (let i =0; i < 1000000; i++) {
//     let sum = i** 3;
// }
// let end = new Date();
// alert(`${end - start}`)



// //упражнение 19 с рекурсией
// function deepCount(a){
//     let res = 0;
//     function mass(index) { 
//         if (Array.isArray(index)) {
//             res += index.length;
//             index.forEach(item => {
//                 mass(item)
//             })
//         }
//     }
//     mass(a);
//     return res
// }
// console.log(deepCount([1, 2, [3, 4, [5]]]))


// // //упражнение 18 и как убирать определенные символы 
// function isPangram(string) {
//     let lower = string.toLowerCase(),
//         mass = new Array(...lower),
//         set = new Set(mass);

//     if (set.size < 26) {
//         return false
//     } else {
//         return true
//     }

// }

// console.log(isPangram('The quick brown fox jumps over the lazy dog'))


// // Синтаксис: строка.replace(/[^нужныеСимволы]/g, '')
// // ^ внутри квадратных скобок означает "все КРОМЕ"
// let text = "Hello! How are you? 123.";
// // Оставить только буквы (a-z, A-Z)
// let onlyLetters = text.replace(/[^a-z]/gi, '');
// console.log(onlyLetters); // "HelloHowareyou"
// // Оставить только цифры
// let onlyDigits = text.replace(/[^0-9]/g, '');
// console.log(onlyDigits); // "123"
// // Оставить буквы и цифры
// let lettersAndDigits = text.replace(/[^a-z0-9]/gi, '');
// console.log(lettersAndDigits); // "HelloHowareyou123"
// // Оставить буквы, цифры и пробелы
// let lettersDigitsSpaces = text.replace(/[^a-z0-9\s]/gi, '');
// console.log(lettersDigitsSpaces); // "Hello How are you 123"
// // Оставить русские буквы
// let russianText = "Привет, world! 123";
// let onlyRussian = russianText.replace(/[^а-яё]/gi, '');
// console.log(onlyRussian); // "Привет"






// //упражнение 17
// function amountOfPages(summary){
//     let res = 0,
//         index = 0,
//         str = '';
//     for (let i = 0; i < summary; i++) {
//         index++;
//         str += index;
//         if (str.length > summary) {
//             break
//         } else {
//             res = index;
//         }
//     }
//     return res
// }
// console.log(amountOfPages(25));


//bigint
// const bigint = 11111111111111111111111111111111111111111111111111n;  //создание bigint +n


//set убирание повторений 

// const arr = [1, 1, 5, 2, 3, 1, "5"];

// const set = new Set(arr);

// set.add('s');
// // delete, .has, .clear, .size
// console.log(set);
// Array.from(set); //получение массива обратно


// //map - карты
// shops = [
//     {one: 1},
//     {one: 2},
//     {two: 3}
// ]

// const map = new Map([
//     [{paper: 5000}, 4000]
// ]);
// map.set(shops[0], 5000);
// map.set(shops[1], 6000); //добавление ключей в виде обьекта
// map.set(shops[2], 7000);
// console.log(map);
// // console.log(map.get(shops[1]));   //получение данных
// // console.log(map.has(shops[1]));   //проверка наличия true/false
// // map.delete(key);
// // map.clear();
// // map.size;
// // map.keys();




//интерполяция
// || или для выбора между
// let user;
// console.log(user ?? 'User')  //нулишь оператор не учитывает 0
// matches('.box') // поиск по классу
// closset('.wrapper') // поиск по родителям 
// Object.definePropertie(массив, ключа {значения})
// Object.keys(x) // массив с ключами
// Object.values(x) // массив с значениями 
// Object.entries(x) // массив с значениями/ключами (массив в массиве)


//события на мобилке
//touchstart touchend touchmove
//anync/defer


// let named;
// console.log(named?.dd) // ? проверяет есть ли что-то слево, если нет то undefind
// d.ddd?(); // проверка функции которой нет




//Exercise 16
// function factorial(x) {
//     if (typeof(x) !== 'number' || !Number.isInteger(x)) {   //Number.isInteger(x) - проверка на целое число
//         return 'NaN'
//     } else if (x <= 1){
//         return 1
//     } else {
//         if (x === 2) {
//             return x
//         } else {
//             return x * factorial(x - 1);
//         }
//     }
// }
// console.log(factorial(2))


//рекурсия
// function pow (x, n) {
//     let res = 1;
//     for (let i = 0; i < n; i++) {
//         res *= x;
//     }
//     return res;
// }
// function pow (x, n) {
//     if (n === 1) {
//         return x
//     } else {
//         return x * pow(x, n - 1);
//     }
// }
// console.log(pow(2, 3))
// let main = {
//     num: 100,
//     low: {
//         num: 200
//     }
// }
// for(let corse of Object.values(main)) {
//     //все итемы обьекта в массив
// }
// Array.isArray() //проверка на массив


//передвижение по DOM
// console.log(document.body.childNodes) //хранилище внутри блока body, lastchild firstchild
// const box = document.querySelector('.box'),
//       block = document.querySelector('.col1'),
//       item = document.querySelector('[data-item="3"]');   //получание по data-"что-то свое"
// // console.log(item.nextSibling); //получение следующего node
// // console.log(item.nextElementSibling);
// // console.log(box.firstElementChild); //первый ребенок
// for (let node of box.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     } else {
//         console.log(node)
//     }
// }





//создание элементов
// const div = document.createElement('div'),
//       box = document.querySelector('.box'),
//       cols = document.querySelectorAll('.col');


// div.classList.add('blac');

// box.append(div); //в конец блока
// box.prepend(div); // в начало
// cols[2].remove(); //удаляем третий элемент
// cols[3].before(div); //вставляет после или after для перед элементом
// cols[0].replaceWith(cols[1]); //заменить cols0 на cols1

// div.innerHTML = '<h2>hello</h2>';  //добавляем код в блок
// cols[3].textContent = '<h3>hello</h3>'; //только текст для безопасности от пользобвателей 

// div.insertAdjacentHTML('afterbegin', '<p>ddd</p>'); //вставить что-то перед, после, до или в элемент



//добавление стилей
// const box = document.querySelector('.box');
// box.style.cssText = 'width: 50px; height: 50px; background: black;'
//задача из урока exercise 14
// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };
// function isOpen(prop) {
//     let answer = '';
//     !prop ? answer = 'Закрыто' : answer = 'Открыто';

//     return answer;
// }
// console.log(isOpen(restorantData.openNow))
// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) < average.slice(0, -1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }
// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));
// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors = {name: 'Mike', age: 32};
//     return copy;
// }
// transferWaitors(restorantData);




//диструктуризация 
// const obj1 = {
//     name: 'micha',
//     color: {
//         black: '#111',
//         white: '#fff'
//     }
// }

// let {color: {black: newColor}} = obj1;
// console.log(newColor)


// замыкание функции
// let i = 0;
// const sup = function() {
//     i = i + 1
//     return i
// }
// const sup2 = sup()
// const sup3 = sup()
// const sup4 = sup()
// console.log(sup2, sup3, sup4)


//задача из урока exercise 14
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];
// function sortStudentsByGroups(arr) {
//     let newMass = arr.sort();
//     let res = [[],[],[],"Оставшиеся студенты:"];
//     for (let i = 0; i < newMass.length; i++) {
//         if (i < 3) {
//             res[0].push(newMass[i]);
//         } else if (i < 6) {
//             res[1].push(newMass[i]);
//         } else if (i < 9) {
//             res[2].push(newMass[i]);
//         } else {
//             if (res[3] === "Оставшиеся студенты:") {
//                 res[3] += " " + newMass[i];
//             } else {
//                 res[3] += ", " + newMass[i];
//             }
//         }
//     }
//     if (res[3] === "Оставшиеся студенты:") {
//         res[3] += " -";
//     }
//     return res;
// }
// console.log(sortStudentsByGroups(students));



//задача из урока exercise 13 
// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 10,
//             length: 8
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }
// function isBudgetEnough(data) {
//     let shopsRaz = 0,
//         shopsBud = 0;
//     data.shops.forEach(item => {
//         let i = (item.width * item.length) * data.height;
//         shopsRaz = shopsRaz + i;
//     });
//     shopsBud = shopsRaz * data.moneyPer1m3;
//     console.log(shopsBud)
//     if (data.budget <= shopsBud) {
//         return 'Бюджета недостаточно'
//     } else {
//         return 'Бюджета достаточно'
//     }
// }
// console.log(isBudgetEnough(shoppingMallData));



// const objs = {
//     name: 'tiny',
//     size: 'medd',
//     lvl: 3,
//     form: {
//         first: 2,
//         sec: 3
//     },
//     calcs: function(num) {
//         return num * 3;
//     }
// }
// // console.log(objs.calcs(2));
// console.log(Object.keys(objs).length)







// задача из урока exersice 10
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(x) {
//         let res = `Мне ${x.age} и я владею языками:`;

//         x.skills.languages.forEach(element => {
//             res += ` ${element.toUpperCase()}`;
//         });

//         return res
//     }
// };
// function showExperience(plan) {
//     let res = plan.skills.exp;
//     return res
// }
// function showProgrammingLangs(plan) {
//     let res = '';
//     for (let i in plan.skills.programmingLangs) {
//         res += `Язык ${i} изучен на ${plan['skills']['programmingLangs'][i]}\n`
//     }
//     return res
// }
// console.log(showExperience(personalPlanPeter));
// console.log(showProgrammingLangs(personalPlanPeter));
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter))



//задача из урока exercise 11
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// function showFamily(arr) {
//     if (arr.length === 0) {
//         return 'Семья пуста'

//     } else {
//         let res = 'Семья состоит из:';
//         arr.forEach(element => {
//             res += ` ${element}`
//         });
//         return res
//     }

// }
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
// function standardizeStrings(arr) {
//     arr.forEach(item => {
//         console.log(item.toLowerCase())
//     });
// }
// console.log(showFamily(family));
// standardizeStrings(favoriteCities)


//задача из урока exercise 12 
// const someString = 'This is some strange string';
// function reverse(str) {
//     if (typeof(str) === 'string') {
//         let mass = [...str],
//             res = '';
//         for (let i = mass.length - 1; i >= 0; i--) {
//             res += mass[i];
//         }
//         return res;
//     } else {
//         return 'Ошибка!'
//     }
// }
// console.log(reverse(someString))
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['USD', 'RUB', 'CNY'];
// function availableCurr(arr, missingCurr) {
//     let res = '';
//     if (arr.length === 0) {
//         res += 'Нет доступных валют';
//     } else {
//         res += `Доступные валюты:\n`;
//         if (missingCurr) {
//             arr.forEach(item => {
//                 if (missingCurr !== item) {
//                     res += `${item}\n`
//                 }
//             });
//         } else {
//             arr.forEach(item => {
//                 res += `${item}\n`
//             });
//         }
//     }
//     return res
// }
// console.log(availableCurr(additionalCurrencies, 'USD'))