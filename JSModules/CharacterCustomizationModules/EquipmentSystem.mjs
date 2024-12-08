import { character } from "./UserCharacter.mjs";

// Handles Weapons
class Weapon {
    constructor(name, level, strength, speed, defense, agility, description, associatedSkills, isEquipped, isUnlocked) {
        this.name = name;
        this.level = level || 0; // Changes to 1 once unlocked
        this.strength = strength || 0;
        this.speed = speed || 0;
        this.defense = defense || 0;
        this.agility = agility || 0;
        this.description = description;
        this.associatedSkills = associatedSkills || [];
        this.isEquipped = isEquipped || false; // Defaults to false until manually equipped -- once equipped, changes other weapons to false
        this.isUnlocked = isUnlocked || false; // Defaults to false until unlocked in the game
    }
}
    // Function to add weapon to character's equipment
    function addWeaponToCharacter(weapon) {
        if (character.equips.weapons.length < 5) {
            character.equips.weapons.push(weapon);
        } else {
            console.log("Cannot add more weapons to pack. Maximum reached.");
        }
    }


// Handles Tools
class Tool {
    constructor(name, utility, description, isEquipped, isUnlocked) {
        this.name = name;
        this.utility = utility;
        this.description = description;
        this.isEquipped = isEquipped || false; // Defaults to false until manually equipped -- once equipped, changes other weapons to false
        this.isUnlocked = isUnlocked || false; // Defaults to false until unlocked in the game
    }
}
    // Function to add tool to character's equipment
    function addToolToCharacter(tool) {
        if (character.equips.tools.length < 5) {
            character.equips.tools.push(tool);
        } else {
            console.log("Cannot add more tools to pack. Maximum reached.");
        }
    }

// Handles Head Equipment
class HeadEquip {
    constructor(name, level, strength, speed, defense, agility, observation, description, isEquipped, isUnlocked) {
        this.name = name;
        this.level = level || 0; // Changes to 1 once unlocked
        this.strength = strength || 0;
        this.speed = speed || 0;
        this.defense = defense || 0;
        this.agility = agility || 0;
        this.observation = observation || 0;
        this.description = description;
        this.isEquipped = isEquipped || false; // Defaults to false until manually equipped -- once equipped, changes other weapons to false
        this.isUnlocked = isUnlocked || false; // Defaults to false until unlocked in the game
    }
}
    // Function to add head equip to character's equipment
    function addHeadEquipToCharacter(headEquip) { 
        character.equips.head[0] = headEquip; 
    }

// Handles Body Equipment
class BodyEquip {
    constructor(name, level, strength, speed, defense, agility, observation, description, isEquipped, isUnlocked) {
        this.name = name;
        this.level = level || 0; // Changes to 1 once unlocked
        this.strength = strength || 0;
        this.speed = speed || 0;
        this.defense = defense || 0;
        this.agility = agility || 0;
        this.observation = observation || 0;
        this.description = description;
        this.isEquipped = isEquipped || false; // Defaults to false until manually equipped -- once equipped, changes other weapons to false
        this.isUnlocked = isUnlocked || false; // Defaults to false until unlocked in the game
    }
}

    // Function to add body equip to character's equipment
    function addBodyEquipToCharacter(bodyEquip) { 
        character.equips.body[0] = bodyEquip; 
    }

// Handles Hands Equipment
class HandEquip {
    constructor(name, level, strength, speed, defense, agility, observation, description, isEquipped, isUnlocked) {
        this.name = name;
        this.level = level || 0; // Changes to 1 once unlocked
        this.strength = strength || 0;
        this.speed = speed || 0;
        this.defense = defense || 0;
        this.agility = agility || 0;
        this.observation = observation || 0;
        this.description = description;
        this.isEquipped = isEquipped || false; // Defaults to false until manually equipped -- once equipped, changes other weapons to false
        this.isUnlocked = isUnlocked || false; // Defaults to false until unlocked in the game
    }
}


    // Function to add hand equip to character's equipment
    function addHandEquipToCharacter(handEquip) {
        character.equips.hands[0] = handEquip;
    }

// Handles Feet Equiment
class FeetEquip {
    constructor(name, level, strength, speed, defense, agility, observation, description, isEquipped, isUnlocked) {
        this.name = name;
        this.level = level || 0; // Changes to 1 once unlocked
        this.strength = strength || 0;
        this.speed = speed || 0;
        this.defense = defense || 0;
        this.agility = agility || 0;
        this.observation = observation || 0;
        this.description = description;
        this.isEquipped = isEquipped || false; // Defaults to false until manually equipped -- once equipped, changes other weapons to false
        this.isUnlocked = isUnlocked || false; // Defaults to false until unlocked in the game
    }
}

    // Function to add head equip to character's equipment
    function addFeetEquipToCharacter(feetEquip) {
        character.equips.feet[0] = feetEquip;
    }


// Game Equipment Pool
const equipmentPool = {
    weapons: [ 
        new Weapon("Iron Sword", 1, 10, 5, 0, 0, "A basic iron sword.", ["Slash"], false, false), 
        new Weapon("Steel Axe", 1, 20, 3, 0, 0, "A heavy steel axe.", ["Chop"], false, false), 
        new Weapon("Wooden Staff", 1, 5, 4, 0, 1, "A simple wooden staff.", ["Thwack"], false, false), 
        new Weapon("Bronze Dagger", 1, 8, 7, 0, 2, "A sharp bronze dagger.", ["Stab"], false, false), 
        new Weapon("Silver Spear", 1, 15, 6, 0, 1, "A spear with a silver tip.", ["Pierce"], false, false), 
        new Weapon("Gold Mace", 1, 25, 2, 0, 0, "A heavy gold mace.", ["Crush"], false, false), 
        new Weapon("Platinum Sword", 1, 30, 5, 0, 1, "A shining platinum sword.", ["Slash"], false, false), 
        new Weapon("Diamond Staff", 1, 35, 4, 0, 2, "A staff encrusted with diamonds.", ["Smash"], false, false), 
        new Weapon("Obsidian Blade", 1, 40, 6, 0, 3, "A blade made from obsidian.", ["Cut"], false, false), 
        new Weapon("Titanium Hammer", 1, 50, 2, 0, 0, "A powerful titanium hammer.", ["Smash"], false, false), 
        new Weapon("Copper Club", 1, 12, 3, 0, 0, "A sturdy copper club.", ["Bash"], false, false), 
        new Weapon("Bronze Sword", 1, 18, 4, 0, 0, "A solid bronze sword.", ["Cut"], false, false), 
        new Weapon("Silver Sabre", 1, 25, 5, 0, 0, "A sleek silver sabre.", ["Slash"], false, false), 
        new Weapon("Gold Blade", 1, 30, 5, 0, 0, "A dazzling gold blade.", ["Slash"], false, false), 
        new Weapon("Platinum Axe", 1, 35, 4, 0, 0, "A hefty platinum axe.", ["Chop"], false, false),
        new Weapon("Longbow", 1, 8, 6, 0, 0, "A traditional longbow.", ["Shoot"], false, false), 
        new Weapon("Crossbow", 1, 15, 4, 0, 0, "A powerful crossbow.", ["Bolt"], false, false), 
        new Weapon("Shortbow", 1, 6, 8, 0, 0, "A compact shortbow.", ["Shoot"], false, false), 
        new Weapon("Repeating Crossbow", 1, 20, 5, 0, 0, "A crossbow with repeating mechanism.", ["Rapid Fire"], false, false), 
        new Weapon("Hunting Rifle", 1, 25, 5, 0, 0, "A precise hunting rifle.", ["Shoot"], false, false), 
        new Weapon("Sniper Rifle", 1, 35, 3, 0, 0, "A long-range sniper rifle.", ["Snipe"], false, false), 
        new Weapon("Shotgun", 1, 20, 2, 0, 0, "A close-range shotgun.", ["Blast"], false, false), 
        new Weapon("Pistol", 1, 10, 6, 0, 0, "A standard pistol.")
    ],
    tools: [
        new Tool("Pickaxe", "Mining", "A basic pickaxe", false, false),
        new Tool("Scanner","Item Collection", "Points to any nearby items in a given range", false, false)
    ],
    head: [
        new HeadEquip("Leather Helmet", 1, 2, 1, 3, 1, 2, "A basic leather helmet.", false, false), 
        new HeadEquip("Bronze Helmet", 1, 3, 1, 4, 2, 3, "A sturdy bronze helmet.", false, false), 
        new HeadEquip("Silver Helmet", 1, 4, 2, 5, 3, 4, "A shiny silver helmet.", false, false), 
        new HeadEquip("Gold Helmet", 1, 5, 3, 6, 4, 5, "A lavish gold helmet.", false, false), 
        new HeadEquip("Platinum Helmet", 1, 6, 3, 7, 4, 5, "A durable platinum helmet.", false, false), 
        new HeadEquip("Diamond Helmet", 1, 7, 4, 8, 5, 6, "A helmet encrusted with diamonds.", false, false), 
        new HeadEquip("Obsidian Helmet", 1, 8, 5, 9, 5, 6, "A helmet made from obsidian.", false, false), 
        new HeadEquip("Titanium Helmet", 1, 9, 5, 10, 6, 7, "A strong titanium helmet.", false, false), 
        new HeadEquip("Copper Helmet", 1, 2, 1, 3, 1, 2, "A basic copper helmet.", false, false), 
        new HeadEquip("Iron Helmet", 1, 3, 1, 4, 2, 3, "A sturdy iron helmet.", false, false), 
        new HeadEquip("Steel Helmet", 1, 4, 2, 5, 3, 4, "A solid steel helmet.", false, false), 
        new HeadEquip("Mithril Helmet", 1, 5, 3, 6, 4, 5, "A lightweight mithril helmet.", false, false), 
        new HeadEquip("Adamantium Helmet", 1, 6, 3, 7, 4, 5, "A tough adamantium helmet.", false, false), 
        new HeadEquip("Crystal Helmet", 1, 7, 4, 8, 5, 6, "A helmet made of crystal.", false, false), 
        new HeadEquip("Dragonbone Helmet", 1, 8, 5, 9, 5, 6, "A helmet made from dragonbone.", false, false)
    ],
    body: [
        new BodyEquip("Leather Chest Plate", 1, 2, 1, 3, 1, 2, "A basic leather chest plate.", false, false),
        new BodyEquip("Bronze Armor", 1, 3, 1, 4, 2, 3, "A sturdy bronze armor.", false, false), 
        new BodyEquip("Silver Chestplate", 1, 4, 2, 5, 3, 4, "A shiny silver chestplate.", false, false), 
        new BodyEquip("Gold Chestplate", 1, 5, 3, 6, 4, 5, "A lavish gold chestplate.", false, false), 
        new BodyEquip("Platinum Armor", 1, 6, 3, 7, 4, 5, "A durable platinum armor.", false, false), 
        new BodyEquip("Diamond Armor", 1, 7, 4, 8, 5, 6, "An armor encrusted with diamonds.", false, false), 
        new BodyEquip("Obsidian Chestplate", 1, 8, 5, 9, 5, 6, "A chestplate made from obsidian.", false, false), 
        new BodyEquip("Titanium Armor", 1, 9, 5, 10, 6, 7, "A strong titanium armor.", false, false), 
        new BodyEquip("Copper Armor", 1, 2, 1, 3, 1, 2, "A basic copper armor.", false, false), 
        new BodyEquip("Iron Chestplate", 1, 3, 1, 4, 2, 3, "A sturdy iron chestplate.", false, false), 
        new BodyEquip("Steel Chestplate", 1, 4, 2, 5, 3, 4, "A solid steel chestplate.", false, false), 
        new BodyEquip("Mithril Armor", 1, 5, 3, 6, 4, 5, "A lightweight mithril armor.", false, false), 
        new BodyEquip("Adamantium Chestplate", 1, 6, 3, 7, 4, 5, "A tough adamantium chestplate.", false, false), 
        new BodyEquip("Crystal Chestplate", 1, 7, 4, 8, 5, 6, "A chestplate made of crystal.", false, false), 
        new BodyEquip("Dragonbone Armor", 1, 8, 5, 9, 5, 6, "An armor made from dragonbone.", false, false)
    ],
    hands: [
        new HandEquip("Leather Gloves", 1, 2, 1, 3, 1, 2, "Basic leather gloves.", false, false),
        new HandEquip("Bronze Gauntlets", 1, 3, 1, 4, 2, 3, "Sturdy bronze gauntlets.", false, false), 
        new HandEquip("Silver Gloves", 1, 4, 2, 5, 3, 4, "Shiny silver gloves.", false, false), 
        new HandEquip("Gold Gloves", 1, 5, 3, 6, 4, 5, "Lavish gold gloves.", false, false), 
        new HandEquip("Platinum Gauntlets", 1, 6, 3, 7, 4, 5, "Durable platinum gauntlets.", false, false), 
        new HandEquip("Diamond Gloves", 1, 7, 4, 8, 5, 6, "Gloves encrusted with diamonds.", false, false), 
        new HandEquip("Obsidian Gauntlets", 1, 8, 5, 9, 5, 6, "Gauntlets made from obsidian.", false, false), 
        new HandEquip("Titanium Gauntlets", 1, 9, 5, 10, 6, 7, "Strong titanium gauntlets.", false, false), 
        new HandEquip("Copper Gloves", 1, 2, 1, 3, 1, 2, "Basic copper gloves.", false, false), 
        new HandEquip("Iron Gauntlets", 1, 3, 1, 4, 2, 3, "Sturdy iron gauntlets.", false, false), 
        new HandEquip("Steel Gauntlets", 1, 4, 2, 5, 3, 4, "Solid steel gauntlets.", false, false), 
        new HandEquip("Mithril Gloves", 1, 5, 3, 6, 4, 5, "Lightweight mithril gloves.", false, false), 
        new HandEquip("Adamantium Gauntlets", 1, 6, 3, 7, 4, 5, "Tough adamantium gauntlets.", false, false), 
        new HandEquip("Crystal Gloves", 1, 7, 4, 8, 5, 6, "Gloves made of crystal.", false, false), 
        new HandEquip("Dragonbone Gauntlets", 1, 8, 5, 9, 5, 6, "Gauntlets made from dragonbone.", false, false)
    ],
    feet: [
        new FeetEquip("Leather Shoes", 1, 2, 1, 3, 1, 2, "Basic leather shoes.", false, false),
        new FeetEquip("Bronze Boots", 1, 3, 1, 4, 2, 3, "Sturdy bronze boots.", false, false), 
        new FeetEquip("Silver Boots", 1, 4, 2, 5, 3, 4, "Shiny silver boots.", false, false), 
        new FeetEquip("Gold Boots", 1, 5, 3, 6, 4, 5, "Lavish gold boots.", false, false), 
        new FeetEquip("Platinum Boots", 1, 6, 3, 7, 4, 5, "Durable platinum boots.", false, false), 
        new FeetEquip("Diamond Boots", 1, 7, 4, 8, 5, 6, "Boots encrusted with diamonds.", false, false), 
        new FeetEquip("Obsidian Boots", 1, 8, 5, 9, 5, 6, "Boots made from obsidian.", false, false), 
        new FeetEquip("Titanium Boots", 1, 9, 5, 10, 6, 7, "Strong titanium boots.", false, false), 
        new FeetEquip("Copper Boots", 1, 2, 1, 3, 1, 2, "Basic copper boots.", false, false), 
        new FeetEquip("Iron Boots", 1, 3, 1, 4, 2, 3, "Sturdy iron boots.", false, false), 
        new FeetEquip("Steel Boots", 1, 4, 2, 5, 3, 4, "Solid steel boots.", false, false), 
        new FeetEquip("Mithril Boots", 1, 5, 3, 6, 4, 5, "Lightweight mithril boots.", false, false), 
        new FeetEquip("Adamantium Boots", 1, 6, 3, 7, 4, 5, "Tough adamantium boots.", false, false), 
        new FeetEquip("Crystal Boots", 1, 7, 4, 8, 5, 6, "Boots made of crystal.", false, false), 
        new FeetEquip("Dragonbone Boots", 1, 8, 5, 9, 5, 6, "Boots made from dragonbone.", false, false)
    ]
}




// Export Equip functions
export {Weapon, addWeaponToCharacter, Tool, addToolToCharacter, HeadEquip, addHeadEquipToCharacter, BodyEquip, addBodyEquipToCharacter, HandEquip, addHandEquipToCharacter, FeetEquip, addFeetEquipToCharacter, equipmentPool };

