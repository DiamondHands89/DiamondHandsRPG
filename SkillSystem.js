class Skill {
    constructor(name, type, effect, damage, manaCost, cooldown, description) {
        this.name = name;
        this.type = type; // "active" or "passive"
        this.effect = effect; // "Attack", "Debuff", "Buff", "Heal"
        this.damage = damage || 0;
        this.manaCost = manaCost || 0;
        this.cooldown = cooldown || 0;
        this.description = description || "";
    }
}

// Example Skills
const skillPool = {
    activeSkills: [
        new Skill("Fireball", "active", 30, 20, 5, "A powerful burst of fire."),
        new Skill("Ice Shard", "active", 20, 15, 3, "A sharp shard of ice that slows the enemy."),
        new Skill("Lightning Strike", "active", 40, 25, 8, "A quick strike of lightning.")
    ],
    passiveSkills: [
        new Skill("Flame Mastery", "passive", 0, 0, 0, "Increases fire damage by 15%"),
        new Skill("Ice Resilience", "passive", 0, 0, 0, "Reduces ice damage taken by 10%"),
        new Skill("Speed Boost", "passive", 0, 0, 0, "Increases overall speed by 10%")
    ]
};

// Exporting the skill pool
export { skillPool };
