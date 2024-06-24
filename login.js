function checkLoyaltyPoints() {
  const mobileNumber = document.getElementById('mobileNumber').value;
  if (mobileNumber === '173527250') {
    window.location.href = '/mulah_registration.html';
  } else {
    alert("Invalid mobile number. Please try again.");
  }
}