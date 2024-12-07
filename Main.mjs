import { character } from './UserCharacter.mjs';
import { addSkillToCharacter, skillPool } from './SkillSystem.mjs';
import {Weapon, addWeaponToCharacter, Tool, addToolToCharacter, HeadEquip, addHeadEquipToCharacter, BodyEquip, addBodyEquipToCharacter, HandEquip, addHandEquipToCharacter, FeetEquip, addFeetEquipToCharacter } from './EquipmentSystem.mjs';



// console.log(character.skillSet);

// Player selects a skill
addSkillToCharacter("Fire Fist", "activeSkills");
addSkillToCharacter("Diamond Defense", "passiveSkills");

// Adding default equipment for the end of tutorial
addHeadEquipToCharacter(equipmentPool.head[0]);
addBodyEquipToCharacter(equipmentPool.body[0]);
addHandEquipToCharacter(equipmentPool.hands[0]);
addFeetEquipToCharacter(equipmentPool.feet[0]);


function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.Screen').forEach(screen => {
        screen.style.display = 'none';
    });
    // Show the selected screen
    document.getElementById(screenId).style.display = 'block';
}

// Ensure showScreen is available in the global scope
window.showScreen = showScreen;

// Additional logic for character selection, game state management, etc.


// Example: Setting up initial character selection
function setupCharacterSelection() {
    // Character selection logic
}

// Call setup functions as needed
setupCharacterSelection();
