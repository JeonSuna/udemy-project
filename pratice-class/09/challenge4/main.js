document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));




// underscore_case로 작성된 변수 이름을 camelCase 형식으로 변환하는
//  프로그램을 작성하는 과제입니다.
//  사용자가 텍스트 입력란에 underscore_case 형식의 변수를 입력하면
//  버튼을 누르면 해당 변수가 camelCase 형식으로 변환되어 콘솔에 출력됩니다.
// 각 줄은 별도로 처리되며, 변환된 결과는 콘솔에 출력될 때
// 몇 번째 줄인지에 따라 "✅" 마크가 출력됩니다.

// let real
// let array = []
// document.querySelector('button').addEventListener('click', (e) => {
//     //underscore_case
//     let inputvalue = document.querySelector('textarea').value
//         //배열로 만들고 
//     let splitInput = inputvalue.split('_')
//     splitInput2 = splitInput[1]
 
//     let lastName = ([splitInput2[0].toLocaleUpperCase(), splitInput2.slice(1)].join(''))
//     real=[splitInput[0],lastName].join('')
//     console.log(real)
// })





document.querySelector('button').addEventListener('click', (e) => {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n')
    console.log(rows)
    for (const row of rows) {
        const [first, second] = row.toLocaleLowerCase().trim().split('_')
        const name=`${first}${second.replace(second[0],second[0].toLocaleUpperCase())}`
        console.log(name)
    }
})






// document.querySelector('button').addEventListener('click', function () {
//     const text = document.querySelector('textarea').value;
//     const rows = text.split('\n'); //문자열을 배열로 함 
// //first second
//     for (const [i, row] of rows.entries()) {
//         const [first, second] = row.toLowerCase().trim().split('_');

//         const output = `${first}${second.replace(
//             second[0],
//             second[0].toUpperCase()
//         )}`;
//         console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//     }
// });






// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT(5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅