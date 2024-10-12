// dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    // Simulate getting user role - change this based on actual user role
    const userRole = 'donor'; // Example roles: 'volunteer', 'donor', 'admin'

    // Get dashboard sections
    const volunteerDashboard = document.getElementById('volunteer-dashboard');
    const donorDashboard = document.getElementById('donor-dashboard');
    const adminDashboard = document.getElementById('admin-dashboard');

    // Hide all sections initially
    volunteerDashboard.style.display = 'none';
    donorDashboard.style.display = 'none';
    adminDashboard.style.display = 'none';

    // Show appropriate dashboard section based on user role
    if (userRole === 'volunteer') {
        volunteerDashboard.style.display = 'block';
        loadVolunteerData();
    } else if (userRole === 'donor') {
        donorDashboard.style.display = 'block';
        loadDonorData();
    } else if (userRole === 'admin') {
        adminDashboard.style.display = 'block';
        loadAdminData();
    }

    // Load Volunteer-specific data
    function loadVolunteerData() {
        // Example: dynamically fill event list
        const eventsList = document.getElementById('volunteer-events-list');
        const events = ['Community Clean-Up', 'Food Distribution', 'Tree Planting'];
        events.forEach(event => {
            const li = document.createElement('li');
            li.innerHTML = `${event}: <a href="#">Sign up</a>`;
            eventsList.appendChild(li);
        });

        // Create a volunteer hours chart using Chart.js
        const ctx = document.getElementById('volunteer-hours-chart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Volunteer Hours',
                    data: [5, 10, 8, 12],
                    backgroundColor: '#2a9d8f',
                    borderColor: '#264653',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Update the progress bar for volunteer tasks
        const progressBar = document.querySelector('#volunteer-tasks-progress .progress');
        progressBar.style.width = '75%'; // Example: update to 75% completion
        progressBar.textContent = '75%';
    }

    // Load Donor-specific data
    function loadDonorData() {
        // Example: dynamically fill donations list
        const donationsList = document.getElementById('donor-donations-list');
        const donations = ['Donation 1 - $100', 'Donation 2 - $50', 'Donation 3 - $200'];
        donations.forEach(donation => {
            const li = document.createElement('li');
            li.textContent = donation;
            donationsList.appendChild(li);
        });

        // Create a donation impact chart using Chart.js
        const ctx = document.getElementById('donation-impact-chart').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Education', 'Health', 'Food', 'Shelter'],
                datasets: [{
                    label: 'Donation Impact',
                    data: [30, 25, 20, 25], // Example distribution of donations
                    backgroundColor: ['#e9c46a', '#f4a261', '#e76f51', '#264653']
                }]
            },
            options: {
                responsive: true
            }
        });

        // Update the progress bar for donation fund goals
        const progressBar = document.querySelector('#donation-fund-progress .progress');
        progressBar.style.width = '60%'; // Example: 60% of fund goal achieved
        progressBar.textContent = '60%';
    }

    // Load Admin-specific data
    function loadAdminData() {
        // Example: dynamically fill volunteer list
        const volunteersList = document.getElementById('admin-volunteers-list');
        const volunteers = ['Volunteer 1', 'Volunteer 2', 'Volunteer 3'];
        volunteers.forEach(volunteer => {
            const li = document.createElement('li');
            li.textContent = volunteer;
            volunteersList.appendChild(li);
        });

        // Create a donations chart using Chart.js
        const ctx = document.getElementById('admin-donations-chart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April'],
                datasets: [{
                    label: 'Total Donations',
                    data: [1000, 1200, 1500, 2000], // Example donation amounts
                    borderColor: '#e76f51',
                    backgroundColor: '#f4a261',
                    borderWidth: 2,
                    fill: true
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
