const questions = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Madrid", "Paris", "Berlin"],
        correctAnswer: 2,
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter", "Earth"],
        correctAnswer: 0,
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: 1,
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-button");

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;

    choicesElement.innerHTML = "";
    for (let i = 0; i < question.choices.length; i++) {
        const choice = question.choices[i];
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => checkAnswer(i));
        choicesElement.appendChild(button);
    }
}

function checkAnswer(choiceIndex) {
    const question = questions[currentQuestionIndex];
    if (choiceIndex === question.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = "Quiz completed!";
    choicesElement.innerHTML = "";
    nextButton.style.display = "none";
    scoreElement.textContent = `Score: ${score} out of ${questions.length}`;
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
});

displayQuestion();
