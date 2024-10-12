// static/js/settings.js

// Handle preferences form submission
document.getElementById('preferences-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Preferences saved successfully!');
    // You can add AJAX here to send the preferences to the server
});

// Handle change password form submission
document.getElementById('change-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        alert('Password changed successfully!');
        // You can add AJAX here to send the password change request to the server
    }
});

// Handle account deletion
document.getElementById('delete-account-button').addEventListener('click', function() {
    const confirmation = confirm('Are you sure you want to delete your account? This action is irreversible.');
    if (confirmation) {
        alert('Account deletion request sent.');
        // You can add AJAX here to handle account deletion request
    }
});
