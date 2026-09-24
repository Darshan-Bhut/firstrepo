// ==========================
// Healthcare Website JavaScript
// ==========================

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });
});

// Appointment Form Validation

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const phone = form.querySelector('input[type="tel"]').value.trim();
        const department = form.querySelector("select").value;
        const message = form.querySelector("textarea").value.trim();

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            department === "Select Department"
        ) {
            alert("Please fill all required fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            alert("Enter a valid 10-digit phone number.");
            return;
        }

        alert(
            "Appointment booked successfully!\n\n" +
            "Thank you, " + name + "."
        );

        form.reset();

    });

}

// Sticky Header

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.position = "fixed";
        header.style.top = "0";
        header.style.left = "0";
        header.style.width = "100%";
        header.style.zIndex = "1000";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";

    } else {

        header.style.position = "relative";
        header.style.boxShadow = "none";

    }

});

// Back to Top Button

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "12px 16px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.background = "#0A6EBD";
topButton.style.color = "#fff";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

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

// Current Year in Footer

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} MediCare Hospital. All Rights Reserved.`;

}