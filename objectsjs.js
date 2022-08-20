const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Mike", "Peter", "Sarah"],
    hasDriversLicense: false,

    printString: function () {
        this.age = 2022 - this.birthYear;
        if (this.hasDriversLicense) {
            console.log(`${this.firstName} is a ${this.age} years old ${this.job}, and he 
            has a driver's license`);
        } else {
            console.log(`${this.firstName} is a ${this.age} years old ${this.job}, and he 
            has no driver's license`);
        }
    }
};