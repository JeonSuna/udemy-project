'use strict';

let score = 20
const sceretNumber = Math.trunc(Math.random() * 20) + 1  //함수 밖에 선언되어야한다. 클릭해도 값이 변하면 안되니
let guessingMsg = document.querySelector('.message')


document.querySelector('.check').addEventListener('click', function () {
    let guessInput = Number(document.querySelector('.guess').value)  //체크를 누를 때 마다 사용자의 입력값을 새로 들고와야하므로 함수 안에 선언한다


    if (!guessInput) {
        guessingMsg.textContent = '숫자를 입력해 주세요'
    }
    else if (guessInput === sceretNumber) {
        guessingMsg.textContent = "정답입니다"
        document.querySelector('.number').textContent = sceretNumber
    }

    else if (guessInput !== sceretNumber)
        if (score > 1) {
            if (guessInput > sceretNumber) {
                guessingMsg.textContent = '더 큰 숫자를 입력하셨습니다'
                score--
                document.querySelector('.score').textContent = score
            } else if (guessInput < sceretNumber) {
                guessingMsg.textContent = '더 작은 숫자를 입력하셨습니다'
                score--
                document.querySelector('.score').textContent = score
            }
        }
})




document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('.guess').value=''
    document.querySelector('.score').textContent=20
    guessingMsg.textContent = 'Start guessing...'
    
})