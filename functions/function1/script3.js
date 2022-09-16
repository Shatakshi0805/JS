"use strict";

const indiGo = {
    airline: "IndiGo",
    iataCode: "6E",
    bookings: [],

    book: function (flightNum, name) {
        console.log(`${name} booked a flight on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name});
    }
}

indiGo.book(239, "Shatakshi Gupta");
indiGo.book(635, "John Smith");

const spiceJet = {
    airline: "SpiceJet",
    iataCode: "SG",
    bookings: [],
}

const book = indiGo.book;

// DOES NOT WORK => book is just a regular function now from indigo book function and we know regukar functions if contains "this" keyword then it points to undefined
// book(23, "Sarah Williams");

//functions are just like object and as objects have method that means functions can have methods too in js
book.call(spiceJet, 23, "Sarah Jones");// IMPORTANT!!!
console.log(spiceJet);





