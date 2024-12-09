// -------------------------------------------------------
// |             The B Realm                              |
// |-----------------------------------------------------|
// | Character Name (Level)  |         Game Area         |
// |--------------------------|-------------------------|
// | HP: 100/100             |                         |
// | MP: 50/50               |                         |
// | Strength: 10            |                         |
// | Agility: 8              |         [Scene]         |
// | Intelligence: 12        |                         |
// | XP: 500                 |                         |
// | Level: 5                |                         |
// |--------------------------|                         |
// | Inventory               |                         |
// | - Sword                 |-------------------------|
// | - Shield                |         Action Log       |
// | - Potion                | - You encounter a goblin! |
// |--------------------------| - You found a treasure!  |
// | Controls                |-------------------------|
// | [Move] [Attack] [Interact]                         |
// -------------------------------------------------------


// PLAYER'S CHARACTER
const character = {
    // Basic Info
    basicInfo: {
        name: "",
        race: "",
        gender: "",
        type: ""
    },
    // Attributes and stats
    baseStats: {
        maxHP: 0,
        currentHP: 0,
        maxMP: 0,
        currentMP: 0,
        strength: 0,
        speed: 0,
        defense: 0,
        agility: 0,
        observation: 0,
        xpToNextLevel: 0,
        awakening: 0
    },
    // Skill Set
    skillSet: {
        activeSkills: [],
        passiveSkills: [],
    },
    // Equipment Items
    equips: {
        weapons: [],
        tools: [],
        head: [],
        body: [],
        hands: [],
        feet: []
    },
    // Character Bag
    inventory: {
        items: [],
        food: [],
    }
}

// Exporting the character object 
export { character };
// END PLAYER'S CHARACTER



console.log(character);


