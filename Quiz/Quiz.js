// Start quiz button 
const startBtn = document.getElementById('start');

// Global time limit
let timeLimit = 120; 

// Event listener to start quiz
startBtn.addEventListener('click', startQuiz);

function startQuiz() {
  displayQuiz();
  startTimer();
}

// Get questions from localStorage
const questions = JSON.parse(localStorage.getItem('questions'));

let currentQuestionIndex = 0;
let score = 0;

// Display question
function displayQuiz() {

  const currentQuestion = questions[currentQuestionIndex];

  document.getElementById('question').textContent = currentQuestion.text;

  currentQuestion.answers.forEach((answer, index) => {

    const button = document.createElement('button');
    button.textContent = answer;
    button.dataset.index = index;

    button.onclick = selectOption;

    document.getElementById('options').appendChild(button);

  });

}

// Next question
function selectOption() {

  const selectedIndex = Array.from(document.getElementById('options').children).indexOf(this);

  const currentQuestion = questions[currentQuestionIndex];

  if(selectedIndex === currentQuestion.correctIndex) {
    score++;
  }

  currentQuestionIndex++;

  // Clear previous question
  document.getElementById('question').textContent = '';
  document.getElementById('options').innerHTML = '';

  if(currentQuestionIndex < questions.length) {
    displayQuiz();
    startTimer();
  } else {
    showResults();
  }

  startBtn.style.display = 'none';

}

// Timer 
let timer;

function startTimer() {

  let timeLeft = timeLimit;

  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  document.getElementById('timer').textContent = `${minutes}:${seconds}`;

  timer = setInterval(() => {

    timeLeft--;

    minutes = Math.floor(timeLeft / 60);
    seconds = timeLeft % 60;

    document.getElementById('timer').textContent = `${minutes}:${seconds}`;

    if(timeLeft === 0) {
      currentQuestionIndex++;
      displayQuiz();
      startTimer(); 
    }

  }, 1000);

}

// Show results
function showResults() {

  const scorePercent = (score/questions.length) * 100;

  const result = document.createElement('div');
  result.textContent = `Your score is ${scorePercent}%`;
  document.getElementById('options').appendChild(result);

  document.getElementById('timer').style.display = 'none';

}

// Start quiz
startBtn.addEventListener('click', startQuiz);
