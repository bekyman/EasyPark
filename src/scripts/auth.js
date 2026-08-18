function initializePasswordToggles() {

    const toggleButtons = document.querySelectorAll(
        ".password-toggle"
    );

    toggleButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const passwordField =
                button.closest(".password-field");

            if (!passwordField) {
                return;
            }

            const input =
                passwordField.querySelector("input");

            const icon =
                button.querySelector("[data-lucide]");

            if (!input) {
                return;
            }

            const isPassword =
                input.type === "password";


            /*
             * Change input type
             */
            input.type = isPassword
                ? "text"
                : "password";


            /*
             * Update accessibility label
             */
            button.setAttribute(
                "aria-label",
                isPassword
                    ? "Hide password"
                    : "Show password"
            );


            /*
             * Update Lucide icon
             */
            if (icon) {

                icon.setAttribute(
                    "data-lucide",
                    isPassword
                        ? "eye-off"
                        : "eye"
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


document.addEventListener(
    "DOMContentLoaded",
    initializeAuth
);