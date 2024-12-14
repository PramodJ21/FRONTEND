function validateLogin() {
    // Clear previous errors
    document.getElementById("loginError").textContent = "";

    // Get input values
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        document.getElementById("loginError").textContent = "Username and Password cannot be empty.";
        return;
    }

    // Assuming you will verify against pre-saved credentials, replace this with actual logic
    if (username === "testuser" && password === "Test@123") {
        alert("Login Successful!");
        window.location.href = "index.html"; // Redirect to index page
    } else {
        document.getElementById("loginError").textContent = "Invalid Username or Password.";
    }
}
