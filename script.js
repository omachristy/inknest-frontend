const menuToggle = document.getElementById("menuToggle");
const navlinks = document.getElementById("navlinks");

if (menuToggle && navlinks) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navlinks.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    const navigationlinks = document.querySelectorAll(".nav-links a");
    navigationlinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navlinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

(function () {
    const sections = document.querySelectorAll("main > section");
    if (!sections.length) return;

    if (!("IntersectionObserver" in window)) {
        sections.forEach(function (el) {
            el.classList.add("visible");
        });
        return;
    }

    sections.forEach(function (el) {
        el.classList.add("reveal");
    });

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    sections.forEach(function (el) {
        observer.observe(el);
    });
})();