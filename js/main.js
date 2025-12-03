// ----------------------------------------------------------
// setup game
// ----------------------------------------------------------

// FIX: The correct function name is createDiceGame (not creteDiceGame)
const game = createDiceGame({
    sides: 6,                         // total sides of the dice
    players: ["Player A", "Player B"],// list of players
    targetScore: 30                   // score required to win
});


// ----------------------------------------------------------
// Get UI elements from DOM
// ----------------------------------------------------------
const rollBtn = document.getElementById("roll-btn");     // button to perform dice roll
const resetBtn = document.getElementById("reset-btn");   // button to reset the game
const output = document.getElementById("output");        // <pre> or <div> to show results



// ----------------------------------------------------------
// handle roll button click
// ----------------------------------------------------------
// Each click runs ONE turn in the game.
// game.roll() internally calls generator.next()
rollBtn.onclick = () => {
    const s = game.roll();   // perform a turn and get new state

    // If state is null → game already finished or invalid
    if (!s) return;

    // Append result for this turn to output
    output.textContent +=
        `${s.currentPlayer} rolled ${s.roll}\nScores: ${s.scores.join(", ")}\n\n`;

    // If this turn finishes the game
    if (s.isFinished) {
        output.textContent += `Winner: ${s.winner}\n\n`;
        rollBtn.disabled = true;  // disable further rolling
    }
};



// ----------------------------------------------------------
// handle reset button click
// ----------------------------------------------------------
// Reset the game engine and UI to initial state.
resetBtn.onclick = () => {
    game.reset();             // restart generator + state variables
    output.textContent = "";  // clear UI
    rollBtn.disabled = false; // allow rolling again
};
