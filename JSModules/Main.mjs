import { character } from './CharacterCustomizationModules/UserCharacter.mjs';
import { addSkillToCharacter, skillPool } from './CharacterCustomizationModules/SkillSystem.mjs';
import {Weapon, addWeaponToCharacter, Tool, addToolToCharacter, HeadEquip, addHeadEquipToCharacter, BodyEquip, addBodyEquipToCharacter, HandEquip, addHandEquipToCharacter, FeetEquip, addFeetEquipToCharacter, equipmentPool } from './CharacterCustomizationModules/EquipmentSystem.mjs';


function initializeCharacter() {
    // Player selects starter skills
    addSkillToCharacter("Fire Fist", "activeSkills", character);
    addSkillToCharacter("Diamond Defense", "passiveSkills", character);

    // Adding default weapons
    addWeaponToCharacter(equipmentPool.weapons[0], character);
    addWeaponToCharacter(equipmentPool.weapons[1], character);

    // Adding default tools
    addToolToCharacter(equipmentPool.tools[0], character);

    // Adding default equipment for the end of tutorial
    addHeadEquipToCharacter(equipmentPool.head[0], character);
    addBodyEquipToCharacter(equipmentPool.body[0], character);
    addHandEquipToCharacter(equipmentPool.hands[0], character);
    addFeetEquipToCharacter(equipmentPool.feet[0], character);

    console.log(character);
}


// Call the initialization function to set up Character
initializeCharacter();


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
