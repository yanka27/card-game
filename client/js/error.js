document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to handle errors first

    // Get input values
    const email = document.getElementById("email") ? document.getElementById("email").value.trim() : '';
    const password = document.getElementById("password") ? document.getElementById("password").value.trim() : '';
    const confirmPassword = document.getElementById("confirmPassword") ? document.getElementById("confirmPassword").value.trim() : '';

    // Clear any previous error messages
    clearErrors();

    // Email validation
    if (!validateEmail(email)) {
        showError("emailError", "Invalid e-mail address");
    }

    // Password validation
    if (password.length < 6) {
        showError("passwordError", "Password must be at least 6 characters long.");
    }

    // Password confirmation validation
    if (password && confirmPassword && password !== confirmPassword) {
        showError("confirmPasswordError", "Passwords do not match.");
    }

    // If all validation passes, you can submit the form here
    if (validateEmail(email) && password.length >= 6 && password === confirmPassword) {
        alert("Form submitted successfully!");
        // Uncomment the next line if you want to actually submit the form
        // document.getElementById("loginForm").submit();
    }
});

// Function to validate email using a regular expression
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to show error message
function showError(id, message) {
    const errorElement = document.getElementById(id);
    if (errorElement) {
        errorElement.style.display = "block";
        errorElement.textContent = message;
    }
}

// Function to clear all errors
function clearErrors() {
    const errorElements = document.querySelectorAll(".error_message");
    errorElements.forEach(function(element) {
        element.style.display = "none";
        element.textContent = "";
    });
}