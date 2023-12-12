const questions = [
  {
    question: "The term ‘Computer’ is derived from?",
    options: ["French", "Latin", "Greek", "Roman"],
    correctAnswer: 1,
  },
  {
    question: "Who is the father of Computer?",
    options: ["Tim Berners Lee", "Charles Babbage", "Bjarne Stroustrap", "Dennis Ritchie"],
    correctAnswer: 1,
  },
  {
    question: "What is a Light Pen?",
    options: ["Input Device", "Output Device", "Optical Input Device", "Optical Output Device"],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is not an Anti-Virus software?",
    options: ["Nvidia", "McAfee", "MalwareBytes", "Oracle"],
    correctAnswer: 3,
  },
  {
    question: "Who invented the high level language “C”?",
    options: ["Tim Berners Lee", "Charles Babbage", "Bjarne Stroustrap", "Dennis Ritchie"],
    correctAnswer: 3,
  },
  {
    question: "Which one of the following is NOT a programming language?",
    options: ["HTML", "Java", "JavaScript", "Python"],
    correctAnswer: 0,
  },
  {
    question: "RAM is also called as?",
    options: ["Primary Memory", "Random Access Memory", "Secondary Memory", "Both 1 & 2"],
    correctAnswer: 3,
  },
  {
    question: "DOS is?",
    options: ["Operating System", "Mobile App", "Browser", "None of the above"],
    correctAnswer: 0,
  },
  {
    question: "C is a/an?",
    options: ["Structured Language", "Extensible", "Modular", "All of these"],
    correctAnswer: 3,
  },
  {
    question: "Which of the Following is not a Network Type?",
    options: ["WAN", "MAN", "FAN", "PAN"],
    correctAnswer: 2,
  },
];

let currentQuestion = 0;
let score = 0;

const questionCounter = document.getElementById("question-counter");
const scoreCounter = document.getElementById("score");
const questionText = document.getElementById("question-text");
const options = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-button");
const scoreboard = document.querySelector(".scoreboard");
const finalScore = document.getElementById("final-score");
const restartButton = document.getElementById("restart-button");

const startQuizButton = document.getElementById("start-quiz-button");
const quizContainer = document.querySelector(".quiz-container");

startQuizButton.addEventListener("click", () => {

  startQuizButton.parentElement.style.display = "none";
  quizContainer.style.display = "block";
  loadQuestion();
});

nextButton.disabled = true;

let optionClicked = false;

function loadQuestion() {
  if (currentQuestion < questions.length) {
    questionCounter.textContent = `Question ${currentQuestion + 1}/${
      questions.length
    }`;
    questionText.textContent = questions[currentQuestion].question;

    options.forEach((option, index) => {
      option.textContent = questions[currentQuestion].options[index];
      option.style.backgroundColor = "white";
      option.style.pointerEvents = "auto";
      option.onclick = function () {
        handleOptionClick(index);
      };
    });
    nextButton.disabled = !optionClicked;
  } else {
    showScoreboard();
  }
}

function handleOptionClick(selectedOptionIndex) {
  const correctAnswerIndex = questions[currentQuestion].correctAnswer;

  options.forEach((option) => {
    option.style.pointerEvents = "none";
    option.onclick = null;
  });

  if (selectedOptionIndex === correctAnswerIndex) {
    options[selectedOptionIndex].style.backgroundColor = "#9affac";
    score++;
    scoreCounter.textContent = `Score: ${score}`;
  } else {
    options[selectedOptionIndex].style.backgroundColor = "#ffaaaa";
    options[correctAnswerIndex].style.backgroundColor = "#9affac";
  }

  optionClicked = true;
  nextButton.disabled = false;
}

function showScoreboard() {
  scoreboard.style.display = "block";
  finalScore.textContent = score;
}

nextButton.addEventListener("click", () => {
  currentQuestion++;
  optionClicked = false;
  nextButton.disabled = true;
  loadQuestion();
});

restartButton.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  scoreboard.style.display = "none";
  loadQuestion();
  scoreCounter.textContent = "Score: 0";
  optionClicked = false;
});

loadQuestion();