'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`

  containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce(function (acc, cur, i, movements) {
    return acc + cur;
  })
  labelBalance.textContent = `${balance}€`
}
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const deposits = movements.filter(function (mov) {
    return mov > 0;
  });

  const income = deposits.reduce(function (acc, deposit) {
    return acc + deposit
  }, 0);
  labelSumIn.textContent = `${income}€`;

  const out = movements.filter(function (mov) {
    return mov < 0;
  }).reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements.filter(mov => mov > 0).map(mov => (mov * 1.2)/100).filter((interest, i, arr) => {
    console.log(arr);
    return interest >= 1;
  }).reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interest}€`
  
}
calcDisplaySummary(account1.movements);

// CREATES USERNAMES LIKE => stw using initials of name
const user = 'Steven Thomas Williams';
const createusernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(function (name) {
      return name[0];
    }).join('');
  })
}


createusernames(accounts);


console.log(accounts);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];




/////////////////////////////////////////////////
// for of method
// for (const movement of movements) {
//     if (movement > 0) {
//         console.log(`You deposited ${movement} amount in your account`);
//     } else {
//         console.log(`You withdrew ${Math.abs(movement)} amount from your account`);
//     }
// }
// console.log("-----FOROF WITH INDICES------");
// for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1} You deposited ${movement} amount in your account`);
//     } else {
//         console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)} amount from your account`);
//     }
// }



// for each is a higher order function that accepts call back method as argument
console.log("----------------------FOREACH---------------------");
// WE CAN NOT USE CONTINUE AND BREAK STATEMENT WITH FOREACH METHOD
// movements.forEach(function (movement) {
    // if (movement > 0) {
    //     console.log(`You deposited ${movement} amount in your account`);
    // } else {
    //     console.log(`You withdrew ${Math.abs(movement)} amount from your account`);
    // }
// })

// console.log("-----FOREACH WITH INDICES------");
// movements.forEach(function (movement, index, array) {// order should be exactly like this
//     if (movement > 0) {
//         console.log(`Movement ${index + 1} You deposited ${movement} amount in your account`);
//     } else {
//         console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)} amount from your account`);
//     }
// })


// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
//   ]);

// currencies.forEach(function (value, key, map) {
//     console.log(`${key}: ${value}`);
// })

// const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'EUR']);
// currenciesUnique.forEach(function (val, key, set) {// sets dont have indexes
//     console.log(`${key}: ${val}`);
// })

// MAP METHOD =>
// const euroToUSD = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUSD;
// })
// console.log(movements);// original array
// console.log(movementsUSD);// new array from map function with applied oprn in callback funcn

// const movementDescriptions = movements.map(function (movement, i, arr) {
//   if (movement > 0) {
//         return `Movement ${i + 1}: You deposited ${movement} amount in your account`;
//     } else {
//         return `Movement ${i + 1}: You withdrew ${Math.abs(movement)} amount from your account`;
//     }
// })

// console.log(movementDescriptions);

// filter method =>
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// })
// console.log(deposits);

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// })
// console.log(withdrawals);

// accumulator necessary in reduce function
// const balance = movements.reduce(function (acc, cur, i, arr) {// similar to finding sum of all array elements
//   return acc + cur;
// }, 0);// requires to pass initial value of acc 

// console.log(balance);

//FIND METHOD => returns first value from array that matches the specified condition
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === "Jessica Davis");
console.log(account);





