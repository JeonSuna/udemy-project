"use strict";



(function () {
    console.log('즉시실행함수입니다')
})();

(() => console.log('화살표 함수로 표현한 즉시 실행 함수이빈다'))()

//함수를 한 번만 실행하고 싶을 때 사용한다



console.log('----------------closer-----------------------')
//CLoser

const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++
        console.log(`${passengerCount} passengers`)
    }
}

//함수는 자신이 생성된 실행컨텍스트의 변수 환경에 접근가능하다
//클로저는 부모기능의 모든 변수에 접근이 가능하게 한다
//즉 부모함수가 return된 이후에도 그 함수가 정의된다 
const booker = secureBooking()
booker()
booker()
booker() //secuerBooking이 다시 호출되는 것이 아니라 return의 함수가 호출되기 때문에
//passengerCount가 0이 아니라 계속 증가하는것이다

//---------------------------closer 예제1-------------------------
let f
const g = function () {
    const a = 23
    f = function () {
        console.log(a*2)
    }
}

const h = function () {
    const b = 777
    f = function () {
        console.log(b*2)
    }
}


g()
f()
console.dir(f) //scope보기
//f는 재할당된다
h()
f()
console.dir(f)


//--------------------closer 예제2----------------------------------

const boaedPassenger = function (n, wait) {
    setTimeout(function () {
        console.log(`we are now boarding all${n}passengers`)
        console.log(`There are 3 groups,each with ${perGroup} passenfers`)
    }, wait * 1000)
    console.log(`will start boarding in ${wait} seconds`)
}

const perGroup = 1000
boaedPassenger(180,3)