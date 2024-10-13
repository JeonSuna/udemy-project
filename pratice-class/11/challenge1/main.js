// "use strict";
// 줄리아(Julia)와 케이트(Kate)는 개에 관한 연구를 진행하고 있습니다.그들은 각각 5명의 개 주인들에게 개의 나이를 물어보고,
//     그 데이터를 배열에 저장했습니다(각각의 배열이 있습니다).
// 현재 그들은 개가 성견인지 강아지인지에 대해 관심이 있습니다.
//     나이가 3살 이상이면 성견(adult)이고, 3살 미만이면 강아지(puppy)입니다.
// 함수 checkDogs를 작성해야 하며, 이 함수는 두 개의 개 나이 배열(dogsJulia, dogsKate)을 받아 다음 작업을 수행합니다:

// 줄리아는 첫 번째와 마지막 두 개의 나이가 사실 강아지가 아닌 고양이의 나이라는 것을 발견했습니다.
// 그래서 줄리아의 배열을 얕은 복사(shallow copy)하고,
//  그 복사본에서 고양이의 나이를 제거합니다(매개변수를 직접 변경하지 않는 것이 좋기 때문입니다).
// 줄리아의 수정된 데이터와 케이트의 데이터를 결합한 배열을 만듭니다.
// 남은 각 개에 대해, 성견이면 "Dog number 1 is an adult, and is 5 years old"와 같이 출력하고,
//  강아지이면 "Dog number 2 is still a puppy 🐶"와 같이 출력합니다.
// 제공된 두 개의 테스트 데이터 세트로 함수를 실행합니다.




//-------------------------내 정답 -------------------------
// function checkDogs(dogsJulia, dogsKate) {
//     const realJulia = dogsJulia.slice(1,(dogsJulia.length-1))
//     console.log(realJulia)
//     const sumData = realJulia.concat(dogsKate)
//     console.log(sumData)


//     sumData.forEach((arr,index) => {
//         if (arr >= 3) {
//             console.log(`Dog number ${index+1} is an adult, and is ${arr} years old`)
//         } else {
//             console.log(`Dog number ${index+1} is still a puppy 🐶`)
//         }
//     })
// }
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])



//---------------------------해답------------------------
const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    // dogsJulia.slice(1, 3);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);

    dogs.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy 🐶`);
        }
    });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


