// Initialize donation tracking
let currentAmount = 0;
const goalAmount = 5000; // Set the donation goal

// Update the progress bar
function updateProgressBar() {
    const progressFill = document.getElementById("progress-fill");
    const currentAmountDisplay = document.getElementById("currentAmount");
    const goalDisplay = document.getElementById("goal");

    currentAmountDisplay.textContent = currentAmount.toFixed(2);
    const progressPercentage = (currentAmount / goalAmount) * 100;
    progressFill.style.width = `${progressPercentage}%`;
}

// Handle form submission
document.getElementById("donateForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    const donationAmount = parseFloat(document.getElementById("donationAmount").value);
    
    if (donationAmount > 0) {
        currentAmount += donationAmount; // Update current total
        updateProgressBar(); // Update the progress bar
        alert(`Thank you for your donation of $${donationAmount}!`);
        document.getElementById("donateForm").reset(); // Reset the form
    } else {
        alert("Please enter a valid donation amount.");
    }
});

// Initial call to set progress bar to 0% at load
updateProgressBar();
