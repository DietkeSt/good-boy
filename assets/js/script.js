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

// Quiz questions and options

const quiz = [
    {
        question: "Which breed of dog is this?",
        image: "./assets/images/dog-1.png",
        options: ["French Bulldog", "Poodle", "Labrador Retriever"],
        answer: 0
    },
    {
        question: "What type of dog is this?",
        image: "./assets/images/dog-2.png",
        options: ["Alsation", "Husky", "Shiba Inu"],
        answer: 2
    },
    {
        question: "Can you identify the breed of this dog?",
        image: "./assets/images/dog-3.png",
        options: ["Alsation", "Husky", "Shiba Inu"],
        answer: 2
    },
    {
        question: "I'm curious about the breed of this dog. Any idea?",
        image: "./assets/images/dog-4.png",
        options: ["Alsation", "Husky", "Shiba Inu"],
        answer: 2
    },
    {
        question: "Do you know which dog breed this is?",
        image: "./assets/images/dog-5.png",
        options: ["Alsation", "Husky", "Shiba Inu"],
        answer: 2
    },
    {
        question: "Could you tell me the specific breed of this dog?",
        image: "./assets/images/dog-6.png",
        options: ["Alsation", "Husky", "Shiba Inu"],
        answer: 2
    },
    {
        question: "I'm wondering about the breed of this particular dog. Any thoughts?",
        image: "./assets/images/dog-7.png",
        options: ["Alsation", "Husky", "Shiba Inu"],
        answer: 2
    },
    {
        question: "Can you help me determine the breed of this adorable dog?",
        image: "./assets/images/dog-8.png",
        options: ["Alsation", "Husky", "Shiba Inu"],
        answer: 2
    },
    {
        question: "What is the breed of this lovely canine?",
        image: "./assets/images/dog-9.png",
        options: ["Alsation", "Husky", "Shiba Inu"],
        answer: 2
    },
    {
        question: "I'd love to know the breed of this dog. Any guesses?",
        image: "./assets/images/dog-10.png",
        options: ["Alsation", "Husky", "Shiba Inu"],
        answer: 2
    },
    {
        question: "Could you please enlighten me about the breed of this dog?",
        image: "./assets/images/dog-11.png",
        options: ["Alsation", "Husky", "Shiba Inu"],
        answer: 2
    },
    // More questions follow...
];

let currentQuestion = 0;
let score = 0;
let username = "";

// Start Quiz event

function startQuiz(event) {
    event.preventDefault();
    username = document.getElementById("username").value;
    if (username.trim() !== "") {
        document.getElementById("result-username").textContent = username;
        document.getElementById("result-score").textContent = "";
        document.getElementById("result-total").textContent = "";
        document.getElementById("result-image").src = "";
        document.getElementById("quiz-container").style.display = "block";
        document.getElementById("landing-page").style.display = "none";
        document.getElementById("result-container").style.display = "none";
        currentQuestion = 0;
        score = 0;
        displayQuestion();
    }
}

// Display the current question and options
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const imageElement = document.getElementById("question-image");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("next-btn");

    // Clear previous options
    optionsElement.innerHTML = "";

    // Display current question and image
    const currentQuiz = quiz[currentQuestion];
    questionElement.textContent = currentQuiz.question;
    imageElement.src = currentQuiz.image;

    // Create and display options
    currentQuiz.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.classList.add("option");
        li.setAttribute("onclick", `checkAnswer(${index})`);
        optionsElement.appendChild(li);
    });

    // Clear feedback
    feedbackElement.textContent = "";

    // Disable next button until an option is selected
    nextButton.disabled = true;
}

// Check the selected answer
function checkAnswer(selectedIndex) {
    const currentQuiz = quiz[currentQuestion];
    const correctIndex = currentQuiz.answer;
    const options = document.getElementsByClassName("option");

    // Highlight the selected option
    for (let i = 0; i < options.length; i++) {
        if (i === selectedIndex) {
            options[i].classList.add("selected");
        } else {
            options[i].classList.remove("selected");
        }
    }

    // Check if the selected answer is correct
    if (selectedIndex === correctIndex) {
        document.getElementById("feedback").textContent = "Correct!";
        score++;
    } else {
        document.getElementById("feedback").textContent = "Wrong!";
    }

    // Enable the next button
    document.getElementById("next-btn").disabled = false;
}

// Proceed to the next question
function nextQuestion() {
    currentQuestion++;

    // Check if the quiz is completed
    if (currentQuestion >= quiz.length) {
        showResult();
    } else {
        displayQuestion();
    }
}

// Show the quiz result
function showResult() {
    document.getElementById("quiz-container").classList.add("complete");
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    const totalQuestions = quiz.length;
    document.getElementById("result-username").textContent = username;
    document.getElementById("result-score").textContent = score;
    document.getElementById("result-total").textContent = totalQuestions;

    // Add your image source for the result
    document.getElementById("result-image").src = "placeholder.jpg";
}

// Retake the quiz
function retakeQuiz() {
    showLandingPage();
}

// Initialize the quiz
window.onload = function () {
    showLandingPage();
};