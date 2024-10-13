//  개의 나이를 인간 나이로 변환하고, 연구에 포함된 개들의 평균 나이를 계산하려고 합니다.
// calcAverageHumanAge라는 함수를 만들어야 하며,
// 이 함수는 개의 나이 배열(ages)을 받아 다음 순서로 작업을 수행합니다:
// 개 나이를 인간 나이로 변환합니다.변환 공식은 다음과 같습니다:
// 개의 나이가 2살 이하인 경우: humanAge = 2 * dogAge
// 개의 나이가 2살 초과인 경우: humanAge = 16 + dogAge * 4
// 인간 나이로 계산된 나이가 18세 미만인 개는 제외합니다.즉, 18세 이상인 개들만 남깁니다.
//  성견(18세 이상)들의 인간 나이의 평균을 계산합니다.
// 두 가지 테스트 데이터 세트로 함수를 실행합니다:
// 테스트 데이터 1: [5, 2, 4, 1, 15, 8, 3]
// 테스트 데이터 2: [16, 6, 10, 5, 6, 1, 4]


//--------------내 정답..--------------------
// function calcAverageHumanAge(arr) {
//     let humanAge = []
//     arr.forEach((age) => {
//         if (age < 2) {
//             age = age * 2
//             humanAge.push(age)
//         }
//         else {
//             age = 16 + age * 4
//             humanAge.push(age)
//         }
//     })
//     const realAge = humanAge.filter((age) => {
//         return age>18
//     })
//    const avgAge= realAge.reduce((acc,cur) =>acc+cur,0)/realAge.length
//     return console.log(avgAge)
// }
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])

//-----------------------------답--------------------------
const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
    const adults = humanAges.filter(age => age >= 18);
    console.log(humanAges);
    console.log(adults);

    // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

    const average = adults.reduce(
        (acc, age, i, arr) => acc + age / arr.length,
        0
    );

    // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

    return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);