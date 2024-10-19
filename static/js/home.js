let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;
let intervalId;

// Function to change the image
function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
    images[currentIndex].classList.add('active');
}

// Automatically change images every 5 seconds
function startCarousel() {
    intervalId = setInterval(changeImage, 5000);
}

// Stop changing images
function stopCarousel() {
    clearInterval(intervalId);
}

// Initialize the first image as active
images[currentIndex].classList.add('active');

// Start the carousel
startCarousel();

// Pause carousel on hover
document.querySelector('.carousel').addEventListener('mouseenter', stopCarousel);

// Resume carousel when hover ends
document.querySelector('.carousel').addEventListener('mouseleave', startCarousel);

// Add manual controls for Next and Previous buttons
document.getElementById('next').addEventListener('click', () => {
    stopCarousel(); // Stop auto-sliding when manually changing
    changeImage();
    startCarousel(); // Restart the auto-slide
});

document.getElementById('prev').addEventListener('click', () => {
    stopCarousel(); // Stop auto-sliding when manually changing
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop back to the last image if needed
    images[currentIndex].classList.add('active');
    startCarousel(); // Restart the auto-slide
});





