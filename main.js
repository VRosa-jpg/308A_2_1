
// class Multiply {
//     constructor(num1, num2) {
//         this.firstNumber = num1;
//         this.secondNumber = num2;
//     }

//     multiplied() {
//         return this.firstNumber * this.secondNumber;
//     }
// }

// const newNum = new Multiply(2,3)
// console.log(newNum.multiplied())

// Documentation Class Declaration
// class Polygon {
//     constructor(height, width) {
//         this.theHeight = height;
//         this.theWidth = width;
//     }

//     areas () {
//         return this.theHeight * this.theWidth;
//     }
//     // This requires the values because if not it will result in NaN
//     perimeter (a,b) {
//         return this.theHeight + this.theWidth + a + b;
//     }
// }

// const area = new Polygon(3,4)
// console.log(area.perimeter())

// Learning Classes

// class Products {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct() {
//         console.log(`Product: ${this.name}`)
//         console.log(`Price: ${this.price.toFixed(2)}`)
//     }

//     calculateTotal(salesTax) {
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.75

// const product1 = new Products("Shirt", 19.99);
// const product2 = new Products("Pants", 25.50)

// product1.displayProduct();
// product2.displayProduct();

// const total = product1.calculateTotal(salesTax)
// console.log(`Total price with tax: $${total.toFixed(2)}`)

class MathEq {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;

    }

    add () {
        return this.num1 + this.num2;
    }
}

class Multiply extends MathEq {
    constructor(num1, num2, num3) {
        super(num1, num2)
        this.num3 = num3;
    }

    mult() {
        return this.num1 * this.num2 * this.num3
    }

    add() {
        let addedUp = (num1 + num2) * num3
        return addedUp
    }
}

let equation = new MathEq(2, 4)
console.log(MathEq)
// JS Classes
// Classes are blueprint to create objects
//  Has three things:
//      -Properties - intialized when you create an object using a constructor
//      -Constructor to initialize those properties
//      -Methods to manipulate those properties


// Lab Part

// Part 1
// const adventurer = {
//     name: 'Robin',
//     health: 10,
//     inventory:['Sword', 'Potion', 'Artifact'],
//     companion: {
//         name: "Leo",
//         type: "cat",
//         companion: {
//             name: 'Frank',
//             type: 'mouse'
//         }
//     },

//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 21) + mod;
//         console.log(`${this.name} rolled a ${result}`)
//     }

// }

// // for (let i = 0; i < adventurer.inventory.length; i++) {
// //     console.log(adventurer.inventory[i])
// // }

// adventurer.roll();

// // Part 2

// class Character {
//     constructor (name) {
//         this.name = name;
//         this.health = 100;
//         this.inventory = [];
//         this.companion = null;
//     }

//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 21) + mod;
//         console.log(`${this.name} rolled a ${result}`)
//     }
// }

// const robin = new Character("Robin");
// robin.inventory = ["Sword", "Potion", "Artifact"];

// // Robins companions into object
// robin.companion = new Character("Cat");
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["Small hat", "sunglasses"]

// robin.companion.roll()