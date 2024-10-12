// static/js/volunteer-tasks.js

// Event listener for "Mark as Complete" buttons
const updateStatusButtons = document.querySelectorAll('.update-status');

updateStatusButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        const taskId = event.target.getAttribute('data-task-id');
        alert(`Task ${taskId} marked as complete!`);
        // Here you can add an AJAX call to update the task status in the database
    });
});

// Task assignment form submission
document.getElementById('assign-task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Task assigned successfully!');
    // Here you can add AJAX logic to send the new task data to the server
});
