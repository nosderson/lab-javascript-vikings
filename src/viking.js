// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage


    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage)
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`

    }
    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage)
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []

    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }


    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        //1º escolher dentro da array vikingArmy/saxonArmy um soldado aleatório

        let searchIndexViking = Math.floor(Math.random() * this.vikingArmy.length)//index
        let searchIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length)//index

        let viking = this.vikingArmy[searchIndexViking]
        let saxon = this.saxonArmy[searchIndexSaxon]

        let result = saxon.receiveDamage(viking.attack())

        if (saxon.health <= 0) {
            this.saxonArmy.splice(searchIndexSaxon, 1)
        }
        return result
    }


    saxonAttack() {
        let searchIndexViking = Math.floor(Math.random() * this.vikingArmy.length)//index
        let searchIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length)//index

        let viking = this.vikingArmy[searchIndexViking]
        let saxon = this.saxonArmy[searchIndexSaxon]

        let result = viking.receiveDamage(saxon.attack())

        if (viking.health <= 0) {
            this.vikingArmy.splice(searchIndexViking, 1)
        }
        return result
    }


    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return `Vikings and Saxons are still in the thick of battle.`
        }


    }

}


const war1 = new War()
const viking1 = new Viking('Ragnar', 100, 150);
const saxon1 = new Saxon(150, 100);


war1.addViking(viking1)
war1.addSaxon(saxon1)
console.log(war1)
