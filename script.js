const words = [
    "black", // English
    "أسود", // Arabic
    "黑色", // Chinese
    "ブラック", // Japanese
    "чёрный", // Russian
    "noir", // French
    "schwarz", // German
    "nero", // Italian
    "mαύρος", // Greek
    "검정색"  // Korean
];

const topBarElement = document.getElementById("topBarText");
const menu = document.getElementById("menu");
const menuIcon = document.querySelector('.menu-icon');
let currentIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function toggleMenu() {
    menu.classList.toggle('active');
    menuIcon.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const loadingScreen = document.getElementById("loading-screen");
        if (loadingScreen) {
            loadingScreen.classList.add("hidden");
            setTimeout(() => {
                loadingScreen.style.display = "none";
            }, 1000); // Ensure the element is removed after the transition
        }
    }, 1000); // Start hiding loading screen after 1 second
});

function type() {
    const currentWord = words[currentIndex];

    if (isDeleting) {
        topBarElement.textContent = currentWord.substring(0, currentCharIndex);
        currentCharIndex--;
        if (currentCharIndex < 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % words.length;
        }
    } else {
        topBarElement.textContent = currentWord.substring(0, currentCharIndex);
        currentCharIndex++;
        if (currentCharIndex > currentWord.length) {
            isDeleting = true;
        }
    }

    setTimeout(type, isDeleting ? 100 : 200);
}

function toggleMenu() {
    var menu = document.getElementById('menu');
    var menuIcon = document.querySelector('.menu-icon');
    menu.classList.toggle('active');
    menuIcon.classList.toggle('open');
}

type();

function toggleReadMore() {
    const moreText = document.getElementById("more-text");
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
    } else {
        moreText.style.display = "none";
    }
}