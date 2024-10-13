// 골을 넣은 다음 콘솔에 선수 번호와 함께 출력
//루프로 평균 홀수를 계산하고 콘솔에 출력//객체 직접 사용해야함(
//객체의 콘텐츠를 콘솔에 출력하기
            //.ex) odd of victory Bayern Munich :1.33

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
//1번
for (const [index,player] of game.scored.entries()) {
    console.log(`Goal : ${index+1}, Name : ${player}`)
}
//2번
let value = 0
let arrayValue = Object.values(game.odds)
for (const oddAvg of arrayValue) {
     value=value+oddAvg
    console.log(value)
}
value = value / arrayValue.length
console.log(value)

//3번, 객체의 콘텐츠를 출력하기 
console.log(Object.values(game)[0])

// for (const day of Object.values(game)) {
//     console.log(day)
//     if(day==='ma')
// }

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr =team==='x'?'draw':`victory${game[team]}` // 맞으면drow,아니면 승리 
    console.log(`odd of ${teamStr} ${odd}`)
}