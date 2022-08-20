const calAverage = (score1, score2, score3) => {
    const avg = (score1 + score2 + score3) / 3;
    return avg;
}

const dolphinsAvg = calAverage(44, 23, 71);
const koalasAvg = calAverage(65, 54, 49);

checkWinner(dolphinsAvg, koalasAvg);

function checkWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg < koalasAvg) {
        console.log(`Koalas win (${koalasAvg} vs. ${dolphinsAvg} ) `);
    } else {
        console.log(`Dolphins win (${dolphinsAvg} vs. ${koalasAvg}) `);
    }
}

