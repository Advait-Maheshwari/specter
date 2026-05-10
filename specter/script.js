console.log("SPECTRE EVOLVED");

/* LOADER */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 1500);

});

/* CURSOR GLOW */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

/* SCROLL BAR */

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / height) * 100;

    document.querySelector(".progress-bar").style.width =
    scrollPercent + "%";

});

/* MOBILE MENU */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* TYPING EFFECT */

const text =
"SPECTRE creates futuristic AI-powered ecosystems for the next generation.";

const typingElement = document.querySelector(".typing-text");

let index = 0;

function typeText(){

    if(index < text.length){

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 40);
    }

}

typeText();

/* PARTICLES */

particlesJS("particles-js", {

    particles: {

        number: {
            value: 90
        },

        color: {
            value: "#2563eb"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        move: {
            enable: true,
            speed: 2
        },

        line_linked: {
            enable: true,
            color: "#2563eb",
            opacity: 0.25
        }
    }

});