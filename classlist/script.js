const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.item(0));    //выдает первый класс
// console.log(btns[0].classList.add('red'));   //добавление класс
// console.log(btns[0].classList.remove('blue')); //удаление класс
// console.log(btns[0].classList.toggle('red')); //переключение класс


// btns[0].addEventListener('click', () => {
//     // if (!btns[0].classList.contains('red')) {
//     //     btns[0].classList.add('red');
//     // } else {
//     //     btns[0].classList.remove('red');
//     // }

//     btns[0].classList.toggle('red')
// })

wrapper.addEventListener('click', (event) => {
    if (event.target.matches('button.red')) {    //matches для совпадений
        console.log('hello')
    }
})
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);


