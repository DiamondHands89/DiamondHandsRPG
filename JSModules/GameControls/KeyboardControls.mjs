

// GameControls/KeyboardControls.mjs

const keyMappings = {
    ArrowUp: 'moveForward',
    ArrowDown: 'moveBackward',
    ArrowLeft: 'moveLeft',
    ArrowRight: 'moveRight',
    Space: 'jump',
    KeyQ: 'lightAttack',
    KeyW: 'heavyAttack',
    KeyE: 'guard',
    KeyR: 'weapondSkill1',
    KeyT: 'weaponSkill2',
    KeyY: 'weaponSkill3',
    KeyU: 'useTool',
    keyI: 'openInventory',
    KeyM: 'openMap',
    KeyP: 'pauseGame', // Offline Only
    Digit1: 'skill1',
    Digit2: 'skill2',
    Digit3: 'skill3',
    Digit4: 'skill4',
    Digit5: 'skill5',
    Digit6: 'skill6',
    Digit7: 'skill7',
    Digit8: 'skill8',
    Digit9: 'skill9',
    Digit0: 'skill10',
}

// Function to handle key press events
function handleKeyPress(event) {
    const action = keyMappings[event.code];
    if (action) {
        // Call the corresponding action
        performAction(action);
    }
}

// Function to perform actions based on key presses
function performAction(action) {
    switch(action) {
        case 'moveForward':
            console.log("Move character forward");
            break;
        case 'moveBackward':
            console.log("Turn character 180 degrees and move forward");
            break;
        case 'moveLeft':
            console.log("Turn character 90 degrees to the left and move forward");
            break;
        case 'moveRight':
            console.log("Turn character 90 degrees to the right and move forward");
            break;
        case 'jump':
            console.log("Jump into the air");
            break;
        case 'lightAttack':
            console.log("Perform a quick attack");
            break;
        case 'heavyAttack':
            console.log("Perform a heavy attack");
            break;
        case 'guard':
            console.log("Guard");
            break;
        case 'weaponSkill1':
            console.log("Perform the selected weapon's slot 1 skill");
            break;
        case 'weaponSkill2':
            console.log("Perform the selected weapon's slot 2 skill");
            break;
        case 'weaponSkill3':
            console.log("Perform the selected weapon's slot 3 skill");
            break;
        case 'useTool':
            console.log("Use Selected Tool");
            break;
        case 'skill1':
            console.log("Perform the skill in Character's skill slot 1");
            break;
        case 'skill2':
            console.log("Perform the skill in Character's skill slot 1");
            break;
        case 'skill3':
            console.log("Perform the skill in Character's skill slot 1");
            break;
        case 'skill4':
            console.log("Perform the skill in Character's skill slot 1");
            break;
        case 'skill5':
            console.log("Perform the skill in Character's skill slot 1");
            break;
        case 'skill6':
            console.log("Perform the skill in Character's skill slot 1");
            break;
        case 'skill7':
            console.log("Perform the skill in Character's skill slot 1");
            break;
        case 'skill8':
            console.log("Perform the skill in Character's skill slot 1");
            break;
        case 'skill9':
            console.log("Perform the skill in Character's skill slot 1");
            break;
        case 'skill0':
            console.log("Perform the skill in Character's skill slot 1");
            break;
        case 'skill1':
            console.log("Perform the skill in Character's skill slot 1");
            break;
        default:
            console.log("Unknown action", action);
    }
}

// Event listener for button press
document.addEventListener('keydown', handleKeyPress);

export { handleKeyPress };
