// Function to show the landing page
function showLandingPage() {
    document.getElementById("landing-page").style.display = "block";
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "none";
}

// Function for image slider and fade effect on landing page

window.addEventListener("DOMContentLoaded", function (e) {
    var stage = document.getElementById("image-slider");
    var images = stage.getElementsByTagName("a");
    var currentImageIndex = 0;
    var fadeDuration = 1000; // 1 second for fading transition
    var slideInterval = 4000; // 4 seconds for slide interval

    function fadeToNextImage() {
        var currentImage = images[currentImageIndex];
        var nextImageIndex = (currentImageIndex + 1) % images.length;
        var nextImage = images[nextImageIndex];

        currentImage.classList.remove("active");
        nextImage.classList.add("active");

        currentImageIndex = nextImageIndex;

        setTimeout(fadeToNextImage, slideInterval);
    }

    images[currentImageIndex].classList.add("active");
    setTimeout(fadeToNextImage, slideInterval);
}, false);

// Modal functons for the landing page
// Function to open the modal
function openModal() {
    var modal = document.getElementById("instructions-modal");
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("instructions-modal");
    modal.style.display = "none";
}

// Event listeners to open and close the modal
var instructionsElement = document.querySelector(".instructions-landing");
instructionsElement.addEventListener("click", openModal);

var closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", closeModal);

// Event listener for zoom effect

document.addEventListener('DOMContentLoaded', function () {
    var instructionsText = document.querySelector('.instructions-landing p');
    var startQuizButton = document.querySelector('.start-quiz-btn');

    function applyZoomEffect(element) {
        element.addEventListener('mouseover', function () {
            element.classList.add('zoom-effect');
        });

        element.addEventListener('mouseout', function () {
            element.classList.remove('zoom-effect');
        });
    }

    applyZoomEffect(instructionsText);
    applyZoomEffect(startQuizButton);
});