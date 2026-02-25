//data
// const now = new Date(2026, 0, 17, 20);   //указание даны
// const now = new Date(0);  //1970 год
const now = new Date();
// console.log(now.getFullYear());   //год
// console.log(now.getDate());
// console.log(now.getMonth());
// console.log(now.getTime());  //в миллисекундах с 1970
console.log(now.setHours(5, 30));
console.log(now);

let start = new Date();

for (let i =0; i < 1000000; i++) {
    let sum = i** 3;
}

let end = new Date();

alert(`${end - start}`)



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