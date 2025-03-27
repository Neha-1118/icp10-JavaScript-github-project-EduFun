document.addEventListener("DOMContentLoaded", function() {
    const mathQuestionEl = document.getElementById("math-question");
    const mathInputEl = document.getElementById("math-answer");
    const mathButtonEl = document.getElementById("math-submit");
    const mathScoreEl = document.getElementById("math-score");
    const mathFeedbackEl = document.getElementById("math-feedback");
    
    const geoQuestionEl = document.getElementById("geo-question");
    const geoInputEl = document.getElementById("geo-answer");
    const geoButtonEl = document.getElementById("geo-submit");
    const geoScoreEl = document.getElementById("geo-score");
    const geoFeedbackEl = document.getElementById("geo-feedback");
    
    const resetButton = document.getElementById("reset-button");
    
    let mathScore = 0;
    let geoScore = 0;
    
    const generateMathQuestion = () => {
        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;
        const operators = ['+', '-', '*'];
        let operator = operators[Math.floor(Math.random() * operators.length)];
        let correctAnswer;
        
        switch (operator) {
            case '+':
                correctAnswer = num1 + num2;
                break;
            case '-':
                correctAnswer = num1 - num2;
                break;
            case '*':
                correctAnswer = num1 * num2;
                break;
        }
        
        mathQuestionEl.textContent = `What is ${num1} ${operator} ${num2}?`;
        mathQuestionEl.dataset.answer = correctAnswer.toString();
    };
    
    mathButtonEl.addEventListener("click", () => {
        let userAnswer = parseInt(mathInputEl.value.trim(), 10);
        let correctAnswer = parseInt(mathQuestionEl.dataset.answer, 10);
        
        if (userAnswer === correctAnswer) {
            mathScore++;
            mathFeedbackEl.textContent = "Correct! 🎉";
            mathFeedbackEl.style.color = "green";
        } else {
            mathScore = Math.max(0, mathScore - 1);
            mathFeedbackEl.textContent = "Wrong! Try again. ❌";
            mathFeedbackEl.style.color = "red";
        }
        mathScoreEl.textContent = `Score: ${mathScore}`;
        mathInputEl.value = "";
        generateMathQuestion();
    });

    // India-specific Geography Questions
    const geographyQuestions = [
        { question: "What is the capital of India?", answer: "New Delhi" },
        { question: "Which is the longest river in India?", answer: "Ganga" },
        { question: "Which Indian state is known as the 'Land of Five Rivers'?", answer: "Punjab" },
        { question: "Where is the Taj Mahal located?", answer: "Agra" },
        { question: "Which is the largest state in India by area?", answer: "Rajasthan" },
        { question: "Which ocean lies to the south of India?", answer: "Indian Ocean" },
        { question: "Which state is famous for tea plantations in India?", answer: "Assam" },
        { question: "Which Indian city is known as the 'City of Lakes'?", answer: "Udaipur" }
    ];
    
    const generateGeoQuestion = () => {
        let currentQuestion = geographyQuestions[Math.floor(Math.random() * geographyQuestions.length)];
        geoQuestionEl.textContent = currentQuestion.question;
        geoQuestionEl.dataset.answer = currentQuestion.answer.toLowerCase();
    };
    
    geoButtonEl.addEventListener("click", () => {
        let userAnswer = geoInputEl.value.trim().toLowerCase();
        let correctAnswer = geoQuestionEl.dataset.answer;
        
        if (userAnswer === correctAnswer) {
            geoScore++;
            geoFeedbackEl.textContent = "Correct! 🎉";
            geoFeedbackEl.style.color = "green";
        } else {
            geoScore = Math.max(0, geoScore - 1);
            geoFeedbackEl.textContent = "Wrong! Try again. ❌";
            geoFeedbackEl.style.color = "red";
        }
        geoScoreEl.textContent = `Score: ${geoScore}`;
        geoInputEl.value = "";
        generateGeoQuestion();
    });

    resetButton.addEventListener("click", () => {
        mathScore = 0;
        geoScore = 0;
        mathScoreEl.textContent = `Score: ${mathScore}`;
        geoScoreEl.textContent = `Score: ${geoScore}`;
    });
    
    generateMathQuestion();
    generateGeoQuestion();
});

