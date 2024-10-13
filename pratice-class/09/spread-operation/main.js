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



    orderPasta: function (ing1, ing2, ing3) {
        console.log(`마싯서  ${ing1}, ${ing2},${ing3}`)
    }
};



const arr = [7, 8, 9]
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr)//[1, 2, 7, 8, 9]
const newArr = [1, 2, ...arr]
console.log(newArr)//[1, 2, 7, 8, 9]

console.log(...newArr) //배열 풀어짐 //1 2 7 8 9


const newMenu = [...restaurant.mainMenu, '뇨끼'] //추가됨
console.log(newMenu)//['Pizza', 'Pasta', 'Risotto', '뇨끼']

console.log(...newMenu)//배열의 요소들을 개별적인 인자로 펼쳐서 전달합니다.
//Pizza Pasta Risotto 뇨끼


//copyarray
const mainMenuCopy = [...restaurant.mainMenu]
//join 2개
console.log(mainMenuCopy)
const menu = [...mainMenuCopy, ...newMenu]
console.log(menu)

//반복은 문자열,스트링,maps,sets,이다. 객체는 불가능

const str = 'Jonas';
const letters = [...str, '', 's'] //str을 문자별로 분리함 , 문자열도 스프레드 가능 
console.log(letters) //['J', 'o', 'n', 'a', 's', '', 's']

console.log(...str);//J o n a s

// console.log(`${...str}`) //: Unexpected token '...'
// const infredient = [prompt('Let\s make pasta1'), prompt('Let\s make pasta2')
//     , prompt('3')
// ]
// console.log(infredient)
// restaurant.orderPasta(...infredient)

const newRestaurant = {
    founded:' 1919',
    ...restaurant, 
    founder: '냄냄'
}
console.log(newRestaurant)

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'risto'
console.log(restaurantCopy) //name값 변경됨

////rast paramiter
const [pizza, , risotto, ...others] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, others)

//object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays) //sat를 제외한 나머지가 출력됨

//2)function
const add = function (...numbers) {
    console.log(numbers)
    let sum = 0
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i]
        console.log(sum)
    }
}
add(2, 3)
add(5,3,7,2)
add(8, 2, 5, 3, 2, 1, 4)
const x = [23, 5, 7]
add(...x)

///