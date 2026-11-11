// Constructor = special method for defining the properties and methods of objects

/* const car1 = {
    make: "Ford",
    model: "Mustang",
    year: 2024,
    color: "red",
    drive: function(){console.log(`You drive the ${this.model}`)}
}

const car2 = {
    make: "Chevrolet",
    model: "Camaro",
    year: 2025,
    color: "blue",
    drive: function(){console.log(`You drive the ${this.model}`)}
}

const car3 = {
    make: "Dodge",
    model: "Charger",
    uear: 2026,
    color: "silver",
    drive: function(){console.log(`You drive the ${this.model}`)}
}

car1.drive()
car2.drive()
car3.drive() */

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Fiat", "Palio", 2012,"red");
const car2 = new Car("Chevrolet", "Agile", 2012, "white");
const car3 = new Car("Dodge", "Charger", 2026, "silver")

console.log(car1)
console.log(car2)
console.log(car3)

car1.drive()
car2.drive()
car3.drive()
