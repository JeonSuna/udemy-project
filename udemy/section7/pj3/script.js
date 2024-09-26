'use strict';
let score0EL = document.querySelector('#score--0')
let score1EL = document.querySelector('#score--1')
let dice = document.querySelector('.dice')
let currentScore1 = document.querySelector('#current--0')
let currentScore2 = document.querySelector('#current--1')
let player0El=document.querySelector('.player--0')
let player1El=document.querySelector('.player--1')
    
//index[0]=>player1의 점수 ,
const score=[0,0]
score0EL.textContent=0
score1EL.textContent = 0

dice.classList.add('hidden')

let rollDice = document.querySelector('.btn--roll')
let currentScore = 0
let activePlayer=0

const switchFun = function () {
    document.querySelector(`#current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle('player--active')    //토글: 클래스 있나 없나 확인 //있으면 제거, 없으면 추가
    player1El.classList.toggle('player--active')
}


rollDice.addEventListener('click', (e) => {
   
    let randomDice = Math.trunc(Math.random() * 6) + 1
    dice.classList.remove('hidden')
    dice.src=`dice-${randomDice}.png`
    console.log(randomDice)
    
    if (randomDice !== 1) {
        currentScore+=randomDice
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    } else {
       
       switchFun()
    }
})

let btnHold = document.querySelector('.btn--hold')
btnHold.addEventListener('click', () => {
    console.log(score[activePlayer])
    score[activePlayer]+=currentScore
    document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer]
    // currentScore1.textContent = 0
    // currentScore2.textContent=0
    // //스위치 
    switchFun()
})

