// static/js/admin.js

// Function to show user management section
function manageUsers() {
    hideAllPanels();
    document.getElementById('user-management').style.display = 'block';
}

// Function to show opportunity management section
function manageOpportunities() {
    hideAllPanels();
    document.getElementById('opportunity-management').style.display = 'block';
}

// Function to show aid management section
function manageAid() {
    hideAllPanels();
    document.getElementById('aid-management').style.display = 'block';
}

// Function to show donation management section
function manageDonations() {
    hideAllPanels();
    document.getElementById('donation-management').style.display = 'block';
}

// Function to hide all admin panels
function hideAllPanels() {
    const panels = document.querySelectorAll('.admin-panel');
    panels.forEach(panel => {
        panel.style.display = 'none';
    });
}
