// Quiz questions and options
const quiz = [
    {
        question: "Which breed of dog is this?",
        image: "./assets/images/dog-1.png",
        alt: "Image of dog whose ears are being held by human hands",
        options: ["French Bulldog", "Poodle", "Labrador Retriever"],
        answer: 0,
        guessed: false
    },
    {
        question: "What type of dog is this?",
        image: "./assets/images/dog-2.png",
        alt: "Image of dog with half closed eyes wearing a yellow hat",
        options: ["Alsation", "Husky", "Shiba Inu"],
        answer: 2,
        guessed: false
    },
    {
        question: "Can you identify the breed of this dog?",
        image: "./assets/images/dog-3.png",
        alt: "Image of dog looking sideway wearing green fake fur",
        options: ["Golden Retriever", "American Staffordshire", "Dalmatian"],
        answer: 1,
        guessed: false
    },
    {
        question: "I'm curious about the breed of this dog. Any idea?",
        image: "./assets/images/dog-4.png",
        alt: "Image of small dog looking into the camera with big eyes",
        options: ["Bulldog", "Shih Tzu", "Dachshund"],
        answer: 2,
        guessed: false
    },
    {
        question: "Do you know which dog breed this is?",
        image: "./assets/images/dog-5.png",
        alt: "Image of happy dog who is getting nose rubs from a human",
        options: ["Labrador Retriever", "Siberian Husky", "Chihuahua"],
        answer: 1,
        guessed: false
    },
    {
        question: "Could you tell me the specific breed of this dog?",
        image: "./assets/images/dog-6.png",
        alt: "Image of dog chilling on the bed with a laptop in front of it",
        options: ["Corgi", "Beagle", "Rottweiler"],
        answer: 0,
        guessed: false
    },
    {
        question: "I'm wondering about the breed of this particular dog. Any thoughts?",
        image: "./assets/images/dog-7.png",
        alt: "Image of dog wearing a birthday hat looking at a tiny heart that is being held by a woman",
        options: ["Great Dane", "Shar Pei", "Australian Shepherd"],
        answer: 1,
        guessed: false
    },
    {
        question: "Can you help me determine the breed of this adorable dog?",
        image: "./assets/images/dog-8.png",
        alt: "Image of a cat that has no hair and is held by a woman",
        options: ["Border Cattie", "French Catdog", "Silly you... this is a cat!"],
        answer: 2,
        guessed: false
    },
    {
        question: "What is the breed of this lovely canine?",
        image: "./assets/images/dog-9.png",
        alt: "Image of brown dog with floppy ears looking into the camera",
        options: ["Doberman Pinscher", "Saluki", "Cavalier King Charles Spaniel"],
        answer: 1,
        guessed: false
    },
    {
        question: "I'd love to know the breed of this dog. Any guesses?",
        image: "./assets/images/dog-10.png",
        alt: "Image of a big dog that is yawning and lying down on stairs",
        options: ["German Shepherd", "Saint Bernard", "Jack Russell Terrier"],
        answer: 0,
        guessed: false
    },
    {
        question: "Could you please enlighten me about the breed of this dog?",
        image: "./assets/images/dog-11.png",
        alt: "Image of blue eyed white dog that has black spots all over its body",
        options: ["Bernese Mountain Dog", "Maltese", "Dalmatian"],
        answer: 2,
        guessed: false
    },
];

const questionElement = document.getElementById("question");
const imageElement = document.getElementById("question-image");
const imageContainer = document.getElementById("image-container");
const imageLink = document.getElementById("question-image-link");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
const questionProgressElement = document.getElementById("question-progress");
const progressBarElement = document.getElementById("progress-bar");
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const nextButtonText = document.getElementById("next-btn-text");
const options = document.getElementsByClassName("option");
const instructionsElement = document.querySelector(".instructions-landing");
const closeInstructionButton = document.querySelector("#instructions-modal .close-button");
const closeFeedbackButton = document.querySelector("#feedback-form .close-button");
const feedbackIcon = document.querySelector(".feedback-icon");
const usernameForm = document.getElementById("username-form");
const restartButton = document.getElementById("restart-btn");
const restartResultButton = document.querySelector(".result-button");

let currentQuestion = 0;
let score = 0;
let username = "";

// Shuffle function for the quiz questions
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Event listener for landing page form submission
usernameForm.addEventListener("submit", startQuiz);

// Start Quiz event
function startQuiz(event) {
    event.preventDefault();
    username = document.getElementById("username").value;
    if (username.trim() !== "") {
        document.getElementById("result-username").textContent = username;
        document.getElementById("result-image").src = "";
        document.getElementById("quiz-container").style.display = "flex";
        document.getElementById("landing-page").style.display = "none";
        document.getElementById("result-container").style.display = "none";
        currentQuestion = 0;
        score = 0;

        // Shuffle the quiz questions array
        shuffle(quiz);

        // Limit the questions to a maximum of 10
        quiz.splice(10);

        displayQuestion();
    }
}

// Display the current question and options
function displayQuestion() {

    // Clear previous options
    optionsElement.innerHTML = "";

    // Display current question and image
    const currentQuiz = quiz[currentQuestion];
    questionElement.textContent = currentQuiz.question;
    imageElement.src = currentQuiz.image;
    imageElement.alt = currentQuiz.alt;

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

    // Display current score and question progress
    scoreElement.textContent = `Correct Answers: ${score}`;
    questionProgressElement.textContent = `Question: ${currentQuestion + 1}/${quiz.length}`;

    // Display question progress as a progress bar
    const progress = ((currentQuestion + 1) / quiz.length) * 100;
    progressBarElement.style.width = progress + "%";

    // Change next button text to "See Results" on the last question
    if (currentQuestion === quiz.length - 1) {
        nextButtonText.textContent = "Results";
    } else {
        nextButtonText.textContent = "Next";
    }
}

// Event listener to enlarge image and show overlay on click
imageContainer.addEventListener("click", function () {
    imageContainer.classList.toggle("zoomed");
  
    // Change the title when the image is zoomed
        if (imageContainer.classList.contains("zoomed")) {
        imageLink.setAttribute("title", "Click to close enlarged image");
      } else {
        imageLink.setAttribute("title", "Click to enlarge image");
      }
  });

// Check the selected answer
function checkAnswer(selectedIndex) {
    const currentQuiz = quiz[currentQuestion];
    const correctIndex = currentQuiz.answer;

    // Check if the question has already been guessed
    if (currentQuiz.guessed) {
        return;
    }

    // Mark the question as guessed
    currentQuiz.guessed = true;

    // Highlight the selected option
    for (let i = 0; i < options.length; i++) {
        if (i === selectedIndex) {
            options[i].classList.add("selected");
        } else {
            options[i].classList.remove("selected");
            options[i].classList.add("inactive");
            options[i].removeAttribute("onclick");
        }
    }

    // Check if the selected answer is correct
    if (selectedIndex === correctIndex) {
        document.getElementById("feedback").textContent = "Correct!";
        options[selectedIndex].classList.add("correct-answer");
        score++;
    } else {
        document.getElementById("feedback").textContent = "Wrong!";
        options[selectedIndex].classList.add("wrong-answer");
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

// Event listener to handle the next button click event
nextButton.addEventListener("click", nextQuestion);

// Show the quiz result
function showResult() {
    document.getElementById("quiz-container").classList.add("complete");
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "flex";

    const totalQuestions = quiz.length;
    const percentage = Math.round((score / totalQuestions) * 100);

    document.getElementById("result-username").textContent = username;
    document.getElementById("result-percentage").textContent = `${percentage}%`;
    document.getElementById("result-image").src = "./assets/images/result-puppy.png ";
}

// Retake the quiz
function retakeQuiz() {
    const modal = document.getElementById("confirmation-modal");
    modal.style.display = "flex";
    function addCloseModalClickListener() {
        document.addEventListener("click", function(event) { 
            const modals = document.getElementsByClassName("modal"); 
            for (let i = 0; i < modals.length; i++) { 
                const modal = modals[i]; 
                if (event.target === modal) { 
                    modal.style.display = "none"; 
                    } 
                } 
            });
        }
    addCloseModalClickListener();
}

// Function to close the modal
function closeConfirmationModal() {
    const modal = document.getElementById("confirmation-modal");
    modal.style.display = "none";
}

// Event listener to handle the restart quiz click event
restartButton.addEventListener("click", retakeQuiz);

// Event listener to handle the restart quiz click event
restartResultButton.addEventListener("click", retakeQuiz);

// Function to restart the quiz
function restartQuiz() {
    const modal = document.getElementById("confirmation-modal");
    modal.style.display = "none";
    showLandingPage();

    // Reload the page
    location.reload();
}

// Event listener for "No" option in the modal
noButton.addEventListener("click", closeConfirmationModal);


// Event listener for "Yes" option in the modal
yesButton.addEventListener("click", restartQuiz);

// Function to show the landing page
function showLandingPage() {
    document.getElementById("landing-page").style.display = "flex";
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "none";
}

// Function to open the instructions modal
function openModal() {
    const modal = document.getElementById("instructions-modal");
    modal.style.display = "block";
    function addCloseModalClickListener() {
        document.addEventListener("click", function(event) { 
            const modals = document.getElementsByClassName("modal"); 
            for (let i = 0; i < modals.length; i++) { 
                const modal = modals[i]; 
                if (event.target === modal) { 
                    modal.style.display = "none"; 
                    } 
                } 
            });
        }
    addCloseModalClickListener();
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("instructions-modal");
    modal.style.display = "none";
}

// Event listeners to open and close the modal
instructionsElement.addEventListener("click", openModal);
closeInstructionButton.addEventListener("click", closeModal);

// Event listener for zoom effect
document.addEventListener("DOMContentLoaded", function () {
    const instructionsText = document.querySelector(".instructions-landing i");
    const startQuizButton = document.querySelector(".start-quiz-btn");
    const feedbackIcon = document.querySelector(".feedback-icon");

    function applyZoomEffect(element) {
        element.addEventListener("mouseover", function () {
            element.classList.add("zoom-effect");
        });

        element.addEventListener("mouseout", function () {
            element.classList.remove("zoom-effect");
        });
    }

    applyZoomEffect(instructionsText);
    applyZoomEffect(startQuizButton);
    applyZoomEffect(feedbackIcon);
});

// Function for image slider and fade effect on landing page
window.addEventListener("DOMContentLoaded", function () {
    const stage = document.getElementById("image-slider");
    const images = stage.getElementsByTagName("a");
    let currentImageIndex = 0;
    const slideInterval = 4000; // 4 seconds for slide interval

    function fadeToNextImage() {
        const currentImage = images[currentImageIndex];
        const nextImageIndex = (currentImageIndex + 1) % images.length;
        const nextImage = images[nextImageIndex];

        currentImage.classList.remove("active");
        nextImage.classList.add("active");

        currentImageIndex = nextImageIndex;

        setTimeout(fadeToNextImage, slideInterval);
    }

    images[currentImageIndex].classList.add("active");
    setTimeout(fadeToNextImage, slideInterval);
},
    false
);

// Function to open the feedback modal
function openFeedbackModal() {
    const feedbackModal = document.getElementById("feedback-form");
    feedbackModal.style.display = "block";
    function addCloseModalClickListener() {
        document.addEventListener("click", function(event) { 
            const modals = document.getElementsByClassName("modal"); 
            for (let i = 0; i < modals.length; i++) { 
                const modal = modals[i]; 
                if (event.target === modal) { 
                    modal.style.display = "none"; 
                    } 
                } 
            });
        }
        addCloseModalClickListener();
    }
  
// Event listener for the feedback icon
feedbackIcon.addEventListener("click", openFeedbackModal);
  
// Function to close the feedback modal
function closeFeedbackModal() {
    const feedbackModal = document.getElementById("feedback-form");
    feedbackModal.style.display = "none";
  
    // Reset the feedback form to its initial state
    const ratingsContainer = document.querySelector(".ratings-container");
    const ratingThanks = document.querySelector(".rating-thanks");
    const feedbackForm = document.querySelector("#feedback-form form");
  
    ratingsContainer.style.display = "flex";
    ratingThanks.style.display = "none";
    feedbackForm.reset();
    }
  
// Event listener for the close button in the feedback modal
closeFeedbackButton.addEventListener("click", closeFeedbackModal);
  
//Function for feedback submission
window.addEventListener("DOMContentLoaded", function () {
    const feedbackBtn = document.querySelector(".feedback-btn");
    const ratingThanks = document.querySelector(".rating-thanks");
    const ratingsContainer = document.querySelector(".ratings-container");

    feedbackBtn.onclick = () => {
        ratingsContainer.style.display = "none";
        ratingThanks.style.display = "flex";
        return false;
    };
});