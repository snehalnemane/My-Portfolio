/* ==========================================================
   PORTFOLIO SCRIPT
   PART 1A
   Typing Animation + Dark Mode
========================================================== */

/* ==========================================================
   TYPING ANIMATION
========================================================== */

const typingElement = document.getElementById("typing");

const professions = [
    "Software Developer",
    "Web Developer",
    "Java Programmer",
    "Python Programmer",
    "IT Engineering Student"
];

let professionIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const current = professions[professionIndex];

    if (!deleting) {

        typingElement.textContent =
            current.substring(0, characterIndex);

        characterIndex++;

        if (characterIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            current.substring(0, characterIndex);

        characterIndex--;

        if (characterIndex < 0) {

            deleting = false;

            professionIndex++;

            if (professionIndex >= professions.length) {

                professionIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();



/* ==========================================================
   DARK MODE
========================================================== */

const darkButton = document.getElementById("darkModeBtn");

if (darkButton) {

    // Load saved theme

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        darkButton.innerHTML =
            '<i class="fas fa-sun"></i>';

    }

    else {

        darkButton.innerHTML =
            '<i class="fas fa-moon"></i>';

    }


    // Toggle Theme

    darkButton.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            darkButton.innerHTML =
                '<i class="fas fa-sun"></i>';

        }

        else {

            localStorage.setItem("theme", "light");

            darkButton.innerHTML =
                '<i class="fas fa-moon"></i>';

        }

    });

}

console.log("✅ Part 1A Loaded Successfully");
/* ==========================================================
   PORTFOLIO SCRIPT
   PART 1B
   Back To Top + Scroll Reveal
========================================================== */

/* ==========================================================
   BACK TO TOP BUTTON
========================================================== */

const topButton = document.getElementById("topBtn");

if (topButton) {

    topButton.style.display = "none";

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topButton.style.display = "flex";

        } else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


/* ==========================================================
   SCROLL REVEAL ANIMATION
========================================================== */

const revealElements = document.querySelectorAll(

    "section, .project-card, .skill-card, .achievement-card, .certificate-card, .timeline-item, .info-box"

);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}


/* Initial Hidden State */

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";

});


window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


/* ==========================================================
   WINDOW LOADED
========================================================== */

window.addEventListener("load", () => {

    revealOnScroll();

    console.log("✅ Part 1B Loaded Successfully");

});
/* ==========================================================
   PORTFOLIO SCRIPT
   PART 1C
   Active Navbar + Smooth Scrolling
========================================================== */

/* ==========================================================
   NAVBAR LINKS
========================================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");


/* ==========================================================
   ACTIVE NAVBAR LINK ON SCROLL
========================================================== */

function updateActiveNav() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);

window.addEventListener("load", updateActiveNav);


/* ==========================================================
   SMOOTH SCROLLING
========================================================== */

navLinks.forEach((link) => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (!targetSection) return;

        window.scrollTo({

            top: targetSection.offsetTop - 70,

            behavior: "smooth"

        });

    });

});


/* ==========================================================
   NAVBAR LOADED
========================================================== */

console.log("✅ Part 1C Loaded Successfully");
/* ==========================================================
   PORTFOLIO SCRIPT
   PART 1D
   Skill Animation + Loading + Footer + Console
========================================================== */


/* ==========================================================
   SKILL BAR ANIMATION
========================================================== */

const skillSection = document.getElementById("skills");
const progressBars = document.querySelectorAll(".progress");

let skillAnimationDone = false;

function animateSkillBars() {

    if (skillAnimationDone) return;

    skillAnimationDone = true;

    progressBars.forEach((bar) => {

        let finalWidth = "";

        if (bar.classList.contains("html")) finalWidth = "95%";
        else if (bar.classList.contains("css")) finalWidth = "90%";
        else if (bar.classList.contains("javascript")) finalWidth = "80%";
        else if (bar.classList.contains("java")) finalWidth = "85%";
        else if (bar.classList.contains("python")) finalWidth = "90%";
        else if (bar.classList.contains("c")) finalWidth = "90%";
        else if (bar.classList.contains("cpp")) finalWidth = "85%";
        else if (bar.classList.contains("git")) finalWidth = "80%";

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.width = finalWidth;

        }, 150);

    });

}

if (skillSection) {

    window.addEventListener("scroll", () => {

        const sectionTop =
            skillSection.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 120) {

            animateSkillBars();

        }

    });

}


/* ==========================================================
   LOADING ANIMATION
========================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ==========================================================
   CURRENT YEAR IN FOOTER
========================================================== */

const copyright =
document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
    `© ${new Date().getFullYear()} Snehal Nemane. All Rights Reserved.`;

}


/* ==========================================================
   CONSOLE MESSAGE
========================================================== */

console.log(
"%cWelcome to Snehal Nemane's Portfolio 🚀",
"color:#2563eb;font-size:18px;font-weight:bold;"
);

console.log("✅ Part 1D Loaded Successfully");
/* ==========================================================
   PART 2
   CONTACT FORM (NODE.JS + EXPRESS + NODEMAILER)
========================================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        // Get Form Values

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation

        if (!name || !email || !subject || !message) {

            alert("Please fill all fields.");
            return;

        }

        const data = {
            name,
            email,
            subject,
            message
        };

        console.log("Sending Data:", data);

        try {

            const response = await fetch("http://localhost:5000/send", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)

            });

            const result = await response.json();

            console.log("Server Response:", result);

            if (response.ok && result.success) {

                alert("✅ Message sent successfully!");

                contactForm.reset();

            } else {

                alert(result.message || "❌ Failed to send message.");

            }

        }

        catch (error) {

            console.error("Fetch Error:", error);

            alert("❌ Cannot connect to the backend server.\n\nMake sure npm start is running.");

        }

    });

}

/* ==========================================================
   END OF SCRIPT
========================================================== */

console.log("✅ Portfolio JavaScript Loaded Successfully");