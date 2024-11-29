class Skill {
    constructor(name, type, effect, damage, manaCost, cooldown, description) {
        this.name = name;
        this.type = type; // "active" or "passive"
        this.effect = effect; // "attack", "debuff attack", "debuff", "buff", "heal"
        this.damage = damage || 0;
        this.manaCost = manaCost || 0;
        this.cooldown = cooldown || 0;
        this.description = description || "";
    }
}

// Example Skills
const skillPool = {
    activeSkills: [
        new Skill("Fire Fist", "active", "attack", 30, 20, 5, "A punch with a powerful burst of fire."),
        new Skill("Sharp Kick", "active", "attack", 20, 15, 3, "A sharp kick that slows the enemy when unguarded."),
        new Skill("Lightning Strike", "active", "attack", 40, 25, 8, "A quick dash in the direction character is facing. If an enemy is in the path, inflicts damage.")
    ],
    passiveSkills: [
        new Skill("Flame Mastery", "passive", "", 0, 0, 0, "Increases fire damage by 15%"),
        new Skill("Diamond Defense", "passive", "", 0, 0, 0, "Takes zero damage when defending, upon perfect guard can inflict counter damage equal to 1% of defense."),
        new Skill("Speed Boost", "passive", "", 0, 0, 0, "Increases overall speed by 10%")
    ]
};


import { character } from './UserCharacter.mjs';

// Function to add skill to character's skillSet
function addSkillToCharacter(skillName, skillType) {
    const skill = skillPool[skillType].find(skill => skill.name === skillName);
    if (skill) {
        character.skillSet[skillType].push(skill);
    } else {
        console.log(`Skill ${skillName} not found in ${skillType}`);
    }
}


// Exporting the functions and skill pool
export { skillPool, addSkillToCharacter };
