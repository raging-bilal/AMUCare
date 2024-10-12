// script.js
document.addEventListener("DOMContentLoaded", function() {
    // This is where you can add JavaScript functionality later.
    console.log("Welcome to AMU Care Foundation!");
});



// // -------------------------------------------------------------------

// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const roleSelect = document.getElementById("role");
    const skillsContainer = document.getElementById("skillsContainer");
    const formMessage = document.getElementById("formMessage");

    // Show the skills field only if the user selects "Volunteer"
    roleSelect.addEventListener("change", function() {
        if (roleSelect.value === "volunteer") {
            skillsContainer.classList.remove("hidden");
        } else {
            skillsContainer.classList.add("hidden");
        }
    });

    // Handle form submission
    form.addEventListener("submit", function(e) {
        e.preventDefault();  // Prevent the form from submitting

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;

        // Basic validation for now (you can extend this)
        if (name === "" || email === "" || password === "") {
            formMessage.textContent = "All fields are required!";
            return;
        }

        formMessage.style.color = "green";
        formMessage.textContent = "Registration successful!";

        // Simulate form submission (add your backend logic here later)
        console.log({
            name,
            email,
            password,
            role,
            skills: role === "volunteer" ? document.getElementById("skills").value : "N/A"
        });

        form.reset();  // Reset form after successful "submission"
    });
});



// --------------------------------------------------------------------------------
// JS for login .html for valiodation

// JavaScript for handling form validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill in both fields.");
    } else {
        alert("Form submitted successfully!");
        // Further logic for backend integration can go here
    }
});
