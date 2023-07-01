// Function for image slider and fade effect on lading page

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

// Function to show alert box when clicking on the instructions on the landing page
function showAlertBox() {
    var instructions = "This is how the quiz works: 1. Please enter your name. 2. Click on the 'Start Quiz' button. 3. Guess the correct dog breed by clicking on the option with the correct breed name displayed. 4. Click the 'Next' button. 5. Repeat until the Quiz is finished and you see your final score!";

    // Display the instructions in an alert box
    alert(instructions);
}

// Add a click event listener to the instructions element
var instructionsElement = document.querySelector(".instructions-landing");
instructionsElement.addEventListener("click", showAlertBox);