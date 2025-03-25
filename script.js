document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuLinks = document.querySelector("#links-menu");

    menuToggle.addEventListener("click", function () {
        menuLinks.classList.toggle("active");
    });
});
