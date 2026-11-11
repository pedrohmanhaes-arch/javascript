// Object = A collection of related propriedades and/or methods. Can be represent real word objects (people, products, places). 
//Object = {key:value,
//         function()}

const person1 = {
    firstName:  "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob!")},
    eat: () => console.log("I am eating Krabby Patty"),
    sayBye: () => console.log("Goodbye"),
}

const person2 = {
    firstName:  "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello:() => console.log("Hi! I am Patrick..."),
    eat: () => console.log("I am eating roast beef, chicken and pizza"),
    sayBye: () => console.log("Bye..."),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();
person1.sayBye();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();
person2.sayBye();


