document.getElementById('generateOTP').addEventListener('click', function() {
    const mobileNumber = document.getElementById('mobileNumber').value;
    // Implement OTP generation logic and send OTP to the user's mobile number
    // For simplicity, we'll assume OTP is generated and sent.
    document.getElementById('otpSection').style.display = 'block';
  });
  
  document.getElementById('verifyOTP').addEventListener('click', function() {
    const enteredOTP = document.getElementById('otp').value;
    // Implement OTP verification logic here
    // For simplicity, we'll assume OTP is verified successfully.
    document.getElementById('ticketDetails').style.display = 'block';
    // Display ticket details after successful verification
  });