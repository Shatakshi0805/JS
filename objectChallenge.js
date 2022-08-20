const markMiller = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        const bmi = this.mass / (this.height * this.height);
        this.bmi = bmi;
        return this.bmi;
    }
};

const johnSmith = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        const bmi = this.mass / (this.height * this.height);
        this.bmi = bmi;
        return this.bmi;
    }
};

const markBMI = markMiller.calcBMI();
const johnBMI = johnSmith.calcBMI();
if (markBMI < johnBMI) {
    console.log(`${johnSmith.firstName}'s BMI(${markBMI}) is higher 
    than ${markMiller.firstName}'s (${markBMI})`);
} else {
    console.log(`${markMiller.firstName}'s BMI(${markBMI}) is higher 
    than ${johnSmith.firstName}'s (${johnBMI})`);
}



