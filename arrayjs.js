const calTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return .15 * bill;
    } else {
        return .2 * bill;
    }
};

// console.log(calTip(100));

const bills = [125, 555, 44];
const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
console.log(bills, tips)

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[1]];
