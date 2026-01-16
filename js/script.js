//задача из урока exercise 14
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    
}








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