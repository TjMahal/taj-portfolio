const welcomeButton = document.querySelector(".btn")
welcomeButton.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Welcome to Taj Wangai's Portfolio!🚀");
});

function updateClock () {
    const clock = document.querySelector("#clock");
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);

const typingText = document.querySelector("#typing-text");
const roles = ["Software Engineer", "Future Engineer", "Problem Solver", "Tech Enthusiast"];
let roleIndex = 0;
let characterIndex = 0;
let deleting = false;
function typeEffect () {
    const currentRole = roles[roleIndex];
    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }
    typingText.textContent = currentRole.substring(0, characterIndex);
    let delay = deleting ? 50 : 100;
    if (!deleting && characterIndex === currentRole.length) {
        delay = 1200;
        deleting = true;
    } else if (deleting && characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 300;
    }
    setTimeout(typeEffect, delay);
}
typeEffect();