// Smooth scrolling for page links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Welcome message
console.log("Welcome to Green Camping!");

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
const showPassword = document.getElementById("showPassword");
const passwordInput = document.getElementById("password");

if (showPassword && passwordInput) {
    showPassword.addEventListener("change", function() {
        passwordInput.type = this.checked ? "text" : "password";
    });
}

// Registration form validation

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match! Please try again.");
            return;
        }

        alert("Registration form submitted successfully!");

        registerForm.reset();
    });
}

// Login form validation


const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email && password) {
            alert("Successfully logged in! Welcome to Green Camping.");

            window.location.href = "index.html";
        }
    });
}

