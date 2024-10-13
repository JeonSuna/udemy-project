const movements = [200,450,-400,3000,-650,-130,70,1300]

const eurToUsd = 1.1
const movementsUSD=movements.map((mov) => {
    return mov*eurToUsd
})
console.log(movements)//[200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movementsUSD)//[220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]


//for of 를 사용한 ..
movementsUSDfor=[]
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd)
console.log(movementsUSDfor)//[220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

const movementDEscriptions=movements.map((mov, i, arr) => {
    if (mov > 0) {
        return `Movement ${i+1}: You deposited ${mov}`
    } else {
        return `Movement ${i + 1}: You deposited ${mov}`        
    }
})
console.log(movementDEscriptions)

//---------------------filter------------
console.log('-------------------------filter---------------')

const deposited = movements.filter((mov) => {
    return mov>0
})
console.log(movements)
console.log(deposited)

//for of 를 사용한
const depositedArray=[]
for (const mov of movements) {
    if (mov > 0) {
      depositedArray.push(mov)
    } 
  }
console.log(depositedArray)

//-----------------------reduce---------------------
console.log('-----------reduce를 활용한..-----------------------')
//reduce함수는 4개의 인수를 받는다
//array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
//accmulator : 누적된 값
//currentValue: 현재 처리되고 있는 배열 요소
// currentindex: 현재 요소의 인덱스
//array : reduce()를 호출한 배열 자체

console.log(movements)
//[200, 450, -400, 3000, -650, -130, 70, 1300]
const balance = movements.reduce((acc, cur, i, arr) => {
    console.log(`ITeration ${i}: ${acc}`)
    return acc+cur
}, 0) //movements의 모든 값이 합쳐짐 //3840

//for of 를 사용한...---------------
let balance2 = 0
for (const mov of movements) {
    balance2 += mov
}
console.log(balance2) //위와 결과 같음