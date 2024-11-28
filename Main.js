import { addSkillToCharacter, skillPool } from './SkillSystem.js';
import { character } from './UserCharacter.js';

// Player selects a skill
addSkillToCharacter("Fire Fist", "activeSkills");
addSkillToCharacter("Diamond Defense", "passiveSkills");

console.log(character.skillSet);
