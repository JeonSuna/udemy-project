const lufthams = {
    airline: 'Lufthamsa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} 
            flight ${this.iataCode} ${flightNum}`) //여기서의 this는  lufthams

        this.bookings.push({
            flight: `${this.iataCode}, ${flightNum}`, name
        })
    }
}

lufthams.book(239, 'jonas Schmedtmann')
lufthams.book(635, 'jone Smith')

const euerwings = {
    name: 'eurowings',
    iataCode: 'EW',
    bookings: []
}

const book = lufthams.book
// book(23, 'sarach Williams') //오류뜸  : Cannot read properties of undefined (reading 'push') //
// //완전히 새로운 함수가 됨, this는 사용X

//call메서드는 this를 명시적으로 설정할 수 있는 메서드이다 ----------------------중요!!
book.call(euerwings, 23, 'Sarah Williams');//2,3번째는 원래 함수의 인수임
console.log(euerwings)
book.call(lufthams, 234, 'Mary Cooper')  //lafthams를 객체를 참조하도록 함
console.log(lufthams) // this는 lufthams를 가르키게 함 (call로 인하여)

console.log(euerwings) //eurwings의 데이터 속성도 같이 변화함 =>bookings의 배열이 변경


const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}


console.log('---------------apply--------------------')
//--------------------------------Apply method --------------------------
const flightData = [582, 'George Cooper']
book.apply(swiss, flightData)
console.log(swiss)


console.log('-------------------------------bind-----------------')
//-------------------------bind-------------------------------------

// book.call(euerwings, 23, 'Sarah Williams');//2,3번째는 원래 함수의 인수임

//bind는 this의 값을 영구적으로 고정한다
//call과 apply는 함수 호출시에 this를 설정하고 바로 실행하지만,
//bind는 새로운 함수를 반환하여 나중에 실행할 수 있도록 한다
const bookEW = book.bind(euerwings);
const bookLH = book.bind(lufthams)
const bookLX = book.bind(swiss)
bookEW(23, 'Steven Wolliams')
bookLH(24, '어쩌라고')
bookLX(432, '응')
