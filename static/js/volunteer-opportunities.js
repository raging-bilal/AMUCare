// Example data for opportunities
const opportunities = [
    {
        id: 1,
        title: "Help at Local Food Bank",
        description: "Assist in organizing food items and serving meals to those in need.",
        location: "Community Center",
        date: "2024-10-20",
    },
    {
        id: 2,
        title: "Tutoring for Underprivileged Kids",
        description: "Provide tutoring and mentoring to children from low-income families.",
        location: "School Library",
        date: "2024-10-25",
    },
    {
        id: 3,
        title: "Park Cleanup Day",
        description: "Join us in cleaning and beautifying our local parks.",
        location: "Central Park",
        date: "2024-10-15",
    },
];

// Function to display opportunities
function displayOpportunities() {
    const opportunitiesDiv = document.getElementById("opportunities");
    opportunitiesDiv.innerHTML = ""; // Clear existing content

    opportunities.forEach(opportunity => {
        const opportunityElement = document.createElement("div");
        opportunityElement.classList.add("opportunity-item");
        opportunityElement.innerHTML = `
            <h3>${opportunity.title}</h3>
            <p>${opportunity.description}</p>
            <p><strong>Location:</strong> ${opportunity.location}</p>
            <p><strong>Date:</strong> ${opportunity.date}</p>
            <button class="sign-up-button" onclick="signUp(${opportunity.id})">Sign Up</button>
        `;
        opportunitiesDiv.appendChild(opportunityElement);
    });
}

// Function for sign up action
function signUp(opportunityId) {
    alert(`You have signed up for opportunity ID: ${opportunityId}`);
}

// Search functionality
document.getElementById("search").addEventListener("input", function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredOpportunities = opportunities.filter(opportunity => 
        opportunity.title.toLowerCase().includes(searchTerm) || 
        opportunity.description.toLowerCase().includes(searchTerm)
    );
    displayFilteredOpportunities(filteredOpportunities);
});

// Display filtered opportunities
function displayFilteredOpportunities(filteredOpportunities) {
    const opportunitiesDiv = document.getElementById("opportunities");
    opportunitiesDiv.innerHTML = ""; // Clear existing content

    filteredOpportunities.forEach(opportunity => {
        const opportunityElement = document.createElement("div");
        opportunityElement.classList.add("opportunity-item");
        opportunityElement.innerHTML = `
            <h3>${opportunity.title}</h3>
            <p>${opportunity.description}</p>
            <p><strong>Location:</strong> ${opportunity.location}</p>
            <p><strong>Date:</strong> ${opportunity.date}</p>
            <button class="sign-up-button" onclick="signUp(${opportunity.id})">Sign Up</button>
        `;
        opportunitiesDiv.appendChild(opportunityElement);
    });
}

// Initial display of opportunities
displayOpportunities();















// -----------------------------------

// Example JavaScript to handle sign-up for volunteer opportunities
const signupButtons = document.querySelectorAll('.signup-button');

signupButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('You have successfully signed up for this opportunity!');
    });
});

