// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
    }

    static attack(saxonArmyLenght, vikingArmyLenght) {
        let IndexViking = Math.floor(Math.random() * vikingArmyLenght)//index
        let IndexSaxon = Math.floor(Math.random() * saxonArmyLenght)//index
        return ([IndexViking, IndexSaxon])
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

    //1º escolher dentro da array vikingArmy/saxonArmy um soldado aleatório
    static vikingAttack(saxonArmy, vikingArmy) {
        const randomico = super.attack(saxonArmy.length, vikingArmy.length)
        const indexVicking = randomico[0]
        const indexSaxon = randomico[1]
        const viking = vikingArmy[indexVicking]
        const saxon = saxonArmy[indexSaxon]
        const health = (saxon.receiveDamage(viking.strength))
        if (health === `A Saxon has died in combat`) {
            saxonArmy.splice(saxon, 1)
            console.log(`A Saxon has died in combat`)
        }
        return health
    }


}
// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)

    }
    receiveDamage(damage) {
        super.receiveDamage(damage)
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
    }


    static saxonAttack(saxonArmy, vikingArmy) {
        const randomico = super.attack(saxonArmy.length, vikingArmy.length)
        const indexVicking = randomico[0]
        const indexSaxon = randomico[1]
        const viking = vikingArmy[indexVicking]
        const saxon = saxonArmy[indexSaxon]
        const health = (viking.receiveDamage(saxon.strength))
        if (health === `${viking.name} has died in act of combat`) {
            vikingArmy.splice(saxon, 1)
            console.log(`${viking.name} has died in act of combat`)
        }
        return health
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
        return Viking.vikingAttack(this.saxonArmy, this.vikingArmy);
    }


    saxonAttack() {
        return Saxon.saxonAttack(this.saxonArmy, this.vikingArmy);
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


var war1 = new War()
let viking1 = new Viking('Ragnar', 100, 150);
let saxon1 = new Saxon(150, 100);
war1.addViking(viking1)
war1.addSaxon(saxon1)
console.log(war1)
war1.vikingAttack()
console.log(war1)

