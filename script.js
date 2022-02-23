'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const number = Math.trunc(Math.random()*20) + 1


let score  = 20;
let highscore = 0;

// display message 
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
//document.querySelector('.score').textContent = '';

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // NO INPUT
    if (!guess) {
        displayMessage('No Number ❌');
    }
    // PLAYER HAD WON
    else if (guess === number) {
        displayMessage('Correct Number! 🎉');

        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width= '30rem';

        document.querySelector('.number').textContent = number;

        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
    }
    // guess is wrong

    else if(guess != number) {
        if (score > 1) {
            displayMessage(guess > number ? 'Number too high' : 'Number too low');
            score--
            document.querySelector('.score').textContent = score;
        }
        else { 
            displayMessage('You Lost the Game');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 0;
    displayMessage('Start guessing...');
})
