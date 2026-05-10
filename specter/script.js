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

const energyLevel =
document.getElementById("energy-level");

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

        progress: "35%",
        
        energy: "25%"
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

        progress: "70%",

        energy: "60%"
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

        progress: "100%",

        energy: "85%"
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

        progress: "100%",

        energy: "100%"
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


        /* ENERGY */

    energyLevel.innerText =
    currentState.energy;

    coreCenter.classList.remove(
    "low-energy",
    "medium-energy",
    "high-energy"
);

    const energyValue =
    parseInt(currentState.energy);

    if(energyValue <= 30){

    coreCenter.classList.add(
    "low-energy");

}

    else if(energyValue <= 80){

    coreCenter.classList.add(
    "medium-energy");

}

    else{

    coreCenter.classList.add(
    "high-energy");
}

        /* CORE VISUAL */

        coreCenter.className =
        "core-center " +
        currentState.coreClass;

    });

});


/* NEURAL NETWORK */

window.addEventListener("load", () => {

    const canvas =
    document.getElementById("networkCanvas");

    /* STOP IF CANVAS DOESN'T EXIST */

    if(!canvas) return;

    const ctx =
    canvas.getContext("2d");

    /* CANVAS SIZE */

    canvas.width =
    canvas.offsetWidth;

    canvas.height =
    canvas.offsetHeight;

    /* MOUSE */

    const mouse = {

        x: null,
        y: null,
        radius: 120

    };

    canvas.addEventListener("mousemove", (e) => {

        const rect =
        canvas.getBoundingClientRect();

        mouse.x =
        e.clientX - rect.left;

        mouse.y =
        e.clientY - rect.top;

    });

    /* PARTICLES */

    const particles = [];

    class Particle{

        constructor(x,y,dx,dy,size){

            this.x = x;
            this.y = y;

            this.dx = dx;
            this.dy = dy;

            this.size = size;
        }

        draw(){

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
            "#38bdf8";

            ctx.fill();
        }

        update(){

            if(
                this.x > canvas.width ||
                this.x < 0
            ){
                this.dx *= -1;
            }

            if(
                this.y > canvas.height ||
                this.y < 0
            ){
                this.dy *= -1;
            }

            this.x += this.dx;
            this.y += this.dy;

            /* MOUSE EFFECT */

            const distance =
            Math.sqrt(
                (mouse.x - this.x) ** 2 +
                (mouse.y - this.y) ** 2
            );

            if(distance < mouse.radius){

                this.size = 5;

            }else{

                this.size = 2;
            }

            this.draw();
        }

    }

    /* CREATE PARTICLES */

    for(let i = 0; i < 90; i++){

        particles.push(

            new Particle(

                Math.random() * canvas.width,

                Math.random() * canvas.height,

                (Math.random() - 0.5) * 1.5,

                (Math.random() - 0.5) * 1.5,

                2
            )

        );

    }

    /* CONNECT PARTICLES */

    function connectParticles(){

        for(let a = 0; a < particles.length; a++){

            for(let b = a; b < particles.length; b++){

                const dx =
                particles[a].x -
                particles[b].x;

                const dy =
                particles[a].y -
                particles[b].y;

                const distance =
                Math.sqrt(dx * dx + dy * dy);

                if(distance < 120){

                    ctx.beginPath();

                    ctx.strokeStyle =
                    "rgba(56,189,248,0.15)";

                    ctx.lineWidth = 1;

                    ctx.moveTo(
                        particles[a].x,
                        particles[a].y
                    );

                    ctx.lineTo(
                        particles[b].x,
                        particles[b].y
                    );

                    ctx.stroke();
                }

            }

        }

    }

    /* ANIMATION LOOP */

    function animateNetwork(){

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach(particle => {

            particle.update();

        });

        connectParticles();

        requestAnimationFrame(
            animateNetwork
        );

    }

    animateNetwork();

});