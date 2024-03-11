// Getting The Needed Elements From The DOM
const registerForm = document.getElementById('registrationForm');
const confirmMsg = document.getElementById('confirmationMessage');
const clearBtn = document.getElementById("clearBtn");

function deleteUsers()  {
  localStorage.removeItem("users");
};

// Users' array
let users = [];

// Checking if users already exists in localStorage
if(localStorage.getItem('users')) {
  users = JSON.parse(localStorage.getItem('users')); 
}

// Registration deadline
const deadline = new Date(2024, 2, 10);
document.getElementById('deadline').textContent = deadline.toDateString();

// Registration form handler
registerForm.addEventListener('submit', e => {

  e.preventDefault();

  // Validate input
  if(!validateInput()) {
    return;
  }
  
  // Create user object
  const user = getUserFromForm();

  // Save user to array
  users.push(user);

  // Save users array to localStorage
  localStorage.setItem('users', JSON.stringify(users));

  // Show confirmation
  showConfirmation(user.school);

});

// Validate input
function validateInput() {
  const school = document.getElementById('schoolName');
  const candidate = document.getElementById('candidateName');
  const gender = document.getElementById('candidateGender');
  const age = document.getElementById('candidateAge');

  if(!school.value || !candidate.value || !gender.value || !age.value) {
    alert('Please fill all fields');
    return false;
  }

  return true;
}

// Get user object from form data
function getUserFromForm() {
  const schoolName = document.getElementById('schoolName').value;
  const candidateName = document.getElementById('candidateName').value;
  const candidateGender = document.getElementById('candidateGender').value;
  const candidateAge = document.getElementById('candidateAge').value;

  return {
    school: schoolName,
    candidate: candidateName, 
    gender: candidateGender,
    age: candidateAge
  }
}

// Show registration confirmation 
function showConfirmation(schoolName) {
  confirmMsg.textContent = `${schoolName} successfully registered!`;
  confirmMsg.style.display = 'block';
}
