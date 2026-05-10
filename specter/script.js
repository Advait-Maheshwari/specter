/* THEME */

const themeToggle =
document.getElementById("themeToggle");

let darkMode = true;

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    darkMode = !darkMode;

    themeToggle.innerHTML =
    darkMode ? "🌙" : "☀️";
});

/* SCROLL ANIMATION */

const fadeElements =
document.querySelectorAll(".fade-up");

const observer =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

fadeElements.forEach((el) => {
    observer.observe(el);
});

/* CURSOR */

const cursorGlow =
document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left =
    e.clientX + "px";

    cursorGlow.style.top =
    e.clientY + "px";
});

/* PARTICLES */

const canvas =
document.getElementById("particles");

const ctx =
canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for (let i = 0; i < 100; i++) {

    particles.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        radius: Math.random() * 2,

        dx: (Math.random() - 0.5) * 0.5,

        dy: (Math.random() - 0.5) * 0.5
    });
}

function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach((p) => {

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
        "rgba(56,189,248,0.7)";

        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (
            p.x < 0 ||
            p.x > canvas.width
        ) {
            p.dx *= -1;
        }

        if (
            p.y < 0 ||
            p.y > canvas.height
        ) {
            p.dy *= -1;
        }
    });

    requestAnimationFrame(
        animateParticles
    );
}

animateParticles();

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;
});


const cards =
document.querySelectorAll(
".card, .product-card, .dashboard-panel"
);

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const centerX =
        rect.width / 2;

        const centerY =
        rect.height / 2;

        const rotateX =
        ((y - centerY) / 20);

        const rotateY =
        ((centerX - x) / 20);

        card.style.transform =
        `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        scale(1.02)
        `;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        `
        rotateX(0)
        rotateY(0)
        translateY(0)
        scale(1)
        `;
    });
});


window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    document.querySelector(".background-glow")
    .style.transform =
    `translateY(${scrollY * 0.2}px)`;
});


/* AI CORE V2 */

const coreButtons =
document.querySelectorAll(".core-btn");

const terminal =
document.getElementById("terminal-output");

const statusText =
document.getElementById("status-text");

const progressBar =
document.getElementById("progress-bar");

const coreCenter =
document.querySelector(".core-center");

/* SYSTEM STATES */

const states = {

    initialize: {

        status: "BOOTING",

        className: "status-booting",

        coreClass: "booting",

        logs: [
            "> Initializing SPECTRE AI...",
            "> Loading neural systems...",
            "> Boot sequence started..."
        ],

        progress: "35%"
    },

    scan: {

        status: "SCANNING",

        className: "status-scanning",

        coreClass: "scanning",

        logs: [
            "> Running deep system scan...",
            "> Checking automation layers...",
            "> No threats detected."
        ],

        progress: "70%"
    },

    sync: {

        status: "ONLINE",

        className: "status-online",

        coreClass: "online",

        logs: [
            "> Neural synchronization active...",
            "> AI connection stabilized...",
            "> Ecosystem online."
        ],

        progress: "100%"
    },

    activate: {

        status: "ONLINE",

        className: "status-online",

        coreClass: "online",

        logs: [
            "> SPECTRE AI ACTIVATED.",
            "> Future systems online.",
            "> Welcome to the future."
        ],

        progress: "100%"
    }

};

/* BUTTON EVENTS */

coreButtons.forEach(button => {

    button.addEventListener("click", () => {

        coreButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const action =
        button.innerText.toLowerCase();

        let currentState;

        if(action.includes("initialize")){

            currentState =
            states.initialize;

        }

        else if(action.includes("scan")){

            currentState =
            states.scan;

        }

        else if(action.includes("sync")){

            currentState =
            states.sync;

        }

        else{

            currentState =
            states.activate;
        }

        /* STATUS */

        statusText.innerText =
        currentState.status;

        statusText.className =
        currentState.className;

        /* TERMINAL */

        terminal.innerHTML = "";

        currentState.logs.forEach((log, index) => {

            setTimeout(() => {

                terminal.innerHTML +=
                `<div>${log}</div>`;

            }, index * 600);

        });

        /* PROGRESS */

        progressBar.style.width =
        currentState.progress;

        /* CORE VISUAL */

        coreCenter.className =
        "core-center " +
        currentState.coreClass;

    });

});