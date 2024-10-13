//비동기 프로그래밍은 일정시간동안 프로그램의 행동을 조정한다
//비동기 프로그램을 구현하려면 콜백함수가 필요하다,하지만 콜백함수만으로는 비동기를 만들지 못한ㄱ다

// 'https://countries-api-836d.onrender.com/countries/all'

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


const request = new XMLHttpRequest() //새 결과를 변수애 저장
request.open('get', 'https://restcountries.com/v3.1/name/tunisia?fullText=true') //ajax요청할 url필요


request.send() //요청 보내고 백그라운드에서 데이터 받아옴
// console.log(request.responseText)
request.addEventListener('load', function(){
 
    const [data] = JSON.parse(this.responseText)
    console.log(data)
    const html =`    <article class="country">
          <img class="country__img" src="${data.flags}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.language}LANG</p>
            <p class="country__row"><span>💰</span>CUR${data.currencies.name}</p>
          </div>
        </article>`
    
    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1;
}) 