"use strict";



const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
}





//-----------------------------------set---------------------


const staff = ['선아', '누구', '지원', '매니저']
const staffUnique = [...new Set(staff)]
//배열이나 객체를 개별 연산자로
console.log(staffUnique)//(4)

//---------------------------------------------------Map---------------------------
console.log(`-----------map-------------`)

const rest = new Map();
rest.set('name', 'classico Italliano')
rest.set(1, 'Firenze,Italy')
rest.set(2, 'Libon,protgal')
console.log(rest.set(2, 'Libon,protgal'))
console.log(rest)

rest.set('categories', ['Italoan', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'we are open:D')
    .set(false, "we are closed")


console.log(rest.get('name'))
console.log(rest.get(true))

const time = 21;
rest.get(rest.get(time > rest.get('open') && time < rest.get('close')))
//괄호 안 값 =>true, rest.get(true)=>오픈~

console.log(rest.has('categories')) //true 
rest.delete(2)
console.log(rest)//libon뺘고..
console.log(rest.size) //7

//중요한점
rest.set([1, 2], 'Test')
console.log(rest)
// { Array(2) => "Test" }
// key:[1, 2]
// value:"Test"

console.log(rest.get([1, 2]))// ==>unefined
//heap에 서로 다른 객체임, heap에 다른 객체,,,그냥 새로운 배열로 취급
//만약 동일 객체로 만들려면
const arr = [1, 2]
rest.set(arr, 'Test')
console.log(rest.get(arr)) //Test

const question = new Map([['question', 'What is the best progtammming langugage'],
    [1, 'c'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct',3],
    [true, 'correct'],
    [false, 'Try again']])
console.log(question)

console.log(Object.entries(restaurant.openingHours)) // [Array(2), Array(2), Array(2)]

const hoursMap = new Map(Object.entries(restaurant.openingHours))
console.log(hoursMap) // { "thu" => Object }..Map(3)

for (const [key, value] of question) {
    if (typeof key === 'number')
        console.log(`Answer: ${key}:${value}`)
}
for (const [key, value] of question) {
    if (typeof key === 'boolean')
        console.log(`Answer: ${key}:${value}`)
}

console.log(...question)
console.log(question.entries())
console.log(question.keys())
console.log(question.values())



let task = {
    task: 'code',
    data: 'kk',
    repeat:true
}
// console.log(...task)
//오류남 => 스프레드 연산자는 이터러블 객체에 사용이 가능하다.
//만약 객체의 키 값을 스프레드 연산자로 표현하고 싶다면 Object.entries를 사용=> 객체의 키-값 쌍을 배열로 반환
console.log(...Object.entries(task))
//['task', 'code'] ['data', 'kk'] ['repeat', true]
