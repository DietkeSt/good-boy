// Effect for image slider on lading page

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