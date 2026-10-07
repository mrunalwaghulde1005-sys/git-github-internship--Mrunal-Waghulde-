document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");

    // Clear previous messages
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Email validation
    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } 
    else if (!email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } 
    else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    // Successful login
    if (isValid) {
        successMessage.textContent = "Login successful!";
        document.getElementById("loginForm").reset();
    }

});