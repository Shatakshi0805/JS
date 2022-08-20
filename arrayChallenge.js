"use strict";

const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52];
const tips = [];
const totals = [];

const calTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return 0.15 * bill;
  } else {
    return 0.2 * bill;
  }
};

for (let i = 0; i < bills.length; i++) {
  const tip = calTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tips[i]);
}

// for (let i = 0; i < bills.length; i++) {
//     totals.push(bills[i] + tips[i]);
// }
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log(calcAverage(totals));
