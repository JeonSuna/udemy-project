"use strict";
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

//이벤트 배열 만들기(중복 없는)---1번
//64번에 있는 옐로카드가 있는걸 삭제함---2번
//평균 이벤틀 시간 출력 =>걍기는 총 90분, 경기중 평균 9분마다 하나의 이벤트 발생--3번
//각 이벤트가 전반(45)과 후반에 발생했는지 구분하여 출력--4번
//ex) 17분에 발생 => [first half 17: goal]
//
let gameArray=[...gameEvents]
console.log(gameArray)

//1번째 
const gameset = [...new Set(gameEvents.values())]
console.log(gameset)


//2번째
gameEvents.delete(64)
console.log(gameEvents)

//3번째
console.log(`on average: ${90/gameEvents.size}`)


//4번째

for (const [key, value] of gameEvents) {
    const harf = key < 45 ? 'first' : 'last'
    console.log(`${harf} ${key}:${value}`)
}