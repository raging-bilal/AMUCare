// static/js/profile.js
document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    // Display a simple notification (you can enhance this as needed)
    alert(`Profile Updated!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);

    // Here, you would typically send the data to the backend API for updating
});
