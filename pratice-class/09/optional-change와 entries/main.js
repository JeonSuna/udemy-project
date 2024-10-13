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

const property = Object.keys(restaurant.openingHours)
console.log(property) //배열로 반환된다

for (const day of Object.keys(restaurant.openingHours)) {
    console.log(day)
}


const value = Object.values(restaurant.openingHours)
console.log(value) //중첩 객체는 객체자체를 값으로 반환

const entries= Object.entries(restaurant.openingHours)
console.log(entries)// array에 담김


for (const [key,{open,close}] of entries) {
    console.log(`${key}에 방문가능 ${open}에 열고 ${close}에 닫음`)
}


// if (restaurant.openingHours.mon)
//     console.log(restaurant.openingHours.mon.open)
// if (restaurant.openingHours.thu) {
//     console.log(restaurant.openingHours.thu.open)
// }
//선택적 식당
// console.log(restaurant.openingHours.mon?.open)  //==>존재하면 ~
// //?앞에 속성이 존재하면 다음 속성(. 이후에 오는)을 읽는다
// //?앞에 실제 존재할때만 뒤에가 작동함
// //존재하지 않으면,뒤에 오는 속성인 월요일 속성이 읽히지도 않기때문에 오류가 발생X
// //mon 객체가 존재하지 않을 경우 에러를 발생시키지 않고 **undefined**를 반환


// //예시
// const days = ['mon', 'tue', 'web', 'thu', 'fri', 'sat', 'sun']

// for (const day of days) {
//     console.log(day)
//     const open = restaurant.openingHours[day]?.open||'close'
//     console.log(`On ${day} , we open ${open}`)
// }

// const user = [
//     { name:'나',email:'jeon'}
// ]
// console.log(user[1]?.name ?? 'user array empty')
//null병합 연산자 == ??
//왼쪽 피연산자가 null 또는 **undefined**인 경우에만 오른쪽 값을 반환합니다.

