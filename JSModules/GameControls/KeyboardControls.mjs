

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
    keyI: 'openInventory',
    KeyM: 'openMap',
    KeyP: 'pauseGame', // Offline Only
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
        case '':
            console.log("");
            break;
        
    }
}