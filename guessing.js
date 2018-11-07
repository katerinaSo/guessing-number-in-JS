window.onload = function () {
    var upperLimit = 100;
    var lowerLimit = 1;
    var counterTries = 1;
    var guessGame = document.getElementById("game");
    var randNum = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
    var outputP = document.getElementById('attempt');
    var btnSubmit = document.getElementById('submitGuess');
    var randNum = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
    var clue = document.getElementById('clue');
    outputP.style.visibility = 'hidden';



    btnSubmit.onclick = function () {
        var guess = +document.getElementById("guess").value;
        if (guess < lowerLimit || guess > upperLimit) {
            outputP.style.visibility = "hidden";
            clue.style.visibility = "hidden";
            rand.innerHTML = 'number has to be between ' + lowerLimit + ' and ' + upperLimit;
            rand.style.color = 'red';
            btnSubmit.innerHTML = 'another try';


        } else if (guess > randNum) {
            rand.innerHTML = '';
            outputP.style.visibility = 'visible';
            clue.style.visibility = 'visible';
            clue.innerHTML = 'TOO HIGH';
            counterTries += 1;
            btnSubmit.innerHTML = 'another try';


        } else if (guess < randNum) {
            outputP.style.visibility = 'visible';
            clue.style.visibility = 'visible';
            rand.innerHTML = '';
            clue.innerHTML = 'TOO LOW';
            counterTries += 1;
            btnSubmit.innerHTML = 'another try';


        } else if (guess == randNum) {
            clue.style.visibility = "hidden";
            outputP.style.visibility = "visible";
            outputP.style.color = "gold";
            outputP.innerHTML = 'Great! You guessed in ' + counterTries + ' tries';
            guessGame.innerHTML = "Would you like to play again? Reload the page. ";
            btnSubmit.innerHTML = "game is over";


        } else {
            outputP.style.visibility = "hidden";
            clue.style.visibility = 'hidden';
            rand.style.color='red';
            rand.innerHTML = 'Check your number. Perhaps you typed symbols, empty spaces, letters)';
        }

    };
};
