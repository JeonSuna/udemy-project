'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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
  order: function (starterIndex, MainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
  },
  orderDelivery: function (obj) {
    console.log(obj); // 밑에 그대로 출력
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole 21',
  mainIndex: 2,
  starterIndex: 2,
});

//객체는 배열과 다르게 순서에 의존하지 않고 key값으로 뽑아낸다
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); //Classico Italiano ,,,등등
//하지만 변수 이름이 속성이름과 다르길 원한다면?
const {
  name: restaurantName, //새로운 변수명
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags); //위 결과와 같음

const { menu = [], starterMenu: starters } = restaurant; //[]로 기본값을 설정한다.undefined를 막기 위해

console.log(menu, starters); //[] ,  ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
//menu처럼 하드코딩 된 데이터가 없을때는 기본값 설정하는게 좋다

//변수 변형
let a = 111;
let b = 999;
const obj = { a: 28, b: 6, c: 14 };
//  { a, b } = obj; // Unexpected token '=' error
({ a, b } = obj); //==>괄호로 감싸야함
console.log(a, b); //=>28,6

//중텁된 객체
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); //11,23
