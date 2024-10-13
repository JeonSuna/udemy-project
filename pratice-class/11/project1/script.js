'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data - 계정4개
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // % ==>이자율
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const diplayMovements = function (movements) {
  containerMovements.innerHTML = ''
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'desposit' : 'withdrawal'

    const html = ` <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`
    containerMovements.insertAdjacentHTML('afterbegin', html)//첫번째 - 붙이려는 위치, 두번째 -

  });
}

diplayMovements(account1.movements)

function createUsername(accs) {
  accs.forEach((acc) => {
    //새로운 객체 생성
    acc.username = acc.owner.toLowerCase().split(' ').map((item) => {
      return item[0]
    }).join('')
  })
}
createUsername(accounts)

//배열 더한 값 표시하기
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, curmov) => {
  return  acc + curmov
  }, 0) 
  labelBalance.textContent = `${balance}€ ` 
}
calcDisplayBalance(account1.movements)


const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0)
  labelSumIn.textContent = `${incomes}€`

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0)
  labelSumOut.textContent = `${Math.abs(out)}€`

  const interest = movements.filter(mov => mov > 0)
    .map(deposit => deposit * 1.2 / 100)
    .filter((int, i, arr) => {
      console.log(arr)
      return int>=1
    })
    .reduce((acc, cur) => acc + cur, 0)
  labelSumInterest.textContent =`${interest}€`
}
calcDisplaySummary(account1.movements)


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);






// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// //slice
// let arr = ['a', 'b', 'c', 'd', 'e']
// console.log(arr.slice(2))//['c','d','e'] , 새 배열을 return한다
// console.log(arr.slice(-2))//['d','e']
// console.log(arr.slice()) //['a', 'b', 'c', 'd', 'e']//배열 메서드기때문에 배열만 사용가능
// console.log([...arr])//['a', 'b', 'c', 'd', 'e']//배열뿐만이 아닌 다른 객체도 사용 가능

// //splice
// console.log(arr.splice(2)) //==>2부터 끝까지 모든 요소 제거==>['c', 'd', 'e']
// console.log(arr)//['a','b'] ==>제거된 요소들로 구성된 새 배열 반환

//reverse
// const arr = ['a', 'b', 'c', 'd', 'e']
// const arr2 = ['j', 'i', 'h', 'g', 'f']
// console.log(arr2.reverse()) //['f', 'g', 'h', 'i', 'j']
// console.log(arr2) //['f', 'g', 'h', 'i', 'j']배열을 변형시킨다

// //concat
// const letters = arr.concat(arr2)
// console.log(letters) //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// //join
// console.log(letters.join('-')) //a-b-c-d-e-f-g-h-i-j





// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const [i,movement] of movements.entries()) {
//   if (movement > 0)
//     console.log(`${i+1}: You deposited ${movement}`)
//   else {
//     console.log(`${i+1}:You withdrew${Math.abs(movement)}`)
// }
// }

// console.log('-----------------------')
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// movements.forEach(function (movement,index,array) {
//   if (movement > 0)
//     console.log(`${index+1} :You deposited ${movement}`)
//   else {
//     console.log(`${index+1}: You withdrew${Math.abs(movement)}`)
//   }
// // })

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurTousd = 1.1;
// const movementsUSD = movements.map((value) => {
//   return value*eurTousd
// })
// console.log(movementsUSD)

// const movementUSDfor = []
// for (let value of movements) {
//  let eurTousd = 1.1;
//   value=eurTousd*value
//   movementUSDfor.push(value)
// }
// console.log(movementUSDfor)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementDescript = movements.map((mov, index, arr) => {
  if (mov > 0)
    return `${index + 1} :You deposited ${mov}`
  else {
    return `${index + 1}: You withdrew${Math.abs(mov)}`
  }
})
console.log(movementDescript)

//Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov)
    return acc //현재값은 두번째 요소인 450임
  else {
    return mov
  }
}, movements[0])
console.log(max)

const eurToUsd = 1.1

//pipeline
const totalDepositedUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0)
  console.log(totalDepositedUSD) //5522.00000001
