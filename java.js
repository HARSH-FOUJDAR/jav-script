const questions = [
  {
    question: "Which is the largest animal in the world?",
    answer: [
      { text: "Snake", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Cow", correct: false },
    ]
  },
  {
    question: "How many types of functions in JavaScript?",
    answer: [
      { text: "3", correct: true },
      { text: "4", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: false },
    ]
  },
  {
    question: "What is JavaScript extension?",
    answer: [
      { text: ".js", correct: true },
      { text: ".java", correct: false },
      { text: ".script", correct: false },
      { text: "html", correct: false },
    ]
  },
  {
    question: "How many data types in JavaScript?",
    answer: [
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "7", correct: true },   // ✅ correct
      { text: "5", correct: false },
    ]
  }
];

const questionelement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionelement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    // ✅ Click Event
    button.addEventListener("click", () => {
      selectAnswer(button, answer.correct);
    });
  });

  // Prev button hide on first question
  prevButton.style.display = currentQuestionIndex === 0 ? "none" : "block";
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(selectedButton, correct) {
  const allButtons = answerButtons.querySelectorAll("button");

  // ✅ Disable all buttons after click
  allButtons.forEach(btn => btn.disabled = true);

  if (correct) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("wrong");
  }

  // ✅ Show the correct answer (highlight green)
  allButtons.forEach(btn => {
    const answerObj = questions[currentQuestionIndex].answer.find(a => a.text === btn.innerText);
    if (answerObj && answerObj.correct) {
      btn.classList.add("correct");
    }
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionelement.innerHTML = `🎉 You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  prevButton.style.display = "none";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function handlePrevButton() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

prevButton.addEventListener("click", handlePrevButton);

startQuiz();
