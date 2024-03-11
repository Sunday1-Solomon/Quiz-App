
  // Select elements  
const loginForm = document.getElementById('loginForm');
const schoolName = document.getElementById('schoolName');
const candidateName = document.getElementById('candidateName');

// Login form handler
loginForm.addEventListener('submit', e => {

  // Prevent default
  e.preventDefault();

  // Validate input fields
  const validateInput = () => {
    if (!schoolName.value || !candidateName.value) {
      alert('Please fill in all fields');
      return false;
    }
    return true;
  }

  // Validate input
  if (!validateInput()) {
    return;
  }

  // Get users from localStorage
  let registeredUsers = [];

  if (localStorage.getItem('users')) {
    registeredUsers = JSON.parse(localStorage.getItem('users'));
  }

  // Find match
  const user = registeredUsers.find(u => u.school === schoolName.value &&
    u.candidate === candidateName.value);

  if (!user) {
    alert('Invalid credentials');
    return;
  }

  // Redirect to quiz page 
  location.href = "file:///C:/Users/HP/OneDrive/Documents/JS%20RETAKE/JS_PROJECT/Quiz/Quiz.html";

  // Clear form fields
  schoolName.value = '';
  candidateName.value = '';

});
