
var scores, roundScore, activePlayer, gameplaying;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gameplaying) {
    // 1. Random number [1, 6]
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result on UI / Browser
    document.getElementById("dice-0").style.display = "block";
    document.getElementById("dice-0").src = "dice-" + dice + ".png";

    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
      // Add score
      roundScore += dice;

      // Refreshing current score
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // Switch to Next Player
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gameplaying) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= 20) {
      document.getElementById("name-" + activePlayer).textContent = "Winner";
      document.getElementById("dice-0").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      gameplaying = false;
    } else {
      // Switch to the next player
      nextPlayer();
    }
  }
});

// Next Player
function nextPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  roundScore = 0;

  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.getElementById("dice-0").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

// Reset the Game
function init() {
  activePlayer = 0;
  roundScore = 0;
  scores = [0, 0];
  gameplaying = true;

  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;

  document.getElementById("name-0").textContent = "Palyer 1";
  document.getElementById("name-1").textContent = "Palyer 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  document.getElementById("dice-0").style.display = "none";
}
