// Encapsulation
// this -> refers to the object itself

// let employee = {
    
//     overtime: 10,
//     rate: 20,
//     getWage: function (baseSalary) {
//         return baseSalary + (this.overtime * this.rate)
//     }
// }

// console.log(employee.getWage(40000))


// In this case this refers to person becasue that is the object
// const person = {
//     name: "Victoria",
//     greet() {
//         console.log(this.name);
//     }
// };

// person.greet()

// An example of how 'this' will be the name of the object and refer to whats inside
// let vic = {
//     v: "Very cute",
//     i: "Irresistable",
//     draw: function () {
//         console.log(this)
//     }
// }

// vic.draw()


// Abstration
// What is the interface of an object?
// Reduce the impact of change?

// Inheritance 
// elminate redundant code

// Creating Objects
// Object literal syntax
// Object is a cllection of key value pairs
// Properties are used to hold values
// Methods ot function are used to define logic
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     }, 
//     draw: function() {
//         console.log('draw')
//     }
// };

// circle.draw()


// Factories
// Factory Function
// you would only really have parameters in function if the value isnt set and stone
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw')
//         }
//     };
// }

// const circle = createCircle(1);
// circle.draw();

// // Constructors
// // Constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log("draw")
//     }
// }

// // 'new' operator also works like: return this;
// const another = new Circle(1);

// console.log(circle.constructor)

// class mathUtil {
//     static pi = 3.14159

//     static getDiameter(radius) {
//         return radius * 2;
//     }
// }

// console.log(mathUtil.pi + 1)
// console.log(mathUtil.getDiameter(23))

class User{
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }
}

// The instance of a class cannot access a static method
const user1 = new User("Spongebob");
const user2 = new User("Spongebobby");
const user3 = new User("SpongebobbyBrown");
const user4 = new User("SpongebobbyMillie");



console.log(User.userCount);