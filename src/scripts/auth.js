function initializePasswordToggles() {
    const toggleButtons = document.querySelectorAll(".password-toggle");

    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const field = button.closest(".password-field");

            if (!field) {
                return;
            }

            const input = field.querySelector("input");

            if (!input) {
                return;
            }

            const icon = button.querySelector("[data-lucide]");
            const showingPassword = input.type === "text";

            input.type = showingPassword
                ? "password"
                : "text";

            button.setAttribute(
                "aria-label",
                showingPassword
                    ? "Show password"
                    : "Hide password"
            );

            if (icon) {
                icon.setAttribute(
                    "data-lucide",
                    showingPassword
                        ? "eye"
                        : "eye-off"
                );

                if (window.lucide) {
                    window.lucide.createIcons();
                }
            }
        });
    });
}


function initializeAuth() {
    initializePasswordToggles();
}


document.addEventListener("DOMContentLoaded", () => {
    initializeAuth();
});