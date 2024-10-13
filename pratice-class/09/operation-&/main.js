"use strict";
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
};

console.log('-------------or------------------')
console.log(3 || 'jonas')
//논리 연산자, 어느 데이터타입도 사용 가능,
// 첫번째 값이 진실일 경우, 그 값을 바로 반환한다 =>뒤에는 평가 되지도 않음
console.log(""||'jonas')//jonas
console.log(true||0)//true
console.log(undefined || null) //둘다 false인데 null인 이유:
// 모든값이 false이면 마지막 값을 반환한다



const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1) //10 numGuest가 존재하지 않기 때문에

console.log('-------------and------------------')

console.log(0 && 'jonas') //가짜인 값 반환
console.log(7 && 'jonas') //진실일때는 다 평가하고 마지막 값이 반환된다
//and는
//첫 번째 "falsy" 값을 만나면 즉시 그 값을 반환합니다.(false값을)
//모든 값이 "truthy"라면, 마지막 값을 반환합니다.

console.log('------------------새로운 진도,,-------------')


const rest1 = {
    name: 'Capri',
    numGuests:0
}
const rest2 = {
    name: 'La piazza',
    owner:'Giovanni Ros'
}

// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10
//밑에처럼 요약 가능
// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

rest1.numGuests ??= 10
rest2.numGuests ??= 10

rest2.owner&&='<ANOYMOUS>'


console.log(rest1)
console.log(rest2)