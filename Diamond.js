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
        name: "Diamond Hand Kwame",
        race: "Human",
        gender: "Male",
        type: "Fighter"
    },
    // Attributes and stats
    baseStats: {
        maxHP: "",
        currentHP: "",
        maxMP: "",
        currentMP: "",
        strength: "",
        speed: "",
        defense: "",
        agility: "",
        observation: "",

    },
    skillSet: {
        activeSkills: [],
        passiveSkills: [],
    },
    // Equipment Items
    equips: {
        weapons: [
            {
                name: "",
                damage: "",
                range: "",
                agility: "",
                speed: ""
            },
            {
                name: "",
                damage: "",
                range: "",
                agility: "",
                speed: ""
            },
            {
                name: "",
                damage: "",
                range: "",
                agility: "",
                speed: ""
            }
        ],
        head: [
            {
                name: "",
                defense: "",
                agility: "",
                speed: ""
            }
        ],
        body: [
            {
                name: "",
                defense: "",
                agility: "",
                speed: ""
            }
        ],
        hands: [
            {
                name: "",
                defense: "",
                agility: "",
                speed: ""
            }
        ],
        feet: [
            {
                name: "",
                defense: "",
                agility: "",
                speed: ""
            }
        ]
    },
    // Character Bag
    inventory: {
        items: [],
        food: [],
    }
}
// END PLAYER'S CHARACTER