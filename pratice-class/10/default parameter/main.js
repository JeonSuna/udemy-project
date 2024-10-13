"use strict";
const bookings=[]
const createBooking = function (arg1, arg2=1, arg3=3*arg2) {
   //ES5
    // arg2 = arg2 || 1
    // arg3 = arg3||199
    const booking = {
        arg1,
        arg2,
        arg3
    }
    console.log(booking)
    bookings.push(booking)
}
createBooking('LH123') //{arg1: 'LH123', arg2: 1, arg3: 3}
createBooking('LH123', 2, 800)//{arg1: 'LH123', arg2: 2, arg3: 800}
createBooking('Lwq',2)
//-----------------130강--------------
console.log('---------------------------130강-------------------------')


const flight = "LH234"
const jonas = {
    name: 'jonas Schmedmann',
    passport:12321313
}
// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + ' passenger.name'
//     if (passenger.passport === 12321313) {
//         alert('check in')
//     } else {
//         alert('wrong ppassport')
//     }
// }
// checkIn(flight, jonas)
// console.log(flight) //LH999가 아니라 LH234로 그대로 유지
// console.log(jonas)// 하지만 Mr+~로 jonas name은 바뀜
//왜? => 객체,배열, 함수는 참조값으로 변환되기 때문에 속성을 변경하면 원래 값에 영향O
//하지만 원시값(숫자,문자열,불리언,null,undefined)는 값에의한 전달로 처리되어 변수에 영향을 미치지 않음


const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000)
    console.log(jonas)
}
newPassport(jonas)
