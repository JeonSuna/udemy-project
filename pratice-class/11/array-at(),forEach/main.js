//about at------------------------------------------------------------------
console.log('--------------------about:at()----------------------')
const arr = [23, 11, 64];
console.log(arr[0])
//마지막 배열값을 얻는 전통적인 방법2가지
console.log(arr[arr.length - 1]) //64
console.log(arr.slice(-1)[0]) //64

//새로운..
console.log(arr.at(-1)) //at()메서드 정숫값을 받아 해당 인덱스에 있는 항목을 반환
// 양수와 음수를 사용 할 수 있고, 음의 정수는 배열의 마지막 항목부터 거슬러 센다.즉 -1가능
console.log('jonas'.at(0)) //j //문자열에서 또한 사용이 가능하다

//about- forEach--------------------------------------------------------------
console.log('---------------------forEach--------------------------')

const movement = [200, 450, -400, 3000, -650, -130, 70, 1300]
//for of 를 사용한
console.log('-------------for of--------------')
for (const [index,price] of movement.entries()) {
    if (movement > 0)
        console.log(` index:${index+1}, Yot deposited ${price}`)
    else
        console.log(`index:${index+1}, you withdrew ${price}`)
}
//forEach를 사용한
console.log('----------------forEach-------------')
movement.forEach((value,index) => {
    if (movement > 0)
        console.log(`index:${index}, Yot deposited ${value}`)
    else
        console.log(`index:${index}, you withdrew ${value}`)
})
 
//forEach와 Map,Set
//Map에서 forEach의 매개변수는 array와 다르게 작용한다.
//map에서의 매개변수는 => forEach(value, key, map)으로 작용
console.log('-------------------Map과 Set의 forEach----------------')
const currencues = new Map([
    ['USD', 'United Ststrs dollar'],
    ['EUR','Euro'],
    ['GBP','Pound sterling']
])
currencues.forEach((value, key, map)=>{
    console.log(`${key}:${value}`)
})
const currenciesUnique = new Set(['USD', "GBP", 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique)//중복제거된 USD,GBP,EUR만 자굥ㅇ
currenciesUnique.forEach((value, value1, map) => {
    console.log(`${value},${value1}`)
})

