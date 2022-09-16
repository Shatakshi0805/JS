"use strict";

// const poll = {
//     question: "What is your fav programming language?",
//     options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//     answers: new Array(4).fill(0),

//     registerNewAnswer: function () {
//         var ans = prompt(`What is ur fav. language?
//         0: Java 
//         1: Python
//         2: Rust
//         3: C++
//         `);

//         if (isNaN(ans)) {
//             alert(`Enter a number value!`);
//         }
//         else {
            
//             if (ans > 3 || ans < 0) alert(`Enter value bw 0 to 3!`);
//             else {
//                 this.answers[ans] += 1;// update val of answers array on the given index value from user
//                 console.log(this.answers);
//             }
//         }

//         displayResults: function (type = 'array') {
//             if (type === 'array') {
//                 console.log(this.answers);
//             } else if ()
//         }

//     }
// }



const poll2 = {
    question: "What is your fav programming language?",
    options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),

    registerNewAnswer: function () {
        const ans = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));

        typeof ans === 'number' && ans < this.answers.length && this.answers[ans]++;

        this.displayResults();
        this.displayResults('string');
    },

    displayResults: function (type = 'array') {// default if not entered by user
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
}

const register = poll2.registerNewAnswer;

document.querySelector('.poll').addEventListener('click', register.bind(poll2));