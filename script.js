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

window.addEventListener('scroll', addClassOnScroll);

window.addEventListener('DOMContentLoaded', () => {
    addClassOnScroll();
});

// JavaScript code for toggling the navigation menu

const homeEl = document.getElementById('home');
const menuButton = document.getElementById('menu-button');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

// Function to close the navbar
function closeNavbar() {
    navbar.classList.remove('active');
    homeEl.classList.remove('expand');
}

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
    homeEl.classList.toggle('expand');
});

// Add click event listeners to each navigation link
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        closeNavbar(); // Close the navbar when a link is clicked
    });
});



// window.addEventListener('resize', () => {
//     if (window.innerWidth > 851) {
//         navbar.style.display = 'block';
//         }
//      else {
//         navbar.style.display = 'none';
//         };
// });



const textArray = [
    "Full Stack Developer",
    "Node.js Developer"
];

const typingSpeed = 50; 
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
            setTimeout(deleteText, 1000);
        }
    } else {
        textIndex = 0;
        charIndex = 0;
        setTimeout(typeText, 1000);
    }
}

function deleteText() {
    const currentText = textArray[textIndex];

    if (charIndex >= 0) {
        typingTextElement.textContent = currentText.substring(0, charIndex);
        charIndex--;
        setTimeout(deleteText, typingSpeed);
    } else {
        textIndex++;
        setTimeout(typeText, 1000);
    }
}

typeText();

let resumeBtn = document.querySelector('.nav-button')
console.log(resumeBtn)
resumeBtn.addEventListener('click', function() {
    window.location.href = "https://drive.google.com/uc?export=download&id=1t--akKZ1Dih6vi4BR8TNzBWxJKtm_aeK";
});
