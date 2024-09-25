'use strict';
let modal=document.querySelector('.modal')
let showModalBtn = document.querySelectorAll('.show-modal')
let overlay = document.querySelector('.overlay')
let closeModalBtn = document.querySelector('.close-modal')


const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')

}

for (let i = 0; i < showModalBtn.length; i++){   //모든 버튼의 클릭 이벤트가 추가된다. 때문에 어떤 버튼을 눌러도 같은 값 출력
    showModalBtn[i].addEventListener('click',openModal)


        // modal.classList.remove('hidden') /// class='modal hidden'이다. 이 hidden때문에 display가 안보이기 때문에 
        //   //  (.hidden: display : none) classlist에서 hidden이라는 클래스를 삭제한다
        // overlay.classList.remove('hidden')
    
}
const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
closeModalBtn.addEventListener('click', closeModal)

