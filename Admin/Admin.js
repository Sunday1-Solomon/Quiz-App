// Get questions from localStorage  
let questions = JSON.parse(localStorage.getItem('questions')) || [];
const clearBtn = document.getElementById('clearBtn');
// Clear questions
clearBtn.addEventListener('click', () => {
  localStorage.removeItem('questions');
  questions = [];
  displayQuestions();
});

// Remove a question by index
function removeQuestion(index) {
  if (index >= 0 && index < questions.length) {
    questions.splice(index, 1);
    localStorage.setItem('questions', JSON.stringify(questions));
    displayQuestions();
  } else {
    console.error('Invalid question index');
  }
}

// Shuffle button
const shuffleBtn = document.getElementById('shuffleBtn');
shuffleBtn.addEventListener('click', () => {
  shuffleQuestions();
});

function shuffleQuestions() {
  // Fisher-Yates shuffle
  for (let i = questions.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  localStorage.setItem('questions', JSON.stringify(questions));
  displayQuestions();
}

// Handle form submit
function handleForm(e) {
  e.preventDefault();
  // Get form data
  const question = {
    text: document.getElementById('question').value,
    answers: [
      document.getElementById('answer1').value,
      document.getElementById('answer2').value,
      document.getElementById('answer3').value
    ],
    correctIndex: document.getElementById('correctAnswer').value
  };
  // Save question
  questions.push(question);
  localStorage.setItem('questions', JSON.stringify(questions));
  // Reset form
  document.getElementById('questionForm').reset();
  displayQuestions();
}

// Display questions  
function displayQuestions() {
  let list = '';
  questions = JSON.parse(localStorage.getItem('questions')) || [];
  questions.forEach((q, i) => {
    list += `<h3>${i + 1}. ${q.text} <button onclick="removeQuestion(${i})">Remove</button></h3>`;
  });
  document.getElementById('questionList').innerHTML = list;
}

// Listen for form submit
document.getElementById('questionForm').addEventListener('submit', handleForm);

// Show existing questions on load
displayQuestions();