let playerScore = 0;
let opponentScore = 0;
let maxScore = 100;

let score = document.querySelector('.scorea');
let scoreb = document.querySelector('.scoreb');
let btns = document.querySelectorAll('.btn');
let warning = document.querySelector('#warning');
let warning1 = document.querySelector('#warning1');

function clickHandler(e) {
    let btn = e.currentTarget;

    if (btn.classList.contains('decrease')) {
        playerScore -= 1;
    } else if (btn.classList.contains('increase')) {
        playerScore += 1;
    } else if (btn.classList.contains('decreaseb')) {
        opponentScore -= 1;
    } else if (btn.classList.contains('increaseb')) {
        opponentScore += 1;
    }

    if (playerScore == maxScore) {
        alert("You won!");
    } else if (opponentScore == maxScore) {
        alert("You lost!");
    }

    score.textContent = playerScore;
    scoreb.textContent = opponentScore;
}

btns.forEach(btn => {
    btn.addEventListener('click', clickHandler);
});

window.onload = function () {
    // Reset the score when the page loads.
    playerScore = 0;
    opponentScore = 0;
    score.textContent = playerScore;
    scoreb.textContent = opponentScore;
};
