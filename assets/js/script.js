// Fading effect for image slider on lading page

const images = document.querySelectorAll("#image-slider img");
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.classList.add("fade-in");
        } else {
            image.classList.remove("fade-in");
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

setInterval(nextImage, 5000); 