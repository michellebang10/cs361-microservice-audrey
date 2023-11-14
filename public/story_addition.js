let num1, num2, correctAnswer, problemCount, score;

function generateProblem() {
    if (problemCount < 10) {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        correctAnswer = num1 + num2;

        document.getElementById('problem').textContent = `Patty has ${num1} bananas and Timmy has ${num2} apples. How many fruits are there in total?`;
        document.getElementById('answer').value = '';
        document.getElementById('result').textContent = '';
    }
    else {
        endGame();
    }
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);

    if (userAnswer === correctAnswer) {
        score++;
        problemCount++;
        document.getElementById('score').textContent = `Score: ${score}/10`;
        generateProblem();
    } 
    else {
        document.getElementById('result').textContent = 'Try again';
    }
}

function endGame() {
    if (score == 10) {
        document.getElementById('problem-container').style.display = 'none';
        document.getElementById('score').textContent = `Final Score: ${score}/10`;
    }
}

window.onload = function () {
    problemCount = 0;
    score = 0;
    generateProblem();
};