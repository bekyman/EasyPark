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


function initializeRegisterValidation() {
    const form = document.getElementById("register-form");

    if (!form) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const password = document.getElementById("password");
        const confirmPassword =
            document.getElementById("confirm-password");

        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity(
                "Passwords do not match."
            );
        } else {
            confirmPassword.setCustomValidity("");
        }

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        console.log("Register form passed client-side validation.");
    });
}

function initializeAuth() {
    initializePasswordToggles();
    initializeRegisterValidation();
}


document.addEventListener("DOMContentLoaded", () => {
    initializeAuth();
});