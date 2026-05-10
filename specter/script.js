console.log("SPECTRE FULLY ACTIVE");

/* LOADER */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 2000);

});

/* CURSOR GLOW */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

/* SCROLL PROGRESS */

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / height) * 100;

    document.querySelector(".progress-bar").style.width =
    scrollPercent + "%";

});

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