
class Enemy {
    constructor (name, type, maxHP, currentHP, strength, speed, defense, agility) {
        this.name = "",
        this.type = "",
        this.maxHP = maxHP || 0,
        this.currentHP = currentHP || 0,
        this.strength = strength || 0,
        this.speed = 0,
        this.defense = 0,
        this.agility = 0
    }
}

// const tutorialEnemies = {
//     new Enemy("Goon", "Ranged", 100, )
// }