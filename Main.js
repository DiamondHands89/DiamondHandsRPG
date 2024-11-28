import { addSkillToCharacter, skillPool } from './SkillSystem.js';
import { character } from './UserCharacter.js';

// Player selects a skill
addSkillToCharacter("Fire Fist", "activeSkills");
addSkillToCharacter("Diamond Defense", "passiveSkills");

console.log(character.skillSet);


function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.Screen').forEach(screen => {
        screen.style.display = 'none';
    });
    // Show the selected screen
    document.getElementById(screenId).style.display = 'block';
}


// Additional logic for character selection, game state management, etc.


// Example: Setting up initial character selection
function setupCharacterSelection() {
    // Character selection logic
}

// Call setup functions as needed
setupCharacterSelection();
