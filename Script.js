// =========================
// MOBILE MENU
// =========================

function toggleMenu() {
    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("active");
}

// =========================
// Java Script
// =========================


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        document.querySelector(".navbar").classList.remove("active");
    });
});


// =========================
// CONTACT FORM
// =========================

function submitForm(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting STAR ENTERPRISES!\n\n" +
        "We will get back to you soon."
    );

    event.target.reset();
}


// =========================
// SCROLL ANIMATION
// =========================

const sections = document.querySelectorAll(
    ".about, .products, .projects, .why-us, .contact"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(function(section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});
