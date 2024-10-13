// "use strict"
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1

// //pipeline --연속으로 하기....
// const totalDepositedUSD = movements
//     .filter(mov => mov < 0)
//     .map(mov => {
//        mov * eurToUsd;
//     })
//     .reduce((acc, mov) => acc + mov, 0)
// console.log(totalDepositedUSD) //5522.00000001

// const totalDepositedUSD = movements
//     .filter(mov => mov < 0)
//     .map((mov, i, arr) =>{
//         console.log(arr); //이렇게 배열 확인도 가능
//         return mov * eurToUsd;})
//     .reduce((acc, mov) => acc + mov, 0)
// console.log(totalDepositedUSD) //5522.00000001



// calcAverageHumanAge 함수를 이번에는 화살표 함수로 다시 작성하고,
// 배열 메서드 ** 체이닝(chaining) ** 을 사용해 개선해야 합니다.
// 즉, 배열 메서드(map, filter, reduce 등)를 연결하여
//  더 간결한 코드를 작성하는 것이 목표입니다.

// 테스트 데이터 1: [5, 2, 4, 1, 15, 8, 3]
// 테스트 데이터 2: [16, 6, 10, 5, 6, 1, 4]
// const calcAverageHumanAge = function (ages) {
//     const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//     const adults = humanAges.filter(age => age >= 18);
//     console.log(humanAges);
//     console.log(adults);

//     // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

//     const average = adults.reduce(
//         (acc, age, i, arr) => acc + age / arr.length,
//         0
//     );

//     // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

//     return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

calcAverageHumanAge = function (ages) {
    const realage = ages
        .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
        .filter(age => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length,0)
    return realage
}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1)
