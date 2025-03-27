document.addEventListener("DOMContentLoaded", function () {
    const scienceImage = document.getElementById("science-image");
    const historyImage = document.getElementById("history-image");
    const scienceGame = document.getElementById("science-game");
    const historyGame = document.getElementById("history-game");

    // Quiz Data
    const scienceQuestions = [
        { question: "What planet is known as the Red Planet?", answer: "Mars" },
        { question: "What gas do plants absorb from the atmosphere?", answer: "Carbon Dioxide" },
        { question: "What is the chemical formula for water?", answer: "H2O" }
    ];
    
    const historyQuestions = [
        { question: "Who was the first President of India?", answer: "Dr. Rajendra Prasad" },
        { question: "In which year did India gain independence?", answer: "1947" },
        { question: "What is the capital of India?", answer: "New Delhi" }
    ];

    function startQuiz(gameSection, questions, imgElement) {
        // Move the image down before showing the quiz
        imgElement.style.transition = "transform 0.5s ease";
        imgElement.style.transform = "translateY(50px)";

        // Ensure only one quiz is visible
        scienceGame.style.display = "none";
        historyGame.style.display = "none";
        gameSection.innerHTML = `
            <div class="quiz-container">
                <h2 class="quiz-title">Quiz</h2>
                <p class="question-text"></p>
                <input type="text" placeholder="Your answer here" class="answer-input" />
                <button class="submit-button">Submit</button>
                <p class="feedback"></p>
                <p class="score-display">Score: 0</p>
                <button class="close-button">Close Quiz</button>
            </div>
        `;

        let score = 0;
        let index = 0;
        const questionText = gameSection.querySelector(".question-text");
        const answerInput = gameSection.querySelector(".answer-input");
        const submitButton = gameSection.querySelector(".submit-button");
        const feedbackDisplay = gameSection.querySelector(".feedback");
        const scoreDisplay = gameSection.querySelector(".score-display");
        const closeButton = gameSection.querySelector(".close-button");

        function nextQuestion() {
            if (index < questions.length) {
                questionText.textContent = questions[index].question;
                answerInput.value = "";
                feedbackDisplay.textContent = "";
            } else {
                questionText.textContent = "Quiz Over! Your final score is " + score;
                answerInput.style.display = "none";
                submitButton.style.display = "none";
            }
        }

        submitButton.addEventListener("click", function () {
            const userAnswer = answerInput.value.trim();
            if (userAnswer.toLowerCase() === questions[index].answer.toLowerCase()) {
                score++;
                feedbackDisplay.textContent = "Correct!";
                feedbackDisplay.style.color = "green";
            } else {
                feedbackDisplay.textContent = "Wrong! Correct answer: " + questions[index].answer;
                feedbackDisplay.style.color = "red";
            }
            index++;
            scoreDisplay.textContent = "Score: " + score;
            setTimeout(nextQuestion, 1000);
        });

        closeButton.addEventListener("click", function () {
            gameSection.style.display = "none";
            imgElement.style.transform = "translateY(0px)"; // Reset image position
        });

        gameSection.style.display = "flex";
        nextQuestion();
    }

    scienceImage.addEventListener("click", function () {
        startQuiz(scienceGame, scienceQuestions, scienceImage);
    });

    historyImage.addEventListener("click", function () {
        startQuiz(historyGame, historyQuestions, historyImage);
    });
});
