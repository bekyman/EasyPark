export function initializeNavbar() {

    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (!menuToggle || !navbar) {
        return;
    }

    menuToggle.addEventListener("click", () => {

        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        navbar.classList.toggle("is-open");

    });

}