// ----------------------------------------------------------
// diceGame Generator Function
// ----------------------------------------------------------
// A generator is a function that can PAUSE and RESUME execution.
// Each "yield" returns the current game state for a single turn.
// The generator continues from exactly where it left off when
// .next() is called again.
function* diceGame({
    sides = 6,                          // total sides of dice (default = 6)
    players = ["Player 1", "Player 2"], // list of players
    targetScore = 20                    // score needed to win
} = {}) {

    // Basic input validation
    if (players.length < 2) {
        throw new Error("At least 2 players are required");
    }
    if (sides < 2) {
        throw new Error("Dice must have at least 2 sides ");
    }

    // Initialize score array: [0,0] for 2 players, [0,0,0] for 3 players, etc.
    const scores = Array(players.length).fill(0);

    let current = 0; // index of current player (0 → player1, 1 → player2, ...)

    // ------------------------------------------------------
    // GAME LOOP
    // ------------------------------------------------------
    // This loop runs indefinitely, turn-by-turn.
    // We exit ONLY when someone wins (via "return").
    while (true) {

        // ------------------------------------------
        // Roll the dice (random between 1 and sides)
        // ------------------------------------------
        const roll = 1 + Math.floor(Math.random() * sides);

        // Add the dice roll to the current player's score
        scores[current] += roll;

        // ------------------------------------------
        // Build current game state object
        // ------------------------------------------
        const state = {
            currentPlayerIndex: current,   // index of the player whose turn this was
            currentPlayer: players[current],// player name
            roll,                           // the value rolled this turn
            scores: [...scores],            // copy so external code can't mutate internal error
            winner: null,                   // becomes non-null only if someone wins
            isFinished: false               // becomes true only when game ends
        };


        // ------------------------------------------------------
        // CHECK FOR WINNER
        // ------------------------------------------------------
        // If the updated score of the current player >= targetScore,
        // then the game is over and that player wins.
        if (scores[current] >= targetScore) {

            state.winner = players[current]; // record winner
            state.isFinished = true;         // mark game as finished

            // Yield FINAL state before ending generator
            yield state;

            /**
             yield pasuses the generator function and return a value back to the caller.
             when the caller uses.next(), the generator resumes from the exact line after the yield.
             Generator functions are basically functions you can stop and resume.
             */

            // Return ends the generator completely → no more turns possible
            return;
        }

        // ------------------------------------------------------
        // YIELD NORMAL TURN RESULT
        // ------------------------------------------------------
        // Game NOT finished yet, so return the current state snapshot.
        yield state;

        // ------------------------------------------------------
        // MOVE TURN TO NEXT PLAYER
        // ------------------------------------------------------
        // (0 → 1 → 2 → 0 → 1 ...)
        current = (current + 1) % players.length;
    }
}


// ----------------------------------------------------------
// createDiceGame Controller Wrapper
// ----------------------------------------------------------
// This function creates a CLEAN API around the generator,
// so you don't call next() manually each time.
// It manages:
// - current generator instance
// - last known game state
// - finished flag
// - reset ability
function createDiceGame(config) {

    // Create a new generator instance with the given configuration
    let generator = diceGame(config);

    let lastState = null; // stores most recent state returned from generator
    let finished = false; // true when game is over

    // Return an object with clean public methods
    return {
        // --------------------------------------------------
        // roll()
        // --------------------------------------------------
        // Performs ONE turn of the game.
        // Internally calls generator.next().
        roll() {
            // If game finished, do NOT roll again
            if (finished) return lastState;

            // Move generator one step forward
            const { value, done } = generator.next();

            // Save returned state
            lastState = value || null;

            // Mark as finished if generator ended OR if returned state says finished
            finished = done || (value?.isFinished || false);

            // Return the updated game state
            return lastState;
        },

        // --------------------------------------------------
        // getState()
        // --------------------------------------------------
        // Returns last known game state (without rolling).
        getState() {
            return lastState;
        },

        // --------------------------------------------------
        // isFinished()
        // --------------------------------------------------
        // Tells whether the game is over.
        isFinished() {
            return finished;
        },

        // --------------------------------------------------
        // reset()
        // --------------------------------------------------
        // Creates a brand new generator instance using SAME config
        // Resets all state values.
        reset() {
            generator = diceGame(config); // new generator
            lastState = null;             // no state yet
            finished = false;             // game reopened
        }
    }

}
