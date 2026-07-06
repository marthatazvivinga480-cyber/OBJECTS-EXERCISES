const car = {
    make: "Toyota",
    model: "Corolla",
    color: "blue",

    describe: function () {
        return `This is a ${this.color} ${this.make} ${this.model}.`;
    },   // adding a method to an object.

    updateColor: function (newColor) {
        this.color = newColor;
        console.log(`The car color has been updated to ${this.color}.`);
    }
};

console.log(car.describe());

car.updateColor("red");

console.log(car.describe());



