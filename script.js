document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Menü nyitás / zárás
    toggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        toggle.classList.toggle("active");
    });

    // Ha linkre kattint mobilon, bezárja a menüt
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            toggle.classList.remove("active");
        });
    });

});

