document.addEventListener("DOMContentLoaded", function () {
    const splashScreen = document.getElementById("splash-screen");
    const loginPage = document.getElementById("login-page");
    const signupPage = document.getElementById("signup-page");

    // Show the login page after the splash screen disappears
    setTimeout(function () {
        splashScreen.style.display = "none";
        loginPage.style.display = "block";
    }, 2000); // Adjust the time as needed

    // Function to show the sign-up page
    window.showSignup = function () {
        loginPage.style.display = "none";
        signupPage.style.display = "block";
    };

    // Function to show the login page
    window.showLogin = function () {
        signupPage.style.display = "none";
        loginPage.style.display = "block";
    };

    // Login Form Validation
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const email = loginForm.email.value.trim();
        const password = loginForm.password.value.trim();

        // Validate Email
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate Password
        if (password === "") {
            alert("Password cannot be empty.");
            return;
        }

        // If validation passes
        alert("Login successful!");
    });

    // Signup Form Validation
    const signupForm = document.getElementById("signup-form");
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const name = signupForm.name.value.trim();
        const phone = signupForm.phone.value.trim();
        const email = signupForm.email.value.trim();
        const password = signupForm.password.value.trim();

        // Validate Name
        if (name === "") {
            alert("Name cannot be empty.");
            return;
        }

        // Validate Phone
        if (!/^\d{10}$/.test(phone)) {
            alert("Phone number must be 10 digits.");
            return;
        }

        // Validate Email
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate Password
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        // If validation passes
        alert("Signup successful!");
        window.showLogin(); // Redirect to login page after successful signup
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});

function loginuser(event){
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if(email === "hydrotrack@gmail.com" && password === "hydroteam123"){
        window.location.href="dashboard.html";
    }else{
        alert("invalid login credentials");
    }
}
