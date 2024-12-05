import { character } from './UserCharacter.mjs';
import { addSkillToCharacter, skillPool } from './SkillSystem.mjs';




// console.log(character.skillSet);

// Player selects a skill
addSkillToCharacter("Fire Fist", "activeSkills");
addSkillToCharacter("Diamond Defense", "passiveSkills");



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
