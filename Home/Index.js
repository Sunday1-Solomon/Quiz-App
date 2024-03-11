// Get reference to take quiz link
const takeQuizLink = document.getElementById('takeQuizLink');

// Add click handler
takeQuizLink.addEventListener('click', () => {

    const isRegistered = false;

  // Check if user is registered
  if(!isRegistered) {

    // Show alert
    alert('Please, kindly register to take the quiz');
    
    // On click OK, redirect to registration
    alertPromise.then(() => {
      window.location.href = 'file:///C:/Users/HP/OneDrive/Documents/JS%20RETAKE/JS_PROJECT/Reg/Reg.html'; 
    });

  } else {

    // If logged in, redirect to quiz
    window.location.href = 'file:///C:/Users/HP/OneDrive/Documents/JS%20RETAKE/JS_PROJECT/Quiz/Quiz.html';
  }

});
