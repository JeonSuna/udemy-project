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

  order: function (starterIndex, MainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
  },
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

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z); //2,3,4
console.log(arr); // [2,3,4]
let [first, , , second] = restaurant.categories; // 빠진 부분 그대로
console.log(first, second); //Italian Organic

[first, second] = [second, first]; // ==> 이렇게 파괴하면 굳이 변수에 할당는 방법으로 길게 코드를 안써도 됨
console.log(first, second); //Organic,Italian

//음식을 주문하는 ..
console.log(restaurant.order(2, 0)); //['Garlic Bread', 'Pizza']
//==> 이걸 파괴하면
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); //Garlic Bread Pizza
//Nested destructing
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); //2  [5, 6]
// console.log(i, ...j); //2,5,6

// 이중 배열 개별값 꺼내고 싶을 떄
const [i, , [j, k]] = nested;
console.log(i, j, k); //2,5,6

//Default Values
const [p = 1, q = 1, r = 1] = [8, 9]; //default값 생성함
console.log(p, q, r); //8 9 1
