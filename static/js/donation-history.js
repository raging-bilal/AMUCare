// static/js/donation-history.js

// Example functionality for downloading receipts
const downloadButtons = document.querySelectorAll('.cta-button');

downloadButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Downloading receipt...');
        // Add actual download functionality here (if integrated with server or storage)
    });
});
