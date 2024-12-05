import { character } from '.UserCharacter.mjs';

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

    // Function to add tool to character's equipment


// Handles Head Equipment

    // Function to add head equip to character's equipment


// Handles Body Equipment


// Handles Hands Equipment


// Handles Feet Equiment




