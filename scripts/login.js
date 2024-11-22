// JavaScript code to handle login and signup functionality

// Function to handle login
function login(username, password) {
    // Simulate backend authentication (replace with actual backend call)
    if (username === "testuser" && password === "password123") {
        console.log("Login successful");
        // Redirect to a different page or handle successful login here
        window.location.href = "dashboard.html";
    } else {
        console.error("Invalid username or password");
        alert("Invalid username or password");
    }
}

// Function to handle sign up
function signup(username, password, confirmPassword) {
    // Validate input fields
    if (password !== confirmPassword) {
        console.error("Passwords do not match");
        alert("Passwords do not match");
        return;
    }

    // Simulate storing user data (replace with actual backend call)
    console.log("Signup successful for user:", username);
    alert("Signup successful! You can now log in.");
    // Redirect to login page after successful signup
    window.location.href = "login.html";
}

// Example usage of the functions (for demonstration purpose)
document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    login(username, password);
});

document.getElementById('signup-btn').addEventListener('click', () => {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    signup(username, password, confirmPassword);
});
