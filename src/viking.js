// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        let searchIndexViking = Math.floor(Math.random()*this.vikingArmy.length)//index
        let searchIndexSaxon = Math.floor(Math.random()*this.saxonArmy.length)//index
        let viking = this.vikingArmy[searchIndexViking]
        let saxon = this.saxonArmy[searchIndexSaxon]
        console.log([viking, saxon])
        return [viking, saxon]
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
    static vikingAttack() {
        randomico = super.attack()
        //vicking1 = randomico[0]
        //saxon1 = randomico[1]
        let health = (saxon1).receiveDamage(viking1.strength)
        if (saxon1.health <= 0) {
            saxon1 = null;
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

  
    static saxonAttack() {
        const randomico = super.attack()
       vicking1 = randomico[0]
        saxon1 = randomico[1]
        let health = (viking1).receiveDamage(saxon1.strength)
        if (viking1.health <= 0) {
           viking1 = null;
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
        return Viking.vikingAttack();
    }


    saxonAttack() {
        return Saxon.saxonAttack();
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
//console.log(war1)
war1.saxonAttack()
//console.log(war1)

