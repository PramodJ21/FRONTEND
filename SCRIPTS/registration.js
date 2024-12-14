function validateForm() {
    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("contactError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    // Get input values
    var fullname = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();
    var cnumber = document.getElementById("cnumber").value.trim();
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    var conpass = document.getElementById("conpass").value.trim();

    var nameRegex = /^[A-Za-z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var contactRegex = /^\d{10}$/;
    var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;

    var isValid = true;

    // Validate full name
    if (!nameRegex.test(fullname)) {
        document.getElementById("nameError").textContent = "Full Name should only contain letters.";
        isValid = false;
    }

    // Validate email
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate contact number
    if (!contactRegex.test(cnumber)) {
        document.getElementById("contactError").textContent = "Contact Number should be exactly 10 digits.";
        isValid = false;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long, contain one uppercase letter, one special character, and one number.";
        isValid = false;
    }

    // Confirm password match
    if (password !== conpass) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    // If the form is valid, show success message and redirect
    if (isValid) {
        alert("Registration Successful!");
        window.location.href = "login.html"; // Redirect to login page
    }
}
