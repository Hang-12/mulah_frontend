document.getElementById('registration_form').addEventListener('submit', function(event) {
  event.preventDefault();
  const userName = document.getElementById('user_name').value;
  const userEmail = document.getElementById('user_email').value;
  const birthdayDay = document.getElementById('birthday_day').value;
  const birthdayMonth = document.getElementById('birthday_month').value;
  const birthdayYear = document.getElementById('birthday_year').value;
  const noEmail = document.getElementById('no_email').checked;

  if (userName && (userEmail || noEmail) && birthdayDay && birthdayMonth && birthdayYear) {
    localStorage.setItem('user_name', userName);
    localStorage.setItem('birthday_day', birthdayDay);
    localStorage.setItem('birthday_month', birthdayMonth);
    localStorage.setItem('birthday_year', birthdayYear);
    localStorage.setItem('user_email', userEmail);

    window.location.href = '/mulah_summary.html';
  } else {
    alert("Please fill in all required fields.");
  }
}); // No clear local storage

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', function() {
    const errorId = this.id + '_error';
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
      errorElement.style.display = 'none';
    }
  });
});

document.getElementById('no_email').addEventListener('change', function() {
  const emailInput = document.getElementById('user_email');
  if (this.checked) {
    emailInput.disabled = true;
  } else {
    emailInput.disabled = false;
  }
});