document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("#links-menu");

    menuToggle.addEventListener("click", function () {
        menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    });
});
