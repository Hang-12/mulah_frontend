document.addEventListener('DOMContentLoaded', function() {
  const phoneNumber = '60173527250';
  const userName = localStorage.getItem('user_name');
  const birthday_day = localStorage.getItem('birthday_day');
  const birthday_month = localStorage.getItem('birthday_month');
  const birthday_year = localStorage.getItem('birthday_year');
  const birthday_date = birthday_year + "-" + birthday_month + "-" + birthday_day;
  const userEmail = localStorage.getItem('user_email');
  
  document.getElementById('phoneNumber').innerText = phoneNumber;
  document.getElementById('user_name').innerText = userName;
  document.getElementById('birthday_date').innerText = birthday_date;
  document.getElementById('user_email').innerText = userEmail;
});