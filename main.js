
// Lab Part

// Part 1
// Object literal
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

adventurer.roll();

// Part 2

// Character
class Character {

    static MAX_HEALTH = 100;

    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
        this.companion = null;
    }

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 21) + mod;
        console.log(`${this.name} rolled a ${result}`)
        return result
    }
}

// part 3 - not finished

// Adventurer
class Adventurer extends Character {
    static Roles = ["Wizard", "Healer", "Fighter"]
    constructor(name, role, vehicle) {
        // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        // super(name, this.health);
        super(name)
        this.role = role;
        this.vehicle = vehicle;
        this.inventory.push("bedroll", "50 gold coins")
    }

    scout () {
        console.log(`${this.name} is scouting ahead...`)
        super.roll()
    }
    
    // 1.Adventurer rolled 1 and 2.Adventurer rolled 2 1.Adventurer gets -1
    duel(Adventurer) {
        const rolled = this.roll()
        const opponent = Adventurer.roll()
        if (rolled > opponent ) {
            this.health -= 1
            console.log(`Rolled: ${rolled}`)
        } else if (rolled < opponent) {
            console.log(`Opponent: ${opponent}`)
            opponent.health -= 1
        } else {
            console.log("Its a draw")
        }
    }
}

// Companion
class Companion extends Character {
    constructor(name, type) {
        super(name)
        this.type = type;
        this.inventory.push("rope", "slippers", "compass")
    }

    // Method 1
    eat () {
        // destructuring - 
        // let arr = [1,2,3]
        // const [one, two, three] = arr;

        // Variable to increment by
        let food = 10
        
        // Calling result from roll because i returned result
        const result = this.roll()
        

        if (result > 10) {
            this.health += food
            console.log(`Your health is now ${this.health}`)

        } else if (result < 10) {
            this.health -= food
            console.log(`Your health is now ${this.health}`)

        } else if (this.health < 0) {
            console.log("You lose")
        }

    }

    // method 2
    sustain () {
        while (this.health < 200 ) {
            miss.eat()
        }
    }
}

const Robin = new Adventurer("Robin", "Gather");
Robin.role = "Fighter";
Robin.inventory = ["Sword", "Gun", "Rope"];
const robinCompanion = new Companion("Frank", "Cat");
robinCompanion.inventory = ["Small hat", "flip flops"];

// Part 4

const roles = new Adventurer();

console.log(Adventurer.Roles)

//  Part 6

console.log