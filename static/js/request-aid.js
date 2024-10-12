// static/js/request-aid.js
document.getElementById("aid-request-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const type = document.getElementById("type").value;
    const description = document.getElementById("description").value;
    const urgency = document.getElementById("urgency").value;
    const location = document.getElementById("location").value;

    // Display a simple notification (you can enhance this as needed)
    alert(`Aid Request Submitted!\nName: ${name}\nEmail: ${email}\nType: ${type}\nUrgency: ${urgency}`);

    // Here, you would typically send the data to the backend API
});
