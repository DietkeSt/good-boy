// Fading effect for image slider on lading page

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

        currentImage.style.opacity = 1; // Reset opacity for current image

        var fadeOutInterval = setInterval(function () {
            currentImage.style.opacity -= 0.01; // Reduce opacity gradually for fade out
            if (currentImage.style.opacity <= 0) {
                clearInterval(fadeOutInterval);
                currentImageIndex = nextImageIndex;
                nextImage.style.opacity = 0; // Reset opacity for next image
                nextImage.style.display = "block";
                fadeInInterval = setInterval(function () {
                    nextImage.style.opacity = parseFloat(nextImage.style.opacity) + 0.01; // Increase opacity gradually for fade in
                    if (nextImage.style.opacity >= 1) {
                        clearInterval(fadeInInterval);
                        currentImage.style.display = "none";
                        setTimeout(fadeToNextImage, slideInterval); // Call the next slide after interval
                    }
                }, fadeDuration / 100);
            }
        }, fadeDuration / 100);
    }

    setTimeout(fadeToNextImage, slideInterval); // Start the slideshow after interval
}, false);