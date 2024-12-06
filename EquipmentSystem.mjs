import { character } from './UserCharacter.mjs';

// Handles Weapons
class Weapon {
    constructor(name, level, damage, description, speed, associatedSkills, isEquipped, isUnlocked) {
        this.name = name;
        this.level = level || 0; // Changes to 1 once unlocked
        this.damage = damage || 0;
        this.description = description;
        this.speed = speed || 0;
        this.associatedSkills = associatedSkills || [];
        this.isEquipped = isEquipped || false; // Defaults to false until manually equipped -- once equipped, changes other weapons to false
        this.isUnlocked = isUnlocked || false; // Defaults to false until unlocked in the game
    }
}
    // Function to add weapon to character's equipment
    


// Handles Tools
class Tool {
    constructor(name, utility) {
        this.name = name;
        this.utility = utility;
    }
}
    // Function to add tool to character's equipment


// Handles Head Equipment
class HeadEquip {
    constructor(name, level, strength, speed, defense, agility, observation, description) {
        this.name = name;
        this.level = level || 0;
        this.strength = strength || 0;
        this.speed = speed || 0;
        this.defense = defense || 0;
        this.agility = agility || 0;
        this.observation = observation || 0;
        this.description = description;
    }
}
    // Function to add head equip to character's equipment


// Handles Body Equipment
class BodyEquip {
    constructor(name, level, strength, speed, defense, agility, observation, description) {
        this.name = name;
        this.level = level || 0;
        this.strength = strength || 0;
        this.speed = speed || 0;
        this.defense = defense || 0;
        this.agility = agility || 0;
        this.observation = observation || 0;
        this.description = description;
    }
}
// Handles Hands Equipment
class HandEquip {
    constructor(name, level, strength, speed, defense, agility, observation, description) {
        this.name = name;
        this.level = level || 0;
        this.strength = strength || 0;
        this.speed = speed || 0;
        this.defense = defense || 0;
        this.agility = agility || 0;
        this.observation = observation || 0;
        this.description = description;
    }
}
// Handles Feet Equiment
class FeetEquip {
    constructor(name, level, strength, speed, defense, agility, observation, description) {
        this.name = name;
        this.level = level || 0;
        this.strength = strength || 0;
        this.speed = speed || 0;
        this.defense = defense || 0;
        this.agility = agility || 0;
        this.observation = observation || 0;
        this.description = description;
    }
}


