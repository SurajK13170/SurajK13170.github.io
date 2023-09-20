// Function to add a class when an element is in the viewport
function addClassOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight - 100) {
            element.classList.add('animated');
        }
    });
}

// Add a scroll event listener to trigger animations when elements are in the viewport
window.addEventListener('scroll', addClassOnScroll);

// Check for animations on page load
window.addEventListener('DOMContentLoaded', () => {
    addClassOnScroll();
});


const menuButton = document.getElementById('menu-button');
const navbar = document.querySelector('.navbar');

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});



const textArray = [
    "Full Stack Developer",
    "Node.js Developer"
];

const typingSpeed = 50; // Adjust typing speed in milliseconds
const typingTextElement = document.querySelector(".typing-text");

let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (textIndex < textArray.length) {
        const currentText = textArray[textIndex];

        if (charIndex < currentText.length) {
            typingTextElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            // Start deleting the text after a brief pause
            setTimeout(deleteText, 1000);
        }
    } else {
        // Reset textIndex and charIndex to loop through the textArray again
        textIndex = 0;
        charIndex = 0;
        setTimeout(typeText, 1000); // Start typing animation again after a brief pause
    }
}

function deleteText() {
    const currentText = textArray[textIndex];

    if (charIndex >= 0) {
        typingTextElement.textContent = currentText.substring(0, charIndex);
        charIndex--;
        setTimeout(deleteText, typingSpeed);
    } else {
        // Move to the next text after a brief pause
        textIndex++;
        setTimeout(typeText, 1000);
    }
}

typeText(); // Start typing animation when the page loads

let resumeBtn = document.querySelector('.nav-button')
console.log(resumeBtn)
resumeBtn.addEventListener('click', function() {
    window.location.href = "https://drive.google.com/uc?export=download&id=16qqEFGg8S2MPyypPG1qT7mBeQGnvHQsw";
});