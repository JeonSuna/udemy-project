"use strict";

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase()
// }

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ')
//     return [first.toUpperCase(),...others].join(' ')
// }
// //고차원 함수
// const transformer = function (str, fn) {
//     console.log(`origin:${str}`)
//     console.log(`new ${fn(str)}`) //여기서 함수 호출
//     console.log(`transFunName:${fn.name}`)
// }

// transformer('javascript is best',upperFirstWord) //함수 호출은 안함 
// transformer('javascript is best', oneWord) //함수 호출은 안함

// //javascript use callback function Always

// const high5 = function () {
//     console.log('안녕')
// }
// document.body.addEventListener('click', high5);
// ['jonas', 'MArtha', 'Adam'].forEach(high5)


//추상화 하는법 
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting},${name}`)
//     }
// }
// const greetHi = greet('hey')
// greetHi('jonas')
// greetHi('tomas')

///arrow로 다시 써보기
const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting},${name}`)
    }
}
greet('hey')('jonas')

//정답
const greetArr = greeting => name => {
    console.log(`${greeting},${name}`)
}
greet('hello')('jonas')