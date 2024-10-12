// static/js/home.js

let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

// Function to change the image
function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
    images[currentIndex].classList.add('active');
}

// Automatically change images every 5 seconds
setInterval(changeImage, 5000);

// Initialize the first image as active
images[currentIndex].classList.add('active');
