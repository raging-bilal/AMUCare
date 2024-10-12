// static/js/manage-aid.js
document.querySelectorAll(".assign-btn").forEach(button => {
    button.addEventListener("click", function() {
        const requestId = this.dataset.id;
        const selectedResource = document.getElementById(`resources-${requestId}`).value;

        // Simulate updating the request (normally you'd call an API)
        alert(`Assigned ${selectedResource} to Request ID: ${requestId}`);

        // Update the request status (you could also update the status dynamically from backend)
        const statusElement = this.closest("tr").querySelector(".status");
        statusElement.textContent = "In Progress";
        statusElement.classList.remove("pending");
        statusElement.classList.add("in-progress");

        // Update the logs (again, this would typically be dynamic from backend)
        const logEntry = document.createElement("li");
        logEntry.textContent = `#${requestId} - Resources Assigned: ${selectedResource}`;
        document.getElementById("logs-list").appendChild(logEntry);
    });
});
