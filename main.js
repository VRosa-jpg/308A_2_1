
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


// Lab Part

const adventurer = {
    name: 'Robin',
    health: 10,
    inventory:['Sword', 'Potion', 'Artifact'],
    companion: {
        name: "Leo",
        type: "cat",
        companion: {
            name: 'Frank',
            type: 'mouse'
        }
    },

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 21) + mod;
        console.log(`${this.name} rolled a ${result}`)
    }

}

// for (let i = 0; i < adventurer.inventory.length; i++) {
//     console.log(adventurer.inventory[i])
// }

adventurer.roll();